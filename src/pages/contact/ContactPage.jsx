import CommonHero from "@/components/CommonHero";
import HeroThumbnail from "../../assets/images/contact-hero-thumbnail.webp";
import React from "react";
import ContactMapSection from "@/components/contact/ContactMapSection";
import AppointmentSection from "@/components/CommonCTA";

export default function ContactPage() {
  return (
    <>
      <div className="wrapper bg-white-bg pb-[50px]">
        <CommonHero
          mainBg={HeroThumbnail}
          title="GET IN TOUCH"
          description="We specialize in making you look great—through expert cuts, color mastery, and honest care."
        />
        <ContactMapSection />
        <AppointmentSection />
      </div>
    </>
  );
}
