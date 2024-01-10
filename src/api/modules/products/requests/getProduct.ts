import { Product } from "../../../../entities/product";
import request from "../../../request";

export const getProduct = async (id: number): Promise<Product> => {
  const response = await request.get(`/products/${id}`);

  return response.data;
};
