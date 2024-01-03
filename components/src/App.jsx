import shoppingCartImg from './assets/icon-cart.svg'
import desktopProductImg from './assets/image-product-desktop.jpg'
import mobileProductImg from './assets/image-product-mobile.jpg'
import { useState, useEffect } from 'react'

export default function App() {
  const [productImg, setProductImg] = useState(desktopProductImg)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setProductImg(mobileProductImg)
      } else {
        setProductImg(desktopProductImg)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  return (
    <main>
      <section className="product-container">
        <img src={productImg} alt="" className="product-img" />
        <div className="product-info">
          <p className="product-category">PERFUME</p>
          <h2 className="product-title">Gabrielle Essence Eau De Parfum</h2>
          <p className="product-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="product-prices">
            <h3 className="product-price">149.99</h3>
            <span className="product-price-former">169.99</span>
          </div>
          <button className="add-btn">
            <img src={shoppingCartImg} alt="" className="btn-icon"/>
            <p className="btn-text">Add to cart</p>
          </button>
        </div>
      </section>
    </main>
  )
}
