import { useEffect, useState } from "react";
import { Product } from "../../../../entities/product";
import { fetchAllProducts } from "../../../../api/modules/products/requests/fetchAllProducts";
import ProductCards from "../../components/ProductCards";
import { deleteProduct } from "../../../../api/modules/products/requests/deleteProduct";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { showErrorNotification } from "../../../../common/utils/notifications";

const ListProductsView = () => {
  const [products, setProducts] = useState([] as Product[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as null | Error);

  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async ({
    withLoading = true,
  }: {
    withLoading?: boolean;
  } = {}) => {
    setError(null);
    if (withLoading) {
      setLoading(true);
    }
    try {
      const response = await fetchAllProducts();
      setProducts(response);
    } catch (e) {
      setError(e as Error);
      showErrorNotification("Произошла ошибка");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (event: Product) => {
    try {
      setProducts((prevProducts) => {
        return prevProducts.filter((product) => product.id !== event.id);
      });

      const response = await deleteProduct(event.id);
    } catch (e) {
      setError(e as Error);
      showErrorNotification("Произошла ошибка");
      throw e;
    }
  };

  const handleEditProduct = (event: Product) => {
    if (!event.id) return;
    navigate("/products/edit/" + event.id);
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <ProductCards
          products={products}
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default ListProductsView;
