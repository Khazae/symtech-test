import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <a href="/">
              <img src="https://fakestoreapi.com/icons/logo.png" alt="Logo" />
            </a>
          </div>
          <div className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link className={styles.link} to="/products">
                  Продукты
                </Link>
              </li>
              <li className={styles.li}>
                <Link className={styles.link} to="/products/create">
                  Добавить товар
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
