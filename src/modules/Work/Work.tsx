"use client";
import { NavigationDots } from "@/components";
import { works } from "@/constants/works";
import { MotionWrap } from "@/wrapper";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Work.scss";

const Work = () => {
  return (
    <div id="work" className="app__container app__primarybg">
      <div className="app__wrapper app__flex">
        <h2 className="head-text">
          My Creative <span>Portfolio</span> Section
        </h2>

        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {works.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  {work.codeLink && (
                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  )}
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                {/* <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div> */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <NavigationDots active="work" />
    </div>
  );
};

export default MotionWrap(Work, "app__works");
