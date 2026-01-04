import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "react-router";

const CTACard = () => {
  return (
    <div className="mx-auto border border-gray-100 bg-white p-8 font-sans text-gray-800 shadow-lg sm:min-w-xl">
      {/* Small Badge Heading */}
      <div className="mb-6 inline-flex items-center justify-center gap-2 border border-yellow-700 px-3 py-1">
        <FiClock className="text-xs text-yellow-700" />
        <span className="text-[10px] font-bold tracking-widest text-gray-900 uppercase">
          Opening Hours
        </span>
      </div>

      <h2 className="mb-10 text-4xl font-black tracking-tighter text-black uppercase">
        Opening Hours
      </h2>

      {/* Schedule Section */}
      <div className="mb-12 space-y-6">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="font-medium text-gray-500">Monday - Friday</span>
          <span className="font-bold">8:0AM - 7:00PM</span>
        </div>

        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="font-medium text-gray-500">Saturday</span>
          <span className="font-bold">9:0AM - 9:00PM</span>
        </div>

        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="font-medium text-gray-500">Sunday</span>
          <span className="font-bold text-yellow-700 italic">Holiday</span>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-10 space-y-5 text-gray-600">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-black p-2 text-white">
            <FiPhone size={14} />
          </div>
          <span className="text-sm font-medium">+3849 0029 2637</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-black p-2 text-white">
            <FiMail size={14} />
          </div>
          <span className="text-sm font-medium text-gray-500">
            booking@example.com
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-full bg-black p-2 text-white">
            <FiMapPin size={14} />
          </div>
          <span className="text-sm font-medium text-gray-500">
            758 5th Avenue, New York, NY 10057
          </span>
        </div>
      </div>
      <div className="cta mx-auto flex w-full justify-center">
        <Link
          to="/contact"
          className="border-light-orange bg-light-orange/80 hover:bg-light-orange border px-8 py-2.5 text-white transition-colors"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default CTACard;
