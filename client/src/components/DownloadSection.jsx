import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import mobileImg from "../assest/mobile.png";

const DownloadSection = () => {
  return (
    <div className="p-4">
      {/* Outer Container */}
      <div className="rounded-lg max-w-5xl w-full mx-auto bg-green-100 border border-green-300 p-7">
        {/* Inner Flex Container */}
        <div className="flex flex-col bg-green-100 sm:flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
          {/* Left Column: Image */}
          <div className="flex-1 ">
            <img src={mobileImg} alt="Phone" className=" bg-transparent " />
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 space-y-4">
            {/* Heading */}
            <h3 className="text-5xl font-semibold text-black">
              Download Our App to Get Amazing{" "}
              <span className="text-green-500 underline">Deals</span>
            </h3>

            {/* Paragraph */}
            <p className="text-gray-900">
              Get new deals every day.Top deals have the best offers and share
              them with you.To avail off offers , find our app in the play
              store.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0  sm:space-x-4">
              <button className="flex items-center bg-black text-white py-2 px-4 rounded-md">
                <FaGooglePlay className="text-white text-3xl mr-2" />
                <div className="text-[10px] text-start leading-[7px]">
                  Adndroid app on <br />
                  <span className="text-2xl">Google Play</span>
                </div>
              </button>
              <button className="flex  items-center bg-black text-white py-2 px-4 rounded-md">
                <FaApple className="text-white text-4xl  mr-2" />
                <div className="text-[13px] text-start leading-[8px]">
                  Download on the <br />
                  <span className="text-2xl">App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Divider Line */}
      <hr className="border-gray-300 my-8" />

      {/* Additional Content */}
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-6">
        {/* First Box */}
        <div className="text-center">
          <h4 className="text-xl font-medium black">788400+</h4>
          <p className="text-gray-900">Active Users</p>
        </div>
        {/* Second Box */}
        <div className="text-center">
          <h4 className="text-xl font-medium black">6000+</h4>
          <p className="text-gray-900">Retailers</p>
        </div>
        {/* Third Box */}
        <div className="text-center">
          <h4 className="text-xl font-medium black">3Million</h4>
          <p className="text-gray-900">Active Users</p>
        </div>
        {/* Fourth Box */}
        <div className="text-center">
          <h4 className="text-xl font-medium black">2.2Million</h4>
          <p className="text-gray-900">Downloads</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
