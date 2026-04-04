import { getFoods } from "@/src/services/product-service";
import ProductItem from "./ProductItem";

export default async function ProductList() {

  // Gọi trực tiếp dữ liệu trên Server
  const products = await getFoods();

  if (products.length === 0) {
    return <p className="text-center py-10">Không có sản phẩm nào.</p>;
  }
  
  return (

    <div className="row">
      {
        products.map((product) => <ProductItem product={product} key={product.id} />)
      }
  </div>
  );
}