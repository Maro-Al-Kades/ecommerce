import CategoryType from "../shared/CategoryType";
import ProductCard from "../shared/ProductCard";

const LatestClothes = () => {
  return (
    <section className="flex flex-col gap-8">
      <CategoryType
        CategoryName="احدث الازياء"
        BtnName="المزيد"
        BtnLink="/categories/clothes"
      />

      <div className="flex flex-wrap flex-row items-center justify-center gap-10">
        <ProductCard
          title={"احدث الازياء في عالم الموضة"}
          price={250}
          imageSrc="/1.jpg"
        />
        <ProductCard
          title={"احدث الازياء في عالم الموضة"}
          price={250}
          imageSrc="/1.jpg"
        />
        <ProductCard
          title={"احدث الازياء في عالم الموضة"}
          price={250}
          imageSrc="/1.jpg"
        />
        <ProductCard
          title={"احدث الازياء في عالم الموضة"}
          price={250}
          imageSrc="/1.jpg"
        />
        <ProductCard
          title={"احدث الازياء في عالم الموضة"}
          price={250}
          imageSrc="/1.jpg"
        />
      </div>
    </section>
  );
};

export default LatestClothes;
