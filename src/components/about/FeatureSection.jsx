import React from "react";
import FeatureImage from "../../assets/images/about-feature.webp";
import { GiComb } from "react-icons/gi";
import { TbTimeDuration0 } from "react-icons/tb";
import { Marquee } from "../ui/marquee";

export default function FeatureSection() {
  return (
    <>
      <section className="text-white-bg min-h-[550px] bg-black">
        <div className="container px-3 py-10 md:px-5 md:py-20">
          <div className="main-content flex flex-col justify-center lg:justify-start gap-5 lg:flex-row lg:gap-20">
            <div className="left-content">
              <img
                className="mb-10 w-full lg:max-h-[600px]"
                src={FeatureImage}
                alt=""
              />
            </div>
            <div className="right-content"></div>
            <div className="heading">
              <div className="section-badge mx-0">FEATURES</div>
              <h2 className="section-title mx-0 max-w-lg text-left">
                WHY CHOOSE OUR SERVICES?
              </h2>
              <br />
              <div className="content mt-10 flex w-full items-center justify-between gap-5 md:mt-5 md:gap-10">
                <div className="left w-fit">
                  <div className="icon bg-light-orange w-fit rounded-full p-3">
                    {" "}
                    <GiComb size={40} />
                  </div>
                  <h2 className="py-5 text-xl md:text-2xl">QUALITY SERVICE</h2>
                  <p className="text-light-gray max-w-[250px]">
                    From classic cuts to modern styles, we craft looks that suit
                    your personality.
                  </p>
                </div>
                <div className="right w-fit">
                  <div className="icon bg-light-orange w-fit rounded-full p-3">
                    {" "}
                    <TbTimeDuration0 size={40} />
                  </div>
                  <h2 className="py-5 text-xl md:text-2xl">ON-TIME DEMAND</h2>
                  <p className="text-light-gray max-w-[250px]">
                    From fades to textured crops, we tailor each cut to match
                    your unique vibe.
                  </p>
                </div>
              </div>
              <br />
            </div>
          </div>
          <br />
          <Marquee className="gap-0">
            <div className="flex">
              <img
                src={FeatureImage}
                alt=""
                className="max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
              />
              <img
                src={FeatureImage}
                alt=""
                className="max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
              />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}
