import { Link, useParams } from "react-router-dom";
import JEWELRY from "../../data/jewelry.json";

import { FaFire } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import InputQuantity from "../components/ProductDetails/InputQuantity";
import { currencyFormatter } from "../util/formatting";
import { useContext, useMemo, useState } from "react";
import FigureProduct from "../components/ProductDetails/FigureProduct";
import ModalSizeGuide from "../components/ProductDetails/ModalSizeGuide";
import MoreProductInfo from "../components/ProductDetails/MoreProductInfo";
import ProductOption from "../components/ProductDetails/ProductOption";
import { CartContext } from "../store/CartContext";
import { image } from "motion/react-m";
import toast from "react-hot-toast";
export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart, cartItems } = useContext(CartContext);
    const item = JEWELRY.find((item) => item.id === parseInt(id));

    // Cac state de quan ly cac component
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
    const [quantityInput, setQuantityInput] = useState(1);

    // Tim ra duoc so luong cua san pham o trong gio hang
    const inCart = useMemo(() => {
        return (
            cartItems.find(
                (cartItem) =>
                    cartItem.id === item.id &&
                    JSON.stringify(cartItem.selectedOption) ===
                        JSON.stringify(selectedOption)
            )?.quantity || 0
        );
    }, [cartItems, item.id, selectedOption]);

    // Su dung useMemo de cap nhat lai gia cua price va quantity
    const price = useMemo(() => {
        const variant = item.variants.find(
            (v) => v.stone === selectedOption.stone
        );
        return variant.price;
    }, [selectedOption.stone, item.variants]);

    const quantity = useMemo(() => {
        const variant = item.variants.find(
            (v) =>
                v.stone === selectedOption.stone &&
                v.size === selectedOption.size &&
                v.metal === selectedOption.metal
        );
        return variant?.quantity || 0;
    }, [selectedOption, item.variants]);

    // Phuong thuc chon stone
    
    function handleOption(type, value) {
        const updated = {
            ...selectedOption,
            [type]: value,
        };
        setSelectedOption(updated);
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
    function handleAddItem() {
        addToCart({
            id: item.id,
            image: item.images[0],
            name: item.name,
            selectedOption: selectedOption,
            quantity: quantityInput,
            maxQuantity: quantity,
            price,
            total: price * quantityInput,
        });
        setQuantityInput(1);
        toast.success("Đã thêm vào giỏ hàng!");
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
                        options={item.options}
                        onOption={handleOption}
                        onModal={handleModal}
                    />
                    <ProductOption
                        selectedOption={selectedOption}
                        option={"sizes"}
                        value={"size"}
                        options={item.options}
                        onOption={handleOption}
                        onModal={handleModal}
                    />

                    <ProductOption
                        selectedOption={selectedOption}
                        option={"metals"}
                        value={"metal"}
                        options={item.options}
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
                    <p className="mt-5 text-lg font-sans">
                        {item.shortDescription}
                    </p>
                    <InputQuantity
                        value={quantityInput}
                        onChange={setQuantityInput}
                        currentQuantity={inCart}
                        maxQuantity={quantity}
                    />
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
