import "./App.css";

import Tracking from "./components/tracking/Tracking";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";
import LoginPage from "./pages/login/Login";
import ErrorPage from "./pages/error/ErrorPage";
import Home from "./pages/home/Home";

const user = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <>{user ? <RootLayout /> : <LoginPage />}</>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/myt-tracking",
        element: <Tracking />,
      },
      {
        path: "/in-transit",
        element: <Tracking />,
      },
      {
        path: "/delay",
        element: <Tracking />,
      },
      {
        path: "/on-time",
        element: <Tracking />,
      },
      {
        path: "/dealer-point",
        element: <Tracking />,
      },
      {
        path: "/myt-tracking",
        element: <Tracking />,
      },
      {
        path: "/myt-tracking",
        element: <Tracking />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
