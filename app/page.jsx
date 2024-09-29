import Ads from "@/components/other/Ads";
import Carousel from "@/components/Sections/Carousel/Carousel";
import CategoriesSection from "@/components/Sections/CategoriesSection";
import LatestClothes from "@/components/Sections/LatestClothes";
import MostSell from "@/components/Sections/MostSell";
import PopularBrands from "@/components/Sections/PopularBrands";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoriesSection />
      <MostSell />
      <Ads />
      <LatestClothes />
      <PopularBrands />
    </div>
  );
};

export default Home;
