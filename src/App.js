import { useContext } from "react";
import { RouterProvider } from "react-router";


import "./App.css";
import router from "./Routes/routes.config";

function App() {

  return (
    <div className="App duration-1000 transition-colors">
        
      <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
