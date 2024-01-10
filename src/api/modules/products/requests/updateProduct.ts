import request from "../../../request";

interface UpdateProductDto {
  title: string;
  description: string;
  price: string;
}

export const updateProduct = async (id: number, payload: UpdateProductDto) => {
  const response = await request.patch(`/products/${id}`, {
    title: payload.title,
    description: payload.description ? payload.description : null,
    price: payload.price ? payload.price : null,
  });

  return response.data;
};
