import Home from "../components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Page from "../components/pages/Pages";
import ProductDetails from "../components/productDetails/ProductDetails";
import LoginPage from "../components/login/Login";
import RegisterPage from "../components/register/Register";
import OrderComplete from "../components/ordercomplete/OrderComplete";
import ShoppingCart from "../components/shopping cart/Shoppingcart";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/productdetail" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ordercomplete" element={<OrderComplete />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
};
export default RoutesPage;
