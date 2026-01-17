import React from 'react'
import HeroSubThumbnail from "../assets/images/hero-sub.webp";
export default function CommonHero({mainBg}) {
  return (
    <>
     <section className="text-white-bg z-[999] flex min-h-[550px] mb-[50px] md:mb-[150px] justify-center bg-black text-center">
        <div className="relative container px-2 md:px-5">
          <div className="heading mt-[60px] md:mt-[100px]">
            <h1 className="section-title text-4xl xl:text-6xl">ABOUT SALON</h1>
            <p className="text-light-gray mx-auto mt-2.5 max-w-lg">
              Whether you're here for a fresh fade or a full makeover, we’ve got
              you covered, our team of expert stylists.
            </p>
          </div>
          <div className="hero-thumbnail top-2/5 mt-16 flex flex-col gap-5 lg:gap-10 lg:absolute lg:flex-row">
            <div className="left-content w-full lg:w-7/12">
              <img
                className="max-h-[400px] w-full object-cover"
                src={mainBg}
                alt=""
              />
            </div>
            <div
              style={{ backgroundImage: `url(${HeroSubThumbnail})` }}
              className="right-content relative w-full bg-cover lg:w-5/12"
            >
              <div className="content bg-linear-to-tl p-5 from-light-dark/60 to-light-orange h-full">
                <div className="flex h-full flex-col text-left justify-between">
                  <h2 className="text-2xl md:text-3xl">
                    CLEAN, RELAXING, AND WELCOMING ENVIRONMENT
                  </h2>
                  <div>
                    <p className="text-5xl font-bold">1200+</p>
                    <span>Serving daily haircut</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
