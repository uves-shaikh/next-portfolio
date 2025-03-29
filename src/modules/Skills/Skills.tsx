"use client";
import { NavigationDots } from "@/components";
import { Tooltip } from "@/components/ui/tooltip";
import { experiences, skills } from "@/constants";
import { MotionWrap } from "@/wrapper";
import { motion } from "framer-motion";
import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div id="skills" className="app__container app__whitebg">
      <div className="app__wrapper app__flex">
        <h2 className="head-text">Skills & Experiences</h2>

        <div className="app__skills-container">
          {/* Skills List */}
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                {/* Skill Icon */}
                <div className={`app__flex ${skill.bgColor} p-3 rounded-lg`}>
                  <div className="text-4xl flex justify-center items-center">
                    {skill.icon}
                  </div>
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <Tooltip>{work.desc}</Tooltip>
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <NavigationDots active="skills" />
    </div>
  );
};

export default MotionWrap(Skills, "app__skills");
