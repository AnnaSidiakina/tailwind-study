import React from "react";

function Header() {
  return (
    <nav className="container mx-auto">
      <ul className="flex gap-8 z-[1000] relative">
        <li className="menu">
          <a href="#description">Description</a>
        </li>
        <li className="menu">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="menu">
          <a href="#contactForm">Ask a question</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
