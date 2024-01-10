import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const HomeView = () => {
  return (
    <div className={styles.linkContent}>
      <Link to={"/products"} className={styles.link}>
        Перейти на страницу продуктов
      </Link>
    </div>
  );
};

export default HomeView;
