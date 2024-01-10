import { Product } from "../../../../entities/product";
import request from "../../../request";

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await request.get("/products");

  return response.data;
};
