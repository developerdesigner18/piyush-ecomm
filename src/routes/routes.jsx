import Home from "../components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Page from "../components/pages/Pages";
import ProductDetails from "../components/productDetails/ProductDetails";

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page />} />
        <Route path="/productdetail" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};
export default RoutesPage;
