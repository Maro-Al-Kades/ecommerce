import AdminProductCard from "@/components/other/AdminProductCard";
import CategoryType from "@/components/shared/CategoryType";
import Paginations from "@/components/shared/Paginations";
import React from "react";

const AdminAllProducts = () => {
  return (
    <section className="flex flex-col gap-8">
      <CategoryType CategoryName="ادارة جميع المنتجات" />

      <div className="flex flex-row flex-wrap items-start gap-10">
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
        <AdminProductCard
          title="منتج تجريبي رائع جدا للادمن"
          price={500}
          imageSrc="/1.jpg"
        />
      </div>
      <Paginations />
    </section>
  );
};

export default AdminAllProducts;
