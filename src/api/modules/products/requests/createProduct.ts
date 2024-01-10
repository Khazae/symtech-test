import request from "../../../request";

interface CreateProductDto {
  title: string;
  description: string;
  price: string;
}

export const createProduct = async (payload: CreateProductDto) => {
  const response = await request.post("/products", {
    title: payload.title,
    description: payload.description ? payload.description : null,
    price: payload.price ? payload.price : null,
  });

  return response.data;
};
