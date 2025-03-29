"use client";
import { NavigationDots } from "@/components";
import { testimonials } from "@/constants";
import { MotionWrap } from "@/wrapper";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Testimonial.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="testimonial" className="app__container app__primarybg">
      <div className="app__wrapper app__flex">
        {testimonials.length && (
          <>
            <div className="app__testimonial-item app__flex">
              <img
                src={testimonials[currentIndex].imgUrl}
                alt={testimonials[currentIndex].name}
              />
              <div className="app__testimonial-content">
                <p className="p-text">{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4 className="bold-text">
                    {testimonials[currentIndex].name}
                  </h4>
                  <h5 className="p-text">
                    {testimonials[currentIndex].company}
                  </h5>
                </div>
              </div>
            </div>

            <div className="app__testimonial-btns app__flex">
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </>
        )}
      </div>
      <NavigationDots active="testimonial" />
    </div>
  );
};

export default MotionWrap(Testimonial, "app__testimonial");
