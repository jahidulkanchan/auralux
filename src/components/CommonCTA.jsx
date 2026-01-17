import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import CTAVideo from "../assets/videos/cta-video.mp4";

const AppointmentSection = () => {
  return (
    <section className="bg-[#f5f2f0] py-10 md:py-20">
      <div className="container mx-auto px-2 md:px-5">
        <div className="wrapper mx-auto flex flex-col overflow-hidden bg-white shadow-xl lg:flex-row">
          {/* Left Content - Image */}
          <div className="left-content lg:w-6/12 xl:w-7/12">
            <video
              loop
              autoPlay
              muted
              playsInline
              preload="auto"
              className="h-full object-cover"
            >
              <source src={CTAVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Content - Form */}
          <div className="right-content flex flex-col justify-center bg-white p-8 lg:w-6/12 xl:w-5/12 md:px-12 md:py-16">
            <form className="space-y-4">
              {/* Name Input */}
              <div className="flex border border-gray-200">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 text-gray-500 placeholder-gray-400 outline-none"
                />
                <div className="flex w-14 items-center justify-center border-l border-gray-200 text-black">
                  <FaUser />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex border border-gray-200">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-4 text-gray-500 placeholder-gray-400 outline-none"
                />
                <div className="flex w-14 items-center justify-center border-l border-gray-200 text-black">
                  <FaEnvelope />
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex border border-gray-200">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-4 text-gray-500 placeholder-gray-400 outline-none"
                />
                <div className="flex w-14 items-center justify-center border-l border-gray-200 text-black">
                  <FaPhoneAlt />
                </div>
              </div>

              {/* Date Input */}
              <div className="flex border border-gray-200">
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  className="w-full p-4 text-gray-500 placeholder-gray-400 outline-none"
                />
                <div className="flex w-14 items-center justify-center border-l border-gray-200 text-black">
                  <FaCalendarAlt />
                </div>
              </div>

              {/* Dropdown Input */}
              <div className="flex border border-gray-200">
                <select className="w-full appearance-none bg-transparent p-4 text-gray-500 outline-none">
                  <option>Hair Cut</option>
                  <option>Beard Trim</option>
                  <option>Full Grooming</option>
                </select>
                <div className="pointer-events-none flex w-14 items-center justify-center border-l border-gray-200 text-black">
                  <FaChevronDown size={14} />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full border border-yellow-700 py-4 font-bold tracking-widest text-black uppercase transition-colors duration-300 hover:bg-yellow-700 hover:text-white"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
