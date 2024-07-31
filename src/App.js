import "./App.css";
import Awards from "./Pages/Awards";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ContentContext from "./utils/contentContext";
import axiosInstance from "./utils/axios";
import { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusinessBenifit from "./Pages/businessBenifit";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/awards",
      element: <Awards />,
    },
    {
      path: "/business-benefits",
      element: <BusinessBenifit />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  const getContent = async () => {
    try {
      const { data } = await axiosInstance.get("/api/content/content");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContent();
    return () => {};
  }, []);

  return (
    <div className="App">
      <ContentContext.Provider value={{ getContent }}>
        <RouterProvider router={router} />
      </ContentContext.Provider>
    </div>
  );
}

export default App;
