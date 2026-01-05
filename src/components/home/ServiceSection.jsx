import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceIcon01 from "../../assets/images/service-icon-01.png";
import ServiceIcon02 from "../../assets/images/service-icon-02.png";
import ServiceIcon03 from "../../assets/images/service-icon-03.png";
import ServiceIcon04 from "../../assets/images/service-icon-04.png";
import ServiceIcon05 from "../../assets/images/service-icon-05.png";
import ServiceIcon06 from "../../assets/images/service-icon-06.png";

export default function ServiceSection() {
  return (
    <>
      <section className="min-h-screen bg-[#F4F1EE]">
        <div className="container px-3 py-10 md:px-5 md:py-16">
          <div className="section-badge">OUR SERVICES</div>
          <h2 className="section-title max-w-xl">
            Your Trusted Local Barber Services
          </h2>
          <br />
          <div className="services-card mx-2 mt-5 grid grid-cols-1 gap-5 sm:mx-0 sm:grid-cols-2 md:mt-8 md:grid-cols-3 md:gap-8 lg:gap-12">
            <ServiceCard
              icon={ServiceIcon01}
              title="BLADE & BRUSH"
              description="Styles we craft looks that suit your personality and lifestyle."
              price="$20"
              repeatCount={3}
            />

            <ServiceCard
              icon={ServiceIcon02}
              title="THE GENTS' DEN"
              description="We design styles tailored to your personality and lifestyle."
              price="$30"
              repeatCount={3}
            />

            <ServiceCard
              icon={ServiceIcon03}
              title="FADE THEORY"
              description="Crafting looks that reflect who you are and how you live."
              price="$25"
              repeatCount={3}
            />

            <ServiceCard
            icon={ServiceIcon04}
              title="SNIP SOCIETY"
              description="Personalized styles created to match your unique lifestyle."
              price="$35"
              repeatCount={3}
            />

            <ServiceCard
              icon={ServiceIcon05}
              title="CRAFTED CUTS"
              description="Our styles complement your personality and everyday life."
              price="$28"
              repeatCount={3}
            />

            <ServiceCard
            icon={ServiceIcon06}
              title="THE RAZOR ROOM"
              description="Tailoring looks that perfectly fit your individuality."
              price="$32"
              repeatCount={3}
            />
          </div>
        </div>
      </section>
    </>
  );
}
