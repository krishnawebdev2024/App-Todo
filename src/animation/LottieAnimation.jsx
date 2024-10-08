import React from "react";
import Lottie from "lottie-react";
import animationData from "../Assets/emoji1.json";

const LottieAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "200px", height: "200px" }} // Adjust the size here
      />
    </div>
  );
};

export default LottieAnimation;
