import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Men from "./routes/Men.jsx";
import Women from "./routes/Women.jsx";
import HomeLiving from "./routes/HomeLiving.jsx";
import Beauty from "./routes/Beauty.jsx";
import Kids from "./routes/Kids.jsx";
import ProfilePage from "./routes/ProfilePage.jsx";
import Offer from "./routes/Offer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/men", element: <Men /> },
      { path: "/women", element: <Women /> },
      { path: "/kids", element: <Kids /> },
      { path: "/home-living", element: <HomeLiving /> },
      { path: "/beauty", element: <Beauty /> },
      { path: "/offer", element: <Offer /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
