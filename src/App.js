import "./App.css";
import Awards from "./Pages/Awards";
import Home from "./Pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:'/awards',
      element:<Awards/>
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
