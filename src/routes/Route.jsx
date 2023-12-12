import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../components/Home/Home/Home";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
