import React from "react";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-black text-white p-10">
        <aside>
          <img className="w-24" src="/logo/logo.svg" alt="" />
          <p>
            UZZAL MOTORS
            <br />
            Providing reliable service since 2006
          </p>
        </aside>
        <nav>
          <h6 className="footer-title ">Address</h6>
          <p>Noadda (Muslimpara), Poshchimdi South Keranigonj, Dhaka</p>
          <p>(Attached to Dhaka-Maowa Road Senabahini Garrage)</p>
          <h6 className="footer-title ">Phone</h6>
          <a href="tel:+8801720575497">+8801720575497</a>
          <a href="tel:+8801720575497">+8801970575497</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-2">
            <a  href="https://web.facebook.com/profile.php?id=100009572333004" className="link link-hover text-3xl text-blue-700 bg-white p-1 rounded-full"><FaFacebook /></a>
            <a href="https://web.facebook.com/messages/e2ee/t/26157879187136900" className="link link-hover text-3xl text-violet-800 bg-white p-1 rounded-full"><FaFacebookMessenger /></a>
            <a href="https://wa.me/+8801720575497" className="link link-hover p-1 rounded-full text-3xl text-green-500 bg-white "><FaSquareWhatsapp /></a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center border-t border-white bg-black text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by UZZAL
            MOTORS
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
