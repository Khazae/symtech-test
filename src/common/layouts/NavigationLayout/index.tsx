import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./styles.module.css";

const NavigationLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
    </div>
  );
};

export default NavigationLayout;
