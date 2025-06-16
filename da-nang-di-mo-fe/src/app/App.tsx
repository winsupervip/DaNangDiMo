import {ConfigProvider} from "antd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Layout} from "../layouts";
import Login from "./auth/login/page";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      //    <PrivateRouter>
      // <PageRedirectsRouters>
      <Layout />
      // </PageRedirectsRouters>
      //    </PrivateRouter>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ce7a58",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}
