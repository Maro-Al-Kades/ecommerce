import CategoriesCards from "../shared/CategoriesCards";
import CategoryType from "../shared/CategoryType";

const CategoriesSection = () => {
  return (
    <section className="flex flex-col gap-8">
      <CategoryType CategoryName="التصنيفات" BtnName="المزيد" BtnLink="/categories" />

      <CategoriesCards />
    </section>
  );
};

export default CategoriesSection;
