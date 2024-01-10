import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../../common/utils/notifications";
import { createProduct } from "../../../../api/modules/products/requests/createProduct";
import styles from "./styles.module.css";

const { TextArea } = Input;

interface Form {
  title: string;
  description: string;
  price: string;
}

const CreateProductView = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null as null | Error);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  } as Form);

  const handleCreateProduct = async () => {
    setSubmitLoading(true);
    try {
      const response = await createProduct(form);
      showSuccessNotification("Успешно добавлено");
      navigate("/products");
    } catch (e) {
      setError(e as Error);
      showErrorNotification("Произошла ошибка");
      throw e;
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.formContent}>
          <h2 className={styles.title}>Добавить товар</h2>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <Input
              value={form.title}
              placeholder="Название"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              disabled={submitLoading}
            />
            <TextArea
              value={form.description}
              rows={4}
              placeholder="Описание"
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              disabled={submitLoading}
            />
            <Input
              value={form.price}
              placeholder="Цена"
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              disabled={submitLoading}
            />

            <Button
              type="primary"
              onClick={handleCreateProduct}
              loading={submitLoading}
            >
              Добавить
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductView;
