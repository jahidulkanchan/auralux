import CommonHero from "@/components/CommonHero";
import HeroThumbnail from "../../assets/images/contact-hero-thumbnail.webp";
import React from "react";
import ServiceSection from "@/components/home/ServiceSection";

export default function ServicePage() {
  return (
    <>
      <div className="wrapper bg-white-bg pb-[50px]">
        <CommonHero mainBg={HeroThumbnail} />
        <ServiceSection />
      </div>
    </>
  );
}
