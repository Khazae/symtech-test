export const getApiConfig = () => {
  return {
    apiUrl: import.meta.env.VITE_API_URL || "https://fakestoreapi.com",
  };
};
