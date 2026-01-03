import React from "react";
import FunFact01 from "../../assets/images/funfact-01.webp"
import FunFact02 from "../../assets/images/funfact-02.webp"

export default function FunFacts() {
  return (
    <>
      <section className="bg-white-bg min-h-screen">
        <div className="container px-3 py-10 md:px-5">
          <div className="section-badge">
            Fun Facts
          </div>
          <h2 className="section-title">
            BEING BETTER INFORMED MEANS MAKING A GOOD AND BETTER DECISIONS
          </h2>
          <br />

          <div className="grid-content grid grid-cols-1 lg:grid-cols-12">
            <div className="item order-1 lg:col-span-7 w-full">
                <img src={FunFact01} className="w-full object-cover" alt="Funfact image" />
            </div>
            <div className="item order-2 flex p-5 justify-between flex-col lg:col-span-5 min-h-[300px] w-full bg-white">
              <h2 className="text-3xl">CLEAN, RELAXING, AND WELCOMING ENVIRONMENT</h2>
              <div>
                <p className="text-5xl font-bold">1200+</p>
              <span>Serving daily haircut</span>
              </div>
            </div>
            <div className="item order-4 lg:order-3 flex p-5 justify-between flex-col lg:col-span-5 min-h-[300px] w-full bg-light-orange">
              <h2 className="text-3xl">CLEAN, RELAXING, AND WELCOMING ENVIRONMENT</h2>
              <div>
                <p className="text-5xl font-bold">1200+</p>
              <span>Serving daily haircut</span>
              </div>
            </div>
            <div className="item order-3 lg:order-4 lg:col-span-7 w-full">
                <img src={FunFact02} className="w-full object-cover" alt="Funfact image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
