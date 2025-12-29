import React from "react";
import FunFact01 from "../../assets/images/funfact-01.webp"
import FunFact02 from "../../assets/images/funfact-02.webp"

export default function FunFacts() {
  return (
    <>
      <section className="bg-white-bg min-h-screen">
        <div className="container px-3 py-10 md:px-5">
          <div className="section-badge border-light-orange mx-auto w-fit border px-5 py-2 text-sm uppercase">
            Fun Facts
          </div>
          <h2 className="mx-auto my-4 max-w-3xl text-center text-3xl font-semibold md:text-4xl xl:text-5xl">
            BEING BETTER INFORMED MEANS MAKING A GOOD AND BETTER DECISIONS
          </h2>
          <br />

          <div className="grid-content grid grid-cols-1 lg:grid-cols-12">
            <div className="item order-1 lg:col-span-7 w-full">
                <img src={FunFact01} className="w-full object-cover" alt="Funfact image" />
            </div>
            <div className="item order-2 lg:col-span-5 min-h-[300px] w-full bg-dark"></div>
            <div className="item order-4 lg:order-3 lg:col-span-5 min-h-[300px] w-full bg-dark"></div>
            <div className="item order-3 lg:order-4 lg:col-span-7 w-full">
                <img src={FunFact02} className="w-full object-cover" alt="Funfact image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
