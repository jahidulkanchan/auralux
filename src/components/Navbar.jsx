import React, { useState } from 'react';
import { Link } from 'react-router';
import Logo from '../assets/images/logo.png';
import { RiMenu4Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleSidebar = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  // Menu items array
  const navLinks = [
    { name: 'Home', linkURL: '/' },
    { name: 'About', linkURL: '/about' },
    { name: 'Services', linkURL: '/services' },
    { name: 'Portfolio', linkURL: '/portfolio' },
    { name: 'Contact', linkURL: '/contact' },
  ];

  return (
    <>
      <section className='bg-dark text-white-bg'>
        {/* Sidebar */}
        <div
          className={`sidebar px-5 border-transparent lg:-left-[300px] border border-r-light-dark fixed top-0 z-[999] min-h-screen w-[300px] bg-dark duration-200 ${isActive ? "left-0" : "-left-[300px]"}`}
        >
          <div className="content flex border-b-gray-300 justify-between items-center py-5">
            <div className="logo w-fit">
              <Link  onClick={() => setIsActive(false)} to="/">
                <img src={Logo} alt="logo" className="object-contain max-w-[180px]" />
              </Link>
            </div>
            <div className="close-sidebar ml-auto cursor-pointer w-fit" onClick={() => setIsActive(false)}>
              <RxCross2 size={24} />
            </div>
          </div>

          <hr className="text-light-dark" />
          
          <div className="nav-link w-full py-5 flex flex-col gap-2">
            {navLinks.map((item, index) => (
              <Link
                onClick={() => setIsActive(false)}
                className="px-2 py-1.5 text-sm flex items-center justify-between hover:text-light-orange"
                key={index}
                to={item.linkURL}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <hr className="text-light-dark" /><br />
          <div className="auth-content">
            <div className="login-btn bg-white w-fit mr-auto text-dark px-5 rounded py-1.5 md:py-2 border border-transparent hover:border-light-orange duration-150">
              Login
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className='container px-5 flex justify-between gap-5 items-center py-5'>
          <div className="logo">
            <Link to='/'>
              <img src={Logo} className='max-w-[180px] md:max-w-[200px]' alt="logo" />
            </Link>
          </div>

          <ul className="menu lg:flex items-center hidden justify-center gap-5">
            {navLinks.map((item, index) => (
              <Link
                className='bg-light-dark px-5 rounded py-2 border border-transparent hover:border-light-orange duration-150 flex items-center'
                key={index}
                to={item.linkURL}
              >
                {item.name}
              </Link>
            ))}
          </ul>

          <div className="auth-content lg:block hidden">
            <div className="login-btn bg-white text-dark px-5 rounded py-1.5 md:py-2 border border-transparent hover:border-light-orange duration-150">
              Login
            </div>
          </div>

          <div onClick={() => handleSidebar()} className="menu-bar cursor-pointer block lg:hidden">
            <RiMenu4Line size={28} />
          </div>
        </nav>
      </section>
    </>
  );
}
