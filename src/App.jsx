import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Details from "./Components/Details/Details";
import Navbarsection from "./Components/Navbar/Navbar";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import CartIcon from "./Components/CartComponent/Cart";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/register";

function App() {
  return (
    <BrowserRouter>
      <Navbarsection />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/:id" element={<Details />}></Route>
        <Route path="/cart" element={<CartIcon />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
