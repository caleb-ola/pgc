import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="text-center pt-4">
        <h2 className="section-header fw-bold">Contact us</h2>
      </div>
      <form action="" method="post">
        <div className="p-2">
          <label for="name" className="py-1">
            Name
          </label>
          <input
            name="name"
            type="text"
            id="name"
            className="w-100 p-2"
            placeholder="e.g Olufemi Aworinde"
          />
        </div>
        <div className="p-2">
          <label for="email" className="py-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="w-100 p-2"
            placeholder="e.g olufemi@email.com"
          />
        </div>
        <div className="p-2">
          <label for="nmessage" className="py-1">
            Message
          </label>
          <textarea
            className="message w-100 p-2"
            id="message"
            placeholder="Please, type your message here..."
          ></textarea>
        </div>
        <div className="text-center text-md-start p-2">
          <button
            type="submit"
            className="btn btn-primary form-submit my-2 px-5 py-3  learn-more shadow-none "
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
