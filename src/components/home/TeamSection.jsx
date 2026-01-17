import React from "react";
import MemberCard from "./MemberCard";
import TeamMember01 from "../../assets/images/team-member-01.webp";
import TeamMember02 from "../../assets/images/team-member-02.webp";
import TeamMember03 from "../../assets/images/team-member-03.webp";
import { Marquee } from "../ui/marquee";

export default function TeamSection() {
  return (
    <>
      <section className="overflow-hidden pb-10">
        {/* Marquee with dynamic price repeated */}
        <Marquee className="bg-light-orange mx-auto md:-rotate-1 mt-26 mb-16 w-fit py-5 [--duration:50s] group-hover:text-white md:text-transparent">
          {Array(5)
            .fill("EXPERT GROOMING CONSULTATIONS")
            .map((p, index) => (
              <h2
                className="px-3 text-2xl text-white sm:text-3xl md:text-5xl"
                key={index}
              >
                {p}
              </h2>
            ))}
        </Marquee>
        <div className="container overflow-hidden px-3 py-10 md:px-5 md:py-16">
          <div className="section-badge mx-0">MEET WITH TEAM</div>
          <h2 className="section-title mx-0 max-w-lg text-left">
            EXPERT GROOMING CONSULTATIONS
          </h2>
          <br />

          <br />
          <div className="Team-members grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <MemberCard
              memberPhoto={TeamMember01}
              jobTitle="BARBER"
              MemberName="EMILIO J. HARPER"
            />
            <MemberCard
              memberPhoto={TeamMember02}
              jobTitle="HAIRSTYLIST"
              MemberName="RICARDO P. WINS"
            />
            <MemberCard
              memberPhoto={TeamMember03}
              jobTitle="COLORIST"
              MemberName="SANTIAGO G. DRAY"
            />
          </div>
          <br />
        </div>
      </section>
    </>
  );
}
