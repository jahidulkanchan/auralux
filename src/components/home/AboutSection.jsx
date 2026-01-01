import React from "react";
import AboutUs from "../../assets/images/about-us.webp";
import ChooseUs from "../../assets/images/choose-us.webp";
import { MdCheckBox } from "react-icons/md";

export default function AboutSection() {
  return (
    <>
      <section className="bg-white-bg">
        <div className="container flex items-center justify-between gap-12 px-3 py-10 md:gap-8 md:px-5 md:py-16">
          <div className="left-content max-w-[650px]">
            <div className="section-badge mx-0">About HairCraft</div>
            <h2 className="section-title mx-0 max-w-lg text-left">
              Your Trusted Salon & Barber shop.
            </h2>
            <br />
            <img src={AboutUs} alt="About Us" />
            <br />
          </div>
          <div className="right-content min-h-[200px] w-full max-w-[650px]">
            <img src={ChooseUs} alt="About Us" />
            <br />
            <div className="content bg-white p-5 py-8 h-full">
              <h2 className="text-2xl font-semibold">Why Choose Us?</h2><br />
              <p>
                From classic cuts to modern styles, we craft looks that suit
                your personality and lifestyle.
              </p>
              <br />
              <div className="check-item space-y-2.5 flex items-center gap-2.5">
                <MdCheckBox size={35} className="text-light-orange" />{" "}
                <span>Skilled & certified professionals</span>
              </div>
              <div className="check-item space-y-2.5 flex items-center gap-2.5">
                <MdCheckBox size={35} className="text-light-orange" />{" "}
                <span>Skilled & certified professionals</span>
              </div>
              <div className="check-item space-y-2.5 flex items-center gap-2.5">
                <MdCheckBox size={35} className="text-light-orange" />{" "}
                <span>Skilled & certified professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
