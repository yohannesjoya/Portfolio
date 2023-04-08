import React from "react";
import "./Contact.css";

import { coffee, email, insta, linkedin, mobile } from "../../assets/images";
const Contact = () => {
  return (
    <div className="Contact__container">
      <img className="Contact__container-logo" src={coffee} alt="" />
      <h1 className="Contact__container-header">Contact</h1>
      <p className="Contact__container-title">Take A Moment and Chat With Me</p>

      <div className="Contact__container-socials basic-flex">
        <div className="social email basic-flex">
          <img src={email} alt="" />
          <a href="mailto:YohannesDestagerbu10@gmail.com">
            <p>YohannesDestagerbu10@gmail.com</p>
          </a>
        </div>
        <div className="social linkedin basic-flex">
          <img src={linkedin} alt="" />
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/yodege/">
              Yohannes Desta
            </a>
          </p>
        </div>
        <div className="social phone basic-flex">
          <img src={mobile} alt="" />
          <p>+251 93 489 3525</p>
        </div>
        {/* <div className="social insta basic-flex">
          <img src={insta} alt="" />
          <p>
            <a target="_blank" href="https://www.instagram.com/joya_j30">
              @joya_j30
            </a>
          </p>
        </div> */}
      </div>

      <form
        className="Contact__from"
        action="https://formspree.io/f/xayzynlv"
        method="post"
      >
        <input name="Name" type="text" placeholder="Your Name" required />
        <input name="Email" type="email" placeholder="Your Email" required />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
