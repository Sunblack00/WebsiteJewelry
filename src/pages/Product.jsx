import ListProduct from "../components/ListProduct";
import { jewrlys } from "../../data/jewrlry";

export default function Product() {
  const jewrly = jewrlys.slice(12 ,18);
  return <ListProduct products={jewrly}></ListProduct>;
}
