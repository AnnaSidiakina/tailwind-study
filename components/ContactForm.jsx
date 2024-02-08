"use client";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = e.target.action;
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    const newData = {
      response: "Form is successfully submited",
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    fetch(formUrl, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    }).then((data) => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast("The form is submitted successfully!");
    });
  };

  return (
    <div id="contactForm" className="container mx-auto pt-14 pb-14">
      <h2 className="text-greenDark font-poiret text-5xl">
        Still have questions? Write to us!
      </h2>

      <form
        method="POST"
        action="http://localhost:3000/"
        onSubmit={handleSubmit}
        className="mt-16"
      >
        <div className="flex gap-10">
          <div>
            <input
              placeholder="Name"
              type="text"
              name="name"
              className="input mb-10"
              onChange={handleInput}
              value={formData.name}
            />
            <input
              placeholder="Email"
              name="email"
              type="text"
              className="input"
              onChange={handleInput}
              value={formData.email}
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            className="input w-full"
            onChange={handleInput}
            value={formData.message}
          />
        </div>
        <div className="flex justify-center mt-14">
          <button
            type="submit"
            className="bg-grey hover:bg-[#7fa1b3] transition-all p-4 w-[400px] rounded-2xl text-white font-poppins text-2xl font-bold"
          >
            Send
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default ContactForm;
