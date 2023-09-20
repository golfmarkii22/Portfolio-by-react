import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experince
            </p>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

        {/* images */}

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./Projectexp1.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./Projectexp2.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./Projectexp3.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 1.1, 0.6)}
            src="./Projectexp4.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./Projectexp5.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 1.2, 0.6)}
            src="./Projectexp6.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 1.5, 0.6)}
            src="./Projectexp7.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 1.8, 0.6)}
            src="./Projectexp8.png"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 2.1, 0.6)}
            src="./Projectexp9.png"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
