// import  from "./pages/header";
import {
  Login,
  Register,
  Basket,
  Error,
  Header,
  Main,
  HomeLayout,
  Halal,
} from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
      },
      {
        path: "/halal",
        element: <Halal />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
