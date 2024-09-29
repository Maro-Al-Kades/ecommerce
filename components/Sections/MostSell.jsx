"use client";

import { useState, useEffect } from "react";
import CategoryType from "../shared/CategoryType";
import ProductCard from "../shared/ProductCard";
import axiosInstance from "@/tools/api";

const MostSell = ({}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/products") // Replace with your API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <section className="flex flex-col gap-8">
      <CategoryType
        CategoryName="الأكثر مبيعا"
        BtnName="المزيد"
        BtnLink="/products"
      />

      <div className="flex flex-wrap flex-row items-center justify-center gap-10">
        {data
          ?.sort((a, b) => b.price - a.price) // فرز المنتجات بناءً على السعر (الأعلى أولاً)
          .slice(0, 5) // أخذ أعلى 6 منتجات
          .map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageSrc={product.image}
            />
          ))}
      </div>
    </section>
  );
};

export default MostSell;
