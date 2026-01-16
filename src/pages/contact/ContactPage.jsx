import CommonHero from "@/components/CommonHero";
import HeroThumbnail from "../../assets/images/contact-hero-thumbnail.webp";
import React from "react";
import CTACard from "@/components/home/CTACard";
import ContactMapSection from "@/components/contact/ContactMapSection";

export default function ContactPage() {
  return (
    <>
      <CommonHero mainBg={HeroThumbnail} />
      <ContactMapSection />
    </>
  );
}
