"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/grid";
import { reviewsData } from "@/constants/reviews";
import Image from "next/image";
import ArrowLeft from "../public/ArrowLeft.svg";
import ArrowRight from "../public/ArrowRight.svg";

function Reviews() {
  return (
    <div id="reviews" className="container mx-auto pt-16 pb-8">
      <h2 className="text-greenDark font-poiret text-5xl">Reviews</h2>
      <Swiper
        modules={[Navigation]}
        speed={1000}
        slidesPerView={2}
        spaceBetween={190}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mt-20"
      >
        {reviewsData.map(({ review, avatar, name, id }) => (
          <SwiperSlide key={id}>
            <p className="font-montserrat text-2xl font-light">
              <Image
                src="/quotesTop.svg"
                alt="quotes"
                width={45}
                height={61}
                className="inline"
              />

              {review}
              <span>
                <Image
                  src="/quotesBottom.svg"
                  alt="quotes"
                  width={45}
                  height={61}
                  className="inline"
                />
              </span>
            </p>
            <div className="flex items-center gap-9 mt-12">
              <div className="w-full h-[1px] bg-grey"></div>
              <Image src={avatar} alt="users photo" width={45} height={48} />
              <p className="text-nowrap text-greenDark font-montserrat text-2xl font-light">
                {name}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center gap-[190px] mt-16">
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next "></button>
        </div>
      </Swiper>
    </div>
  );
}

export default Reviews;
