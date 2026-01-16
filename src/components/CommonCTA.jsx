import React from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

const AppointmentSection = () => {
  return (
    <section className="bg-[#f5f2f0] py-12">
      <div className="container mx-auto px-2 md:px-5">
        <div className="wrapper flex flex-col md:flex-row bg-white shadow-xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Left Content - Image */}
          <div className="left-content md:w-1/2 h-64 md:h-auto">
            <img 
              src="/api/placeholder/600/600" // Replace with your barber image
              alt="Barber styling hair" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content - Form */}
          <div className="right-content md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
            <form className="space-y-4">
              
              {/* Name Input */}
              <div className="flex border border-gray-200">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-4 outline-none text-gray-500 placeholder-gray-400"
                />
                <div className="w-14 flex items-center justify-center border-l border-gray-200 text-black">
                  <FaUser />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex border border-gray-200">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full p-4 outline-none text-gray-500 placeholder-gray-400"
                />
                <div className="w-14 flex items-center justify-center border-l border-gray-200 text-black">
                  <FaEnvelope />
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex border border-gray-200">
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  className="w-full p-4 outline-none text-gray-500 placeholder-gray-400"
                />
                <div className="w-14 flex items-center justify-center border-l border-gray-200 text-black">
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
                  className="w-full p-4 outline-none text-gray-500 placeholder-gray-400"
                />
                <div className="w-14 flex items-center justify-center border-l border-gray-200 text-black">
                  <FaCalendarAlt />
                </div>
              </div>

              {/* Dropdown Input */}
              <div className="flex border border-gray-200">
                <select className="w-full p-4 outline-none text-gray-500 appearance-none bg-transparent">
                  <option>Hair Cut</option>
                  <option>Beard Trim</option>
                  <option>Full Grooming</option>
                </select>
                <div className="w-14 flex items-center justify-center border-l border-gray-200 text-black pointer-events-none">
                  <FaChevronDown size={14} />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-4 py-4 border border-yellow-700 text-black font-bold uppercase tracking-widest hover:bg-yellow-700 hover:text-white transition-colors duration-300"
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