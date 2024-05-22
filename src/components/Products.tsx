import { useEffect, useState } from "react";
import { getAllProducts, Product } from "../clients/FakeStoreClient";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((r) => setProducts(r || []));
  }, []);

  return (
    <div className="p-4 flex items-center justify-center">
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        onClick={() => console.log(getAllProducts())}
      >
        {products.map((product) => (
          <li
            className="product-card my-4 p-4 w-60 cursor-pointer"
            key={product.id}
          >
            <div style={{ margin: "auto auto" }}>
              <div>
                <img src={product.image} />
              </div>
              <div>
                <span>{product.title}</span>
                <span>{product.category}</span>
                {/* <span>{product.description}</span> */}
                <span>{product.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
