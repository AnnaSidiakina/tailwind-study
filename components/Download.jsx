import React from "react";
import Image from "next/image";

function Download() {
  return (
    <div className="container mx-auto mt-16">
      <h2 className="font-montserrat text-4xl text-greenDark font-medium text-center">
        Let the Universe hear you!
      </h2>
      <div className="mt-16 flex justify-between">
        <div className="flex gap-5">
          <div>
            <Image src="/logo.png" alt="logo" width={250} height={271} />
          </div>
          <div>
            <p className="font-poppins text-6xl">Giftroom</p>
            <p className="font-poppins text-2xl text-slate-400 ml-1 font-light">
              Gift list, wish list
            </p>
            <Image
              src="/stars.png"
              alt="stars"
              width={170}
              height={33}
              className="mt-8"
            />
            <ul className="mt-14 flex gap-3">
              <li className=" hover:scale-105 transition-all">
                <a href="https://www.apple.com/de/store" target="_blank">
                  <Image
                    src="/Apple.svg"
                    alt="Apple store"
                    width={177}
                    height={63}
                  />
                </a>
              </li>
              <li className=" hover:scale-105 transition-all">
                <a href="https://play.google.com/store" target="_blank">
                  <Image
                    src="/Android.svg"
                    alt="Android store"
                    width={177}
                    height={63}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-lightBlue relative w-[500px] text-right px-4 pt-4">
          <Image
            src="/dl.png"
            alt="girl"
            width={301}
            height={368}
            className="absolute top-[-27px] left-[-136px]"
          />
          <p className="font-poppins text-8xl text-grey font-extrabold">
            <Image
              src="/arrow.svg"
              alt="more"
              width={28}
              height={40}
              className="inline mr-10"
            />
            1000
          </p>
          <p className="font-poiret text-8xl text-yellow -mt-4">new</p>
          <p className="font-poiret text-7xl text-grey -mt-3">users</p>
        </div>
      </div>
    </div>
  );
}

export default Download;
