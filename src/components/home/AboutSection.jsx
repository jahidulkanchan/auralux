import React from "react";
import AboutUs from "../../assets/images/about-us.webp";
import ChooseUs from "../../assets/images/choose-us.webp";
import { MdCheckBox } from "react-icons/md";

export default function AboutSection() {
  return (
    <>
      <section className="bg-white-bg">
        <div className="container flex flex-col justify-between gap-12 px-3 py-10 md:flex-row md:gap-8 md:px-5 md:py-16">
          <div className="left-content max-w-[750px]">
            <div className="section-badge mx-0">About HairCraft</div>
            <h2 className="section-title mx-0 max-w-lg text-left">
              Your Trusted Salon & Barber shop.
            </h2>
            <br />
            <img src={AboutUs} alt="About Us" />
            <br />
          </div>
          <div className="right-content min-h-[200px] w-full max-w-[750px]">
            <img src={ChooseUs} alt="About Us" />
            <br />
            <div className="content min-h-[400px] bg-white p-5 py-8 lg:min-h-[300px] xl:min-h-[525px]">
              <h2 className="text-2xl md:text-4xl font-semibold">Why Choose Us?</h2>
              <br />
              <h2 className="text-xl">
                From classic cuts to modern styles, we craft looks that suit
                your personality and lifestyle.
              </h2>
              <br />
              <div className="check-item flex gap-2.5 space-y-2.5 italic">
                <MdCheckBox size={30} className="text-light-orange" />{" "}
                <span className="text-lg">
                  Skilled & certified professionals
                </span>
              </div>
              <div className="check-item flex gap-2.5 space-y-2.5 italic">
                <MdCheckBox size={30} className="text-light-orange" />{" "}
                <span className="text-lg">
                  Clean, relaxing, and welcoming environment
                </span>
              </div>
              <div className="check-item flex gap-2.5 space-y-2.5 italic">
                <MdCheckBox size={30} className="text-light-orange" />{" "}
                <span className="text-lg">
                  Personalized grooming consultations
                </span>
              </div><br />
              <div className="section-badge px-16 w-full text-center py-3 mx-auto">OUR EXPERTISE</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
