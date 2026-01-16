import CommonHero from '@/components/CommonHero'
import HeroThumbnail from "../../assets/images/contact-hero-thumbnail.webp";
import React from 'react'
import CTACard from '@/components/home/CTACard';

export default function ContactPage() {
  return (
    <>
    <CommonHero mainBg={HeroThumbnail} />
    <div className="contact-map">
        <div className="left-content"><CTACard/></div>
        <div className="right-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem eius tenetur! Et magnam similique facilis accusamus minus reiciendis perspiciatis cupiditate! Corrupti repellat in numquam labore molestiae autem exercitationem sint.</div>
    </div>
    </>
  )
}
