import React from "react";
import { HiWifi } from "react-icons/hi";
import { Marquee } from "../ui/marquee";

export default function ServiceCard({ 
  title = "Services Card", 
  price = "$10", 
  repeatCount = 3, 
  description = "Styles we craft looks that suit your personality and lifestyle."
}) {
  return (
    <div className="service-card group relative min-h-[300px] overflow-hidden bg-slate-50 p-4 lg:p-8 duration-500 hover:bg-black">
      {/* Title */}
      <h2 className="text-2xl font-bold uppercase group-hover:text-white lg:text-2xl">
        {title}
      </h2>

      {/* Static WiFi Icon */}
      <HiWifi className="mx-auto my-5 w-fit text-black" size={100} />

      {/* Marquee with dynamic price repeated */}
      <Marquee className="md:absolute top-1/2 w-fit mx-auto -translate-y-1/2 md:text-transparent [--duration:10s] group-hover:text-white">
        {Array(repeatCount)
          .fill(price)
          .map((p, index) => (
            <h2 className="text-3xl md:text-5xl px-3" key={index}>
              {p}
            </h2>
          ))}
      </Marquee>

      {/* Description */}
      <p className="text-light-dark group-hover:text-light-gray">
        {description}
      </p>
    </div>
  );
}
