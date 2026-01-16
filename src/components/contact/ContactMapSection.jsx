import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar } from "react-icons/fa"; // Solid icons
import { FiClock } from "react-icons/fi";

const ContactMapSection = () => {
  return (
    <section className="mt-[150px] mb-20 w-full bg-white">
      <div className="container mx-auto px-5">
        <div className="content-wrapper flex flex-col overflow-hidden rounded-sm border border-gray-100 shadow-2xl md:flex-row">
          {/* Left Content - Opening Hours */}
          <div className="flex w-full flex-col justify-center bg-white p-8 md:w-5/12 md:p-20">
            {/* Top Badge */}
            <div className="section-badge mx-0">
              <FiClock className="text-light-orange" />
              Opening Hours
            </div>
            <br />

            <h2 className="mb-14 text-4xl font-black tracking-tighter text-gray-900 md:text-5xl">
              OPENING HOURS
            </h2>

            {/* Time Schedule */}
            <div className="mb-16 space-y-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <span className="text-lg font-semibold text-gray-500">
                  Monday - Friday
                </span>
                <span className="text-lg font-bold text-gray-900">
                  8:0AM - 7:00PM
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <span className="text-lg font-semibold text-gray-500">
                  Saturday
                </span>
                <span className="text-lg font-bold text-gray-900">
                  9:0AM - 9:00PM
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-500">
                  Sunday
                </span>
                <span className="text-lg font-bold text-amber-600 italic">
                  Holiday
                </span>
              </div>
            </div>

            {/* Contact Details with Solid Icons */}
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-5">
                <div className="text-gray-900">
                  <FaPhoneAlt size={16} />
                </div>
                <p className="font-semibold tracking-tight">+3849 0029 2637</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-gray-900">
                  <FaEnvelope size={16} />
                </div>
                <p className="font-semibold tracking-tight">
                  booking@example.com
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-gray-900">
                  <FaMapMarkerAlt size={18} />
                </div>
                <p className="leading-relaxed font-semibold tracking-tight">
                  758 5th Avenue, New York, NY 10057
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Map */}
          <div className="min-h-[500px] w-full bg-gray-100 md:h-auto md:w-7/12">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839486511716!2d-73.97483322341498!3d40.7612140347967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da559%3A0x7387796f600f607a!2s758%205th%20Ave%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="h-full w-full border-0 grayscale-[0.1]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
