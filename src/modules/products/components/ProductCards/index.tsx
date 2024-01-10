import ProductCard from "../../../../common/components/ProductCard";
import ProductCardLoader from "../../../../common/components/ProductCard/ProductCardLoader";
import { Product } from "../../../../entities/product";
import { SmileOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

interface Props {
  products?: Product[];
  loading?: boolean;
  error?: Error | null;
  onEdit?: (event: Product) => void;
  onDelete?: (event: Product) => void;
}

const ProductCards = ({
  products = [],
  loading = false,
  error = null,
  onEdit = () => ({}),
  onDelete = () => ({}),
}: Props) => {
  return (
    <div className={styles.items}>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>Произошла ошибка при загрузке товаров</h2>}
      {products.length === 0 && !loading && !error && (
        <div style={{ textAlign: "center" }}>
          <SmileOutlined style={{ fontSize: 20 }} />
          <p>Data Not Found</p>
        </div>
      )}
      {!loading &&
        !error &&
        products.map((product) => (
          <div className={styles.item} key={product.id}>
            <ProductCard
              title={product.title}
              image={product.image}
              desc={product.description}
              onDelete={() => onDelete(product)}
              onEdit={() => onEdit(product)}
            />
          </div>
        ))}
    </div>
  );
};

export default ProductCards;
