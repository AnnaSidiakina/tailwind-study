import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="container mx-auto pt-20 pb-10 grid grid-cols-3">
      <div>
        <h3 className="font-montserrat text-lg font-semibold mb-6">
          ADDITIONAL INFORMATION
        </h3>
        <p className="mb-4">
          <a href="#contactForm" className="font-montserrat text-sm">
            CONTACT US
          </a>
        </p>
        <p>
          <a href="#" className="font-montserrat text-sm">
            FAQ
          </a>
        </p>
      </div>
      <div>
        <h3 className="font-montserrat text-lg font-semibold mb-6">
          LEGAL INFORMATION
        </h3>
        <p className="mb-4">
          <a href="#" className="font-montserrat text-sm">
            PRIVACY POLICY
          </a>
        </p>
        <p className="mb-4">
          <a href="#" className="font-montserrat text-sm">
            USE OF COOKIES
          </a>
        </p>
        <p>
          <a href="#" className="font-montserrat text-sm">
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
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/a/" target="blank">
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={40}
                height={40}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
