import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";

// The index route is the default child route that will be rendered when the parent path is matched
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "sign-up", element: <SignUp /> },
      {path: "login", element: <Login/>}
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
