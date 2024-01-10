import { EditOutlined } from "@ant-design/icons";
import { Avatar, Card, Popconfirm } from "antd";
import styles from "./styles.module.css";

const { Meta } = Card;

interface Props {
  onEdit?: () => void;
  onDelete?: () => void;
  title?: string;
  image?: string;
  desc?: string;
  className?: string;
}

const ProductCard = ({
  className,
  onEdit = () => ({}),
  onDelete = () => ({}),
  title = "",
  image = "https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149279002.jpg",
  desc = "",
}: Props) => {
  const handleDelete = () => {
    onDelete();
  };

  const handleEdit = () => {
    onEdit();
    console.log("click");
  };

  return (
    <Card
      className={className}
      style={{ width: 300 }}
      cover={<img alt={title} src={image} className={styles.image} />}
      actions={[
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={handleDelete}
          onCancel={() => {}}
          okText="Удалить"
          cancelText="Отмена"
        >
          Delete
        </Popconfirm>,
        <EditOutlined key="edit" onClick={handleEdit} />,
      ]}
    >
      <Meta avatar={<Avatar src={image} />} title={title} description={desc} />
    </Card>
  );
};

export default ProductCard;
