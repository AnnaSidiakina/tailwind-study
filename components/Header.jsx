import React from "react";

function Header() {
  return (
    <nav className="container mx-auto">
      <ul className="flex gap-8 z-[1000] relative">
        <li className="font-poppins font-light text-white text-lg">
          <a href="#description">Description</a>
        </li>
        <li className="font-poppins font-light text-white text-lg">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="font-poppins font-light text-white text-lg">
          <a href="#contactForm">Ask a question</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
