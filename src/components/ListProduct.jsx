import CardProduct from "./CardProduct";

export default function ListProduct({ products }) {
  return (
    <>
      <div
        className="grid grid-cols-3 gap-8 m-auto my-20"
        style={{ width: "70%" }}
      >
        {products.map((item) => (
          <div key={item.id}>
            <CardProduct item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
