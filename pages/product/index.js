import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/Product.module.css";

const Product = () => {
  return (
    <>
      <Header />
      <h1 className={styles.heading}>Product Page 👍</h1>
      <Link href="/blog/individualDetail">
        <a className={`${styles.textColor} ${styles.textPadding}`}>Details</a>
      </Link>
    </>
  );
};

export default Product;
