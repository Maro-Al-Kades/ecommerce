import CategoriesCards from "../shared/CategoriesCards";
import CategoryType from "../shared/CategoryType";

const PopularBrands = () => {
  return (
    <section className="flex flex-col gap-8">
      <CategoryType
        CategoryName="أشهر الماركات"
        BtnName="المزيد"
        BtnLink="/brands"
      />
      <CategoriesCards />
    </section>
  );
};

export default PopularBrands;
