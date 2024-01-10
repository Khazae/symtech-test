import { createBrowserRouter } from "react-router-dom";
import GeneralLayout from "../common/layouts/GeneralLayout";
import NavigationLayout from "../common/layouts/NavigationLayout";
import ListProductsView from "../modules/products/views/ListProductsView";
import HomeView from "../modules/home/views";
import EditProductView from "../modules/products/views/EditProductView";
import CreateProductView from "../modules/products/views/CreateProductView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "/",
        element: <NavigationLayout />,
        children: [
          {
            path: "/",
            element: <HomeView />,
          },
          {
            path: "/products",
            element: <ListProductsView />,
          },
          {
            path: "/products/edit/:id",
            element: <EditProductView />,
          },
          {
            path: "/products/create",
            element: <CreateProductView />,
          },
        ],
      },
    ],
  },
]);

export default router;
