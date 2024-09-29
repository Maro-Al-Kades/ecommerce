import CategoryType from "../shared/CategoryType";
import ProductCard from "../shared/ProductCard";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col gap-10">
      <CategoryType CategoryName="منتجات قد تعجبك" />

      <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RelatedProducts;
