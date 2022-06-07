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
import { shopexOffer } from "../../data";


const Home = () => {
  const product = shopexOffer;
  return (
    <>
      <SwipeableTextMobileStepper />
      <FeatureProducts />
      <LatestProduct />
      <ShopexOffer title="What Shopex Offer!" product={product} />
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
