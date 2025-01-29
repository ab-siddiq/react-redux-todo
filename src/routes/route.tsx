import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../pages/login";
import { Tasks } from "../pages/tasks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        index: true,
        element: <Tasks></Tasks>,
      },
    ],
  },
]);

export default routes;
