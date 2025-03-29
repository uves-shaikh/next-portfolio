"use client";
import { motion } from "framer-motion";
import { NavigationDots } from "@/components";
import "./Header.scss";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div id="home" className="app__container home">
    <div className="app__wrapper app__flex">
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Uves</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Full Stack</p>
              <p className="p-text">Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src="/profile.png" alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src="circle.svg"
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          <div className="app__flex text-sky-400">
            <RiTailwindCssFill />
          </div>
          <div className="app__flex text-cyan-400">
            <FaReact />
          </div>
          <div className="app__flex text-green-500">
            <FaNodeJs />
          </div>
        </motion.div>
      </div>
    </div>
    <NavigationDots active="home" />
  </div>
);

export default Header;
