import "./App.css";
import { BrowserRouter, Outlet, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ContextProvider } from "/home/ezechiel/repos/shopping-cart/src/context/ShopContext";

function App() {
  return (
    <ContextProvider>
      <div className="w-screen h-screen bg-gray-200 dark:bg-slate-900">
        <Header></Header>
        <div className="items-center p-2 w-full max-w-6xl mx-auto">
          <Outlet />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
