import { Link, useParams } from "react-router-dom";
import JEWELRY from "../../data/jewelry.json";

import { FaFire } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import InputQuantity from "../components/ProductDetails/InputQuantity";
import { currencyFormatter } from "../util/formatting";
import { useContext, useState } from "react";
import FigureProduct from "../components/ProductDetails/FigureProduct";
import ModalSizeGuide from "../components/ProductDetails/ModalSizeGuide";
import MoreProductInfo from "../components/ProductDetails/MoreProductInfo";
import ProductOption from "../components/ProductDetails/ProductOption";
import { CartContext } from "../store/CartContext";
import { image } from "motion/react-m";
export default function ProductDetail() {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const item = JEWELRY.find((item) => item.id === parseInt(id));
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState({
    des: false,
    detail: false,
  });
  const [selectedOption, setSelectedOption] = useState({
    stone: item.options.stones[0],
    size: item.options.sizes[0],
    metal: item.options.metals[0],
  });
  const options = item.options;
  const variants = item.variants;
  const [quantity, setQuantity] = useState(variants[0].quantity);
  const [price, setPrice] = useState(variants[0].price);
  const [quantityInput, setQuantityInput] = useState(1);

  // Phuong thuc chon stone
  function handleOption(type, value) {
    const updated = {
      ...selectedOption,
      [type]: value,
    };
    const variant = variants.find(
      (v) =>
        v.stone === updated.stone &&
        v.size === updated.size &&
        v.metal === updated.metal
    );
    const va = variants.find((v) => v.stone === updated.stone);
    setSelectedOption(updated);
    setPrice(va.price);
    setQuantity(variant?.quantity || 0);
  }

  // Phuong thuc mo modal size
  function handleModal() {
    setIsModal(!isModal);
  }

  // Phuong thuc de hien thi them thong tin chi tiet
  function handleOpen(type) {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [type]: !prevOpen[type],
    }));
  }

  // Phuong thuc them san pham vao gio hang
  function handleAddItem(item) {
    addItemToCart({
      id: item.id,
      name: item.name,
      selectedOption: selectedOption,
      quantity: quantityInput,
      price,
      total: price * quantity,
    });
  }

  return (
    <div className="container py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <FigureProduct images={item.images} />
        <section className="col-span-2">
          {quantity > 0 ? (
            <span className="text-[15px] bg-green-600 px-2 py-1 text-white rounded-sm">
              In Stock
            </span>
          ) : (
            <span className="text-[15px] bg-red-600 px-2 py-1 text-white rounded-sm">
              Out Stock
            </span>
          )}

          <h1 className="text-[30px] font-bold mt-2">{item.name}</h1>
          <span className="inline-block mt-2 text-4xl font-sans italic ">
            {currencyFormatter.format(price)}
          </span>
          <ProductOption
            selectedOption={selectedOption}
            option={"stones"}
            value={"stone"}
            options={options}
            onOption={handleOption}
            onModal={handleModal}
          />
          <ProductOption
            selectedOption={selectedOption}
            option={"sizes"}
            value={"size"}
            options={options}
            onOption={handleOption}
            onModal={handleModal}
          />

          <ProductOption
            selectedOption={selectedOption}
            option={"metals"}
            value={"metal"}
            options={options}
            onOption={handleOption}
            onModal={handleModal}
          />
          <div className="flex mt-5 gap-3 items-center">
            <FaFire />
            <span className="font-light text-lg">
              <strong>{item.recentlySold} </strong>
              sold in recently
            </span>
          </div>
          <p className="mt-5 text-lg font-sans">{item.shortDescription}</p>
          <div className="flex items-center gap-5">
            <InputQuantity value={quantityInput} onChange={setQuantityInput} />
            {quantity > 0 && (
              <span className="text-lg mt-4">Quantity: {quantity}</span>
            )}
          </div>
          <button
            disabled={quantity === 0}
            className={`border bg-black text-white mt-5 w-full py-2 font-bold flex items-center justify-center gap-3 ${
              quantity === 0 ? "opacity-50" : ""
            }`}
            onClick={handleAddItem}
          >
            <HiOutlineShoppingBag size={"25px"} />
            <span>ADD TO CART</span>
          </button>
          <button
            className="mt-5 text-lg w-full font-semibold"
            disabled={quantity === 0}
          >
            Buy it now
          </button>
          <MoreProductInfo
            isOpen={isOpen}
            onOpen={handleOpen}
            descriptions={item.detailedDescription}
            productDetails={item.productDetails}
          />
        </section>
      </div>
      <ModalSizeGuide isOpen={isModal} onClose={handleModal} />
    </div>
  );
}
