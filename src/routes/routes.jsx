import Home from "../components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Page from "../components/pages/Pages";
import ProductDetails from "../components/productDetails/ProductDetails";
import LoginPage from "../components/login/Login";
import RegisterPage from "../components/register/Register";
import OrderComplete from "../components/ordercomplete/OrderComplete";
import BasicTable from "../components/shopping cart/cart";
import Blog from "../components/blog/Blog";
import About from "../components/about/About";
import ContactUs from "../components/contactus/ContactUs";
import ErrorPage from "../components/errorpage/ErrorPage";
import Faq from "../components/faq/Faq";
import Listview from "../components/pages/Listview";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Page />} />
        <Route path="/productdetail" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ordercomplete" element={<OrderComplete />} />
        <Route path="/shop" element={<BasicTable />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/notfound" element={<ErrorPage />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
};
export default RoutesPage;
