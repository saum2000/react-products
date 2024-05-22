import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext, useEffect, useState } from 'react';
import Modal from './Modal';
import { CartStore } from '../stores/cart';
import { Product } from '../clients/FakeStoreClient';

export default function Header() {
  const [showCartModal, setShowCartModal] = useState(false);
  const { cart, setCart } = useContext(CartStore)
  const [cartProducts, setCartProducts] = useState<any[]>([])
  const [cartTotal, setCartSubtotal] = useState(0)

  const onDelete = (id: number) => {
    let newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  }

  useEffect(() => {
    setCartProducts(Object.values(cart))
  }, [cart])

  useEffect(() => {
    let cartTotal = 0;
    cartProducts.forEach((p: Product) => {
      cartTotal += (p.qty || 1) * p.price
    })
    setCartSubtotal(cartTotal)
  }, [cartProducts])

  return (
    <>
      <div className='header p-2 flex justify-between items-center'>
        <div className='p-2 text-xl leading-6 font-medium text-center'>My Shop</div>
        {cartProducts?.length ? (<ShoppingCart fontSize='medium' onClick={() => { setShowCartModal(!showCartModal) }} />) : (<ShoppingCartOutlinedIcon fontSize='medium' onClick={() => { setShowCartModal(!showCartModal) }} />)}
      </div>
      {showCartModal && <Modal onClose={() => setShowCartModal(!showCartModal)}>
        <div className='font-semibold text-xl'>Cart</div>
        <hr className='my-3'></hr>
        <div className="cart-product-container" >
          {cartProducts.map((product: Product) => (
            <div className="flex items-center p-4 border border-gray-300 rounded mb-4 text-sm">
              <div className="mr-4">
                <img src={product.image} alt={product.title} className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <div className="font-bold">{product.title}</div>
                <div>Quantity: {product.qty}</div>

                <span className="px-2 my-1 flex items-center capitalize category-label" >
                  {product.category}
                </span>

              </div>
              <DeleteOutlineOutlinedIcon
                onClick={() => onDelete(product.id)}
                className="rounded-full cursor-pointer"
              />

            </div>
          ))}
        </div>
        {cartTotal > 0 &&
          <div>
            <hr className='my-3'></hr>
            <div className='flex justify-between relative'>
              <span className='font-semibold'>Sub Total</span> ₹{cartTotal.toFixed(2)}</div>
            <button className="font-medium text-m mt-2 py-2 absolute add-to-cart-button" >
              Checkout
            </button>
          </div>
        }

      </Modal>}
    </>
  )
}
