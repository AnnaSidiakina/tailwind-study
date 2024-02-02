"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/grid";

function Description() {
  const [isActive, setIsActive] = useState(1);

  function setId(id) {
    if (isActive === id) {
      return true;
    } else return false;
  }

  return (
    <div id="description" className="container mx-auto">
      <h2 className="font-poiret text-greenDark text-5xl">Description</h2>
      <Swiper
        modules={[Navigation, EffectCards]}
        loop={true}
        centeredSlides={true}
        effect={"cards"}
        cardsEffect={{
          perSlideOffset: 50,
          perSlideRotate: 0,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={(e) => setIsActive(e.realIndex + 1)}
        className="mt-12"
      >
        <SwiperSlide key={1}>
          <div
            className={`description ${
              setId(1) ? "descriptionActive" : "descriptionNotActive"
            }`}
          >
            Share your dream to your World and it will come true!
          </div>
        </SwiperSlide>

        <SwiperSlide key={2}>
          <div
            className={`description ${
              setId(2) ? "descriptionActive" : "descriptionNotActive"
            }`}
          >
            A mobile application for those who believe in miracles and the
            fulfillment of desires!
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div
            className={`description ${
              setId(3) ? "descriptionActive" : "descriptionNotActive"
            }`}
          >
            You can create your own wishes (thereby prompting your loved ones
            what to give you for the upcoming holiday), as well as reserve gifts
            for your friends.
          </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <div
            className={`description ${
              setId(4) ? "descriptionActive" : "descriptionNotActive"
            }`}
          >
            Now you do not need to rack your brains thinking up another erunda,
            you can just go to a friend&apos;s profile and spy on what he dreams
            of.
          </div>
        </SwiperSlide>
        <SwiperSlide key={5}>
          <div
            className={`description ${
              setId(5) ? "descriptionActive" : "descriptionNotActive"
            }`}
          >
            Giving a cherished, long-awaited present is much more pleasant!
          </div>
        </SwiperSlide>
        <SwiperSlide key={6}>
          <div
            className={`description ${
              setId(6) ? "descriptionActive" : "descriptionNotActive"
            }`}
          >
            After all, now you will be sure that you will like it.
          </div>
        </SwiperSlide>
        <SwiperSlide key={7} className="translate-z-full">
          <div
            className={`description ${
              setId(7) ? "descriptionActive " : "descriptionNotActive"
            }`}
          >
            Dream, visualize, plan, strive, save and get!
          </div>
        </SwiperSlide>

        <div className="flex justify-center gap-[190px] mt-16">
          <button className="swiper-button-prev">
            <Image
              alt="arrow left"
              src="/ArrowLeft.svg"
              width={70}
              height={3}
            />
          </button>
          <button className="swiper-button-next">
            <Image
              alt="arrow right"
              src="/ArrowRight.svg"
              width={70}
              height={3}
            />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Description;
