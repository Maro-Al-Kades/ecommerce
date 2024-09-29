"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Carousel = () => {
  return (
    <section>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-h-[500px] rounded-2xl"
      >
        <SwiperSlide>
          <Image src="/2.webp" alt="img" width={2000} height={2000} />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image src="/1.jpg" alt="img" width={2000} height={2000} />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image src="/1.jpg" alt="img" width={2000} height={2000} />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image src="/1.jpg" alt="img" width={2000} height={2000} />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image src="/1.jpg" alt="img" width={2000} height={2000} />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image src="/1.jpg" alt="img" width={2000} height={2000} />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <Image src="/1.jpg" alt="img" width={2000} height={2000} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
