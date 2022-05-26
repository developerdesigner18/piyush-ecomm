import Footer from "../footer/Footer";
import Blog from "./Blog";
import SwipeableTextMobileStepper from "./Carousel";
import DiscountItem from "./DiscoutItem";
import FeatureProducts from "./FeaturedProducts";
import LatestProduct from "./LatestProduct";
import Newsletter from "./Newsletter";
import ShopexOffer from "./Shopex";
import Sofa from "./Sofa";
import TopCategory from "./Topcategory";
import Trending from "./Trending";

const Home = () => {
  return (
    <>
      <SwipeableTextMobileStepper />
      <FeatureProducts />
      <LatestProduct />
      <ShopexOffer />
      <Sofa />
      <Trending />
      <DiscountItem />
      <TopCategory />
      <Newsletter />
      <Blog />
    </>
  );
};
export default Home;
