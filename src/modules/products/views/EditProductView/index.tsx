import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Button } from "antd";
import { Product } from "../../../../entities/product";
import { getProduct } from "../../../../api/modules/products/requests/getProduct";
import { updateProduct } from "../../../../api/modules/products/requests/updateProduct";
import styles from "./styles.module.css";
import { showSuccessNotification } from "../../../../common/utils/notifications";

const { TextArea } = Input;

interface Form {
  title: string;
  description: string;
  price: string;
}

const EditProductView = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState({} as Product);

  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null as null | Error);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  } as Form);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    if (!id) {
      return;
    }

    setError(null);

    setLoading(true);

    try {
      const response = await getProduct(+id);
      setForm({
        title: response.title,
        description: response.description,
        price: String(response.price),
      });
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = async () => {
    if (!id) {
      return;
    }

    setSubmitLoading(true);
    try {
      const response = await updateProduct(+id, form);
      showSuccessNotification("Успешно изменено");
      navigate("/products");
    } catch (e) {
      setError(e as Error);
      throw e;
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.formContent}>
          <h2 className={styles.title}>Редактировать</h2>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <Input
              value={form.title}
              placeholder="Название"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              disabled={loading}
            />
            <TextArea
              value={form.description}
              rows={4}
              placeholder="Описание"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              disabled={loading}
            />
            <Input
              value={form.price}
              placeholder="Цена"
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              disabled={loading}
            />

            <Button
              type="primary"
              onClick={handleEditProduct}
              loading={submitLoading}
              disabled={loading}
            >
              Редактировать
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductView;
