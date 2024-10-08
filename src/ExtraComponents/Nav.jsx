import React from "react";
import LottieAnimation from "../animation/LottieAnimation";
const Nav = () => {
  return (
    <div className="relative flex flex-auto">
      <div className="navbar bg-base-300 fixed top-0 left-0 right-0 z-10">
        <a className="btn btn-ghost text-xl">TaskMaster</a>
      </div>
      {/* Lottie Animation with modern floating style */}
      <div className="absolute top-0 right-0  z-20 transform transition-transform duration-500 hover:scale-110">
        <LottieAnimation />
      </div>
    </div>
  );
};

export default Nav;
