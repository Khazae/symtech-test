import request from "../../../request";

export const deleteProduct = async (id: number) => {
  const response = await request.delete(`/products/${id}`);

  return response.data;
};
