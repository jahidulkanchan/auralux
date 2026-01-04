import React from 'react'
import HeroSection from '../../components/home/HeroSection'
import FunFacts from '../../components/home/FunFacts'
import ServiceSection from '../../components/home/ServiceSection'
import AboutSection from '@/components/home/AboutSection'
import TeamSection from '@/components/home/TeamSection'

export default function HomePage() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <ServiceSection/>
    <FunFacts/>
    <TeamSection/>
    </>
  )
}
