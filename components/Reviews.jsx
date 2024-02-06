"use client";
import React from "react";
import { useState, useEffect } from "react";
import { reviewsData } from "@/constants/reviews";
import Image from "next/image";
import ArrowLeft from "../public/ArrowLeft.svg";
import ArrowRight from "../public/ArrowRight.svg";

function Reviews() {
  const [initialIndex, setInitialIndex] = useState(0);
  const [reviewsToDisplay, setReviewsTpoDisplay] = useState(
    reviewsData.slice(initialIndex, initialIndex + 2)
  );
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const handleRightClick = () => {
    setInitialIndex((prevState) => prevState + 1);
  };

  const handleLeftClick = () => {
    setInitialIndex((prevState) => prevState - 1);
  };

  useEffect(() => {
    setReviewsTpoDisplay(reviewsData.slice(initialIndex, initialIndex + 2));

    if (reviewsData.length === initialIndex + 1) {
      setIsRightButtonDisabled(true);
    } else {
      setIsRightButtonDisabled(false);
    }
    if (initialIndex === 0) {
      setIsLeftButtonDisabled(true);
    } else {
      setIsLeftButtonDisabled(false);
    }
  }, [initialIndex]);

  return (
    <div id="reviews" className="container mx-auto pt-16 pb-8">
      <h2 className="text-greenDark font-poiret text-5xl">Reviews</h2>
      <ul className="mt-20 grid grid-cols-2 justify-between gap-40">
        {reviewsToDisplay.map(({ review, avatar, name, id }) => (
          <li key={id}>
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
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-[190px] mt-16">
        <button disabled={isLeftButtonDisabled} onClick={handleLeftClick}>
          <ArrowLeft className={`${isLeftButtonDisabled && "disableButton"}`} />
        </button>
        <button
          className={`${isRightButtonDisabled} && "disableButton"`}
          onClick={handleRightClick}
          disabled={isRightButtonDisabled}
        >
          <ArrowRight
            className={`${isRightButtonDisabled && "disableButton"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Reviews;
