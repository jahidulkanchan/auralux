import React from "react";
import HeroThumbnail from "../../assets/images/about-hero-bg.webp";
import CommonHero from "@/components/CommonHero";
import TeamSection from "@/components/home/TeamSection";
import FeatureSection from "@/components/about/FeatureSection";

export default function AboutPage() {
  return (
    <>
      <div className="wrapper bg-white-bg">
        <CommonHero mainBg={HeroThumbnail} title="ABOUT SALON" description="Whether you're here for a fresh fade or a full makeover, we’ve got you covered, our team of expert stylists." />
        <TeamSection />
        <FeatureSection />
      </div>
    </>
  );
}
