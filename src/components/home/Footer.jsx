import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-dark py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 md:flex-row">
        {/* Logo / Branding */}
        <div className="logo">
          <Link to="/">
            <img
              src={Logo}
              className="max-w-[180px] md:max-w-[200px]"
              alt="logo"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="copyright text-light-gray">
          &copy; {new Date().getFullYear()}{" "}
          <Link to="/">
            <b>Auralux.</b>
          </Link>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
