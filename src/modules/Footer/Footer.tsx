"use client";
import { NavigationDots } from "@/components";
import { MotionWrap } from "@/wrapper";
import ContactForm from "./ContactForm";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="contact" className="app__container app__whitebg">
      <div className="app__wrapper app__flex">
        <h2 className="head-text">Take a coffee & chat with me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src="/email.png" alt="email" />
            <a href="mailto:uves.dev@gmail.com" className="p-text">
              uves.dev@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src="/mobile.png" alt="phone" />
            <a href="tel:+91 79906 65076" className="p-text">
              +91 79906 65076
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <NavigationDots active="contact" />
    </div>
  );
};

export default MotionWrap(Footer, "app__footer");
