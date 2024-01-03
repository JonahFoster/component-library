import shoppingCartImg from '../assets/icon-cart.svg';
import desktopProductImg from '../assets/image-product-desktop.jpg';
import mobileProductImg from '../assets/image-product-mobile.jpg';
import { useState, useEffect } from 'react';
import styles from '../assets/stylesheets/ProductCard.module.css';

export default function ProductCard() {
  const [productImg, setProductImg] = useState(desktopProductImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setProductImg(mobileProductImg);
      } else {
        setProductImg(desktopProductImg);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className={styles.productCard}>
      <section className={styles.productContainer}>
        <img src={productImg} alt="" className={styles.productImg} />
        <div className={styles.productInfo}>
          <p className={styles.productCategory}>PERFUME</p>
          <h2 className={styles.productTitle}>Gabrielle Essence Eau De Parfum</h2>
          <p className={styles.productDescription}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className={styles.productPrices}>
            <h3 className={styles.productPrice}>149.99</h3>
            <span className={styles.productPriceFormer}>169.99</span>
          </div>
          <button className={styles.addBtn}>
            <img src={shoppingCartImg} alt="" className={styles.btnIcon}/>
            <p className={styles.btnText}>Add to cart</p>
          </button>
        </div>
      </section>
    </main>
  );
}
