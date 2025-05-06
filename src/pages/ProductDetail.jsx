import { useEffect, useState, useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaFire } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import toast from "react-hot-toast";
import InputQuantity from "../components/ProductDetails/InputQuantity";
import { currencyFormatter } from "../util/formatting";
import FigureProduct from "../components/ProductDetails/FigureProduct";
import ModalSizeGuide from "../components/ProductDetails/ModalSizeGuide";
import MoreProductInfo from "../components/ProductDetails/MoreProductInfo";
import ProductOption from "../components/ProductDetails/ProductOption";
import CardProduct from "../components/CardProduct";
import { CartContext } from "../store/CartContext";

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart, cartItems } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [item, setItem] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const [error, setError] = useState(null);

    // State de quan ly cac compoent
    const [isModal, setIsModal] = useState(false);
    const [isOpen, setIsOpen] = useState({
        des: false,
        detail: false,
    });
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantityInput, setQuantityInput] = useState(1);

    // Fetch danh sach san pham tu api
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(
                    "https://jewelry-backend-inrv.onrender.com/api/products"
                );
                const jewelry = res.data;
                setProducts(jewelry);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products");
            }
        };

        fetchProducts();
    }, []);

    // Tim san pham hien tai
    useEffect(() => {
        if (products.length > 0) {
            // Tim san pham theo id
            const currentItem = products.find(
                (product) => product.id === parseInt(id)
            );
            setItem(currentItem);

            // Khoi tao selectionOption khi co tim ra duoc san pham
            if (currentItem && currentItem.options) {
                setSelectedOption({
                    stone: currentItem.options.stones?.[0] || "",
                    size: currentItem.options.sizes?.[0] || "",
                    metal: currentItem.options.metals?.[0] || "",
                });
                setQuantityInput(1);
            }

            // Loc ra cac san pham cung loai
            if (currentItem) {
                const filtered = products
                    .filter(
                        (product) =>
                            product.type === currentItem.type &&
                            product.id !== currentItem.id
                    )
                    .sort((a, b) => b.recentlySold - a.recentlySold)
                    .slice(0, 3);
                setRelatedProducts(filtered);
            }
        }
    }, [products, id]);

    // Tinh so luong san pham hien tai trong gio hang
    const inCart = useMemo(() => {
        if (!item) return 0;
        return (
            cartItems.find(
                (cartItem) =>
                    cartItem.id === item.id &&
                    JSON.stringify(cartItem.selectedOption) ===
                        JSON.stringify(selectedOption)
            )?.quantity || 0
        );
    }, [cartItems, item, selectedOption]);

    // Tinh gia san pham 
    const price = useMemo(() => {
        if (!item || !item.variants || !selectedOption) return 0;
        const variant = item.variants.find(
            (v) => v.stone === selectedOption.stone
        );
        return variant?.price || 0;
    }, [selectedOption, item]);

    // Tinh so luong ton kho
    const quantity = useMemo(() => {
        if (!item || !item.variants || !selectedOption) return 0;
        const variant = item.variants.find(
            (v) =>
                v.stone === selectedOption.stone &&
                v.size === selectedOption.size &&
                v.metal === selectedOption.metal
        );
        return variant?.quantity || 0;
    }, [selectedOption, item]);

    // Xy ly chon trong option
    function handleOption(type, value) {
        setSelectedOption((prev) => ({
            ...prev,
            [type]: value,
        }));
    }

    // Mo dong modal size guide
    function handleModal() {
        setIsModal(!isModal);
    }

    // Mở/đóng thông tin chi tiết
    function handleOpen(type) {
        setIsOpen((prevOpen) => ({
            ...prevOpen,
            [type]: !prevOpen[type],
        }));
    }

    // Thêm sản phẩm vào giỏ hàng
    function handleAddItem() {
        if (!item || quantity === 0) return;
        addToCart({
            id: item.id,
            image: item.images?.[0] || "",
            name: item.name,
            selectedOption,
            quantity: quantityInput,
            maxQuantity: quantity,
            price,
            total: price * quantityInput,
        });
        setQuantityInput(1);
        toast.success("Đã thêm vào giỏ hàng!");
    }

    if (error) return <p>{error}</p>;
    if (!item) return <p>Product not found</p>;

    return (
        <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <FigureProduct images={item.images || []} />
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
                    <span className="inline-block mt-2 text-4xl font-sans italic">
                        {currencyFormatter.format(price)}
                    </span>
                    <ProductOption
                        selectedOption={selectedOption}
                        option="stones"
                        value="stone"
                        options={item.options || {}}
                        onOption={handleOption}
                        onModal={handleModal}
                    />
                    <ProductOption
                        selectedOption={selectedOption}
                        option="sizes"
                        value="size"
                        options={item.options || {}}
                        onOption={handleOption}
                        onModal={handleModal}
                    />
                    <ProductOption
                        selectedOption={selectedOption}
                        option="metals"
                        value="metal"
                        options={item.options || {}}
                        onOption={handleOption}
                        onModal={handleModal}
                    />
                    <div className="flex mt-5 gap-3 items-center">
                        <FaFire />
                        <span className="font-light text-lg">
                            <strong>{item.recentlySold || 0} </strong>
                            sold recently
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
                        <HiOutlineShoppingBag size="25px" />
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
                        descriptions={item.detailedDescription || ""}
                        productDetails={item.productDetails || {}}
                    />
                </section>
            </div>
            <ModalSizeGuide isOpen={isModal} onClose={handleModal} />
            <p className="capitalize font-semibold text-xl mt-10">
                Sản Phẩm cùng loại
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
                {relatedProducts.length === 0 ? (
                    <p>Không có sản phẩm liên quan</p>
                ) : (
                    relatedProducts.map((product) => (
                        <div key={product.id}>
                            <CardProduct item={product} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
