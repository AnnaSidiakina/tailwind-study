import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

function Footer() {
  return (
    <div className="container mx-auto pt-20 pb-10 grid grid-cols-3">
      <div>
        <h3 className="font-montserrat text-lg font-semibold mb-6">
          ADDITIONAL INFORMATION
        </h3>
        <p className="mb-4">
          <a href="#contactForm" className="footerItem">
            CONTACT US
          </a>
        </p>
        <p>
          <a href="#" className="footerItem">
            FAQ
          </a>
        </p>
      </div>
      <div>
        <h3 className="font-montserrat text-lg font-semibold mb-6">
          LEGAL INFORMATION
        </h3>
        <p className="mb-4">
          <a href="#" className="footerItem">
            PRIVACY POLICY
          </a>
        </p>
        <p className="mb-4">
          <a href="#" className="footerItem">
            USE OF COOKIES
          </a>
        </p>
        <p>
          <a href="#" className="footerItem">
            TERMS OF SERVICE
          </a>
        </p>
      </div>
      <div>
        <h3 className="font-montserrat text-lg font-semibold mb-6">
          FOLLOW US
        </h3>
        <ul className="flex gap-12">
          <li>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram size={42} color="white" className="socialIcon" />
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/a/" target="blank">
              <SiTelegram size={42} color="white" className="socialIcon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook size={42} color="white" className="socialIcon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
