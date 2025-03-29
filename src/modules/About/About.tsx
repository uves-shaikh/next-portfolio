"use client";
import { motion } from "framer-motion";
import React from "react";
import { NavigationDots } from "@/components";
import { abouts } from "@/constants";
import { MotionWrap } from "@/wrapper";
import "./About.scss";

const About = () => {
  return (
    <div id="about" className="app__container app__whitebg">
      <div className="app__wrapper app__flex app__about">
        <h2 className="head-text">
          I Know that <span>Good Design</span> <br />
          means <span>Good Business</span>
        </h2>

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <NavigationDots active="about" />
    </div>
  );
};

export default MotionWrap(About, "app__about");
