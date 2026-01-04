import React from "react";
import FunFact01 from "../../assets/images/funfact-01.webp";
import FunFact02 from "../../assets/images/funfact-02.webp";
import FunFact03 from "../../assets/images/funfact-03.jpg";
import FunFact04 from "../../assets/images/funfact-04.webp";
import FunBadge01 from "../../assets/images/fun-badge-01.webp";
import FunBadge02 from "../../assets/images/fun-badge-02.webp";

export default function FunFacts() {
  return (
    <>
      <section className="bg-white-bg min-h-screen">
        <div className="container px-3 py-10 md:px-5">
          <div className="section-badge">Fun Facts</div>
          <h2 className="section-title">
            BEING BETTER INFORMED MEANS MAKING A GOOD AND BETTER DECISIONS
          </h2>
          <br />

          <div className="grid-content grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="item relative order-1 w-full bg-black lg:col-span-7">
              <img
                src={FunFact01}
                className="min-h-[200px] w-full object-cover opacity-30 md:min-h-[350px]"
                alt="Funfact image"
              />
              <div className="absolute bottom-[20px] left-[20px] space-y-3 text-white">
                <p className="text-5xl font-bold">1200+</p>
                <span>Serving daily haircut</span>
              </div>
            </div>

            <div className="item relative order-2 flex min-h-[300px] w-full flex-col justify-between bg-white p-5 lg:col-span-5">
              <img
                src={FunFact03}
                className="absolute right-0 bottom-0 z-[0] w-full max-w-[180px] object-cover sm:max-w-[220px]"
                alt="Funfact image"
              />
              <div className="z-[2] flex h-full flex-col justify-between">
                <h2 className="text-2xl md:text-3xl">
                  CLEAN, RELAXING, AND WELCOMING ENVIRONMENT
                </h2>
                <div>
                  <p className="text-5xl font-bold">1200+</p>
                  <span>Serving daily haircut</span>
                </div>
              </div>
            </div>

            <div className="item bg-light-orange relative order-4 flex min-h-[300px] w-full flex-col justify-between p-5 lg:order-3 lg:col-span-5">
              <img
                src={FunFact04}
                className="absolute right-0 bottom-0 z-[0] w-full max-w-[180px] object-cover sm:max-w-[220px]"
                alt="Funfact image"
              />
              <div className="z-[2] flex h-full flex-col justify-between">
                <h2 className="text-2xl md:text-3xl">
                  CLEAN, RELAXING, AND WELCOMING ENVIRONMENT
                </h2>
                <div>
                  <p className="text-5xl font-bold">1200+</p>
                  <span>Serving daily haircut</span>
                </div>
              </div>
            </div>

            <div className="item relative order-3 w-full bg-black lg:order-4 lg:col-span-7">
              <img
                src={FunFact02}
                className="min-h-[200px] w-full object-cover opacity-30 md:min-h-[350px]"
                alt="Funfact image"
              />
              <div className="absolute top-[20px] left-[20px] space-y-3 text-white sm:left-[30px]">
                <h2 className="text-2xl">MEET WITH REWARDS</h2>
              </div>
              <div className="absolute bottom-[20px] left-[20px] flex items-center gap-5 space-y-3 text-white sm:left-[30px]">
                <img
                  src={FunBadge01}
                  className="mt-3 max-h-[40px] sm:max-h-[50px]"
                  alt="Badge"
                />
                <img
                  src={FunBadge02}
                  className="max-h-[40px] sm:max-h-[50px]"
                  alt="Badge"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
