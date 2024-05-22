import { useEffect, useState, useContext } from "react";
import { Product, getAllProducts } from "../clients/FakeStoreClient";
import Filter from "./Filter";
import FeaturedProducts from "./FeaturedProducts";
import { CartStore } from "../stores/cart";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedFilterValue, setSelectedFilterValue] = useState<string>("All");
  const { cart, setCart } = useContext(CartStore)

  const addToCart = (product: Product) => {
    let newCart = { ...cart }

    if (newCart[product.id]) {
      newCart[product.id].qty = newCart[product.id].qty ? newCart[product.id].qty + 1 : 2;
    } else {
      newCart[product.id] = { ...product, qty: 1 }
    }

    setCart({ ...newCart })
  }

  useEffect(() => {
    !products.length && getAllProducts().then((r: Product[]) => setProducts(r || []));

  }, []);

  return (
    <div>
      <FeaturedProducts />
      <Filter selectedOption={selectedFilterValue} setSelectedOption={setSelectedFilterValue} />
      <div className="p-4 flex items-center justify-center">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"

        >
          {products?.filter((product) => (selectedFilterValue === 'All' || product.category.toLocaleLowerCase() == selectedFilterValue.toLocaleLowerCase()))?.map((product) => (
            <li
              className="product-card my-4 p-4 w-60"
              key={product.id}
            >
              <div>
                <div>
                  <img src={product.image} className="prod-img cursor-pointer mb-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm mt-2 flex justify-between items-center grey-text">
                    {product.title}

                    <svg className="cursor-pointer" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#262626" >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </span>
                  <span className="px-2 my-1 flex items-center capitalize product-category-pill">{product.category}</span>

                  <span className="font-normal text-sm pl-1 grey-text" >₹{product.price.toFixed(2)}</span>
                  <button className="font-medium text-m mt-2 py-1 primary-cta" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
