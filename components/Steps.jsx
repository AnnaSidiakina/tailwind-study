import React from "react";
import Image from "next/image";

function Steps() {
  return (
    <div className="container mx-auto mt-28">
      <div className="w-full h-[576px] bg-[url('/steps.png')] bg-no-repeat bg-cover"></div>

      <div className="grid grid-cols-3 gap-10 mt-20">
        <div className="stepsContainer">
          <p className="stepsNumber">1</p>
          <p className="stepsDescription">
            Plan. Visualize. Organize your gifts into categories.
          </p>
        </div>
        <div className="stepsContainer">
          <p className="stepsNumber">2</p>
          <p className="stepsDescription">Create your wishes</p>
        </div>
        <div className="stepsContainer">
          <p className="stepsNumber">3</p>
          <p className="stepsDescription">
            Be a wizard! Reserve and give presents to your friends
          </p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
