import CommonHero from "@/components/CommonHero";
import HeroThumbnail from "../../assets/images/contact-hero-thumbnail.webp";
import React from "react";
import ServiceSection from "@/components/home/ServiceSection";
import AppointmentSection from "@/components/CommonCTA";

export default function ServicePage() {
  return (
    <>
      <div className="wrapper bg-white-bg pb-[50px]">
        <CommonHero
          mainBg={HeroThumbnail}
          title="OUR EXPERTISE"
          description="Skilled hands, creative minds—we deliver styles that speak for you with confidence and flair."
        />
        <ServiceSection />
        <AppointmentSection />
      </div>
    </>
  );
}
