import React from "react";
import { contactData } from "../api/Data";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map(({ id, type, url, icon }) => {
            return (
              <article className="contact__option" key={id}>
                <i className="contact__option__icon">{icon}</i>
                <h5>{type}</h5>
                <a href={url} target="_blank">
                  Send a Message
                </a>
              </article>
            );
          })}
        </div>
        {/* End of Contact Option */}

        <form action="https://formspree.io/f/xqkjglwb" method="post">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="message"
            cols=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
