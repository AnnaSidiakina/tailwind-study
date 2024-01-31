import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-full ">
      <h1 className="text-light text-[144px] font-poppins font-bold mt-32 relative">
        Giftroom
        <Image
          src="/ipoint.png"
          alt="img"
          width={100}
          height={100}
          className="absolute top-[5px] left-[82px] "
        />
      </h1>
      <p className="font-poppins font-light text-4xl text-white">
        Application for the best friends
      </p>
      <ul className="flex mt-[115px] gap-8">
        <li className="relative z-50">
          <a href="https://www.apple.com/de/store" target="_blank">
            <Image src="/Apple.svg" alt="apple" width={250} height={82} />
          </a>
        </li>
        <li className="relative z-50">
          <a href="https://play.google.com/store" target="_blank">
            <Image src="/Android.svg" alt="apple" width={250} height={82} />
            <Image
              src="/girl.png"
              alt="apple"
              width={220}
              height={220}
              className="absolute top-[-102px] right-[-89px]"
            />
          </a>
        </li>
      </ul>

      <Image
        src="/3d.png"
        alt="img"
        width={1135}
        height={800}
        className="absolute bottom-[122px] right-[-50px] z-0"
      />
      <Image
        src="/heroPhone.png"
        alt="img"
        width={562}
        height={740}
        className="absolute  bottom-[156px] right-0 z-0"
      />
    </div>
  );
}

export default Hero;
