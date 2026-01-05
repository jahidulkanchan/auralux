import React from "react";
import HeroThumbnail from "../../assets/images/about-hero-bg.webp";
import CommonHero from "@/components/CommonHero";
import TeamSection from "@/components/home/TeamSection";
import FeatureSection from "@/components/about/FeatureSection";

export default function AboutPage() {
  return (
    <>
      <CommonHero mainBg={HeroThumbnail} />
      <TeamSection/>
      <FeatureSection/>
    </>
  );
}
