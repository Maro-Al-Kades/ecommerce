import CategoryType from "@/components/shared/CategoryType";
import Paginations from "@/components/shared/Paginations";
import ProductCard from "@/components/shared/ProductCard";

const UserFavourite = () => {
  return (
    <section className="flex flex-col w-full gap-8">
      <CategoryType CategoryName={`قائمة المفضلة`} />

      <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Paginations />
    </section>
  );
};

export default UserFavourite;
