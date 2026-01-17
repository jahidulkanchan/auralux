import CommonHero from "@/components/CommonHero";
import HeroThumbnail from "../../assets/images/gallery-hero-thumbnail.webp";
import React from "react";
import AppointmentSection from "@/components/CommonCTA";
import GallerySection from "@/components/gallery/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <div className="wrapper bg-white-bg pb-[50px]">
        <CommonHero
          mainBg={HeroThumbnail}
          title="salon overview"
          description="Precision cuts, flawless color, and expert styling—all delivered with skill and genuine attention."
        />
        <GallerySection/>
        <AppointmentSection />
      </div>
    </>
  );
}
