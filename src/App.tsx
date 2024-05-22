
import { useState } from 'react'
import { CartStore } from './stores/cart'
import Header from './components/Header'
import Products from './components/Products'
import './App.css'


function App() {
  const [cart, setCart] = useState<object>({})

  return (
    <div>
      <CartStore.Provider value={{ cart, setCart }}>
        <Header />
        <Products />
      </CartStore.Provider>
    </div>

  )
}

export default App
