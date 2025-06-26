import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import SignUp from "./pages/SignUp.tsx";

// Create a router with nested routes
// The root route renders the App component, which includes a Navbar and an outlet for nested routes
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
