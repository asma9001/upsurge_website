import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 66,
    text: "We were first-time buyers, and the process seemed daunting. made everything so simple and stress-free.They listened to our needs, showed us perfect options",
    name: "Granit Xhaka",
    role: "Happy Client",
    image: "/person.png",
    company: "Google",
    photo: "/Testimonial.png",
  },
];

export default function TestimonialCard() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[current];

  // Animation variants
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="container mx-auto mt-12 py-12 px-4 sm:px-6  md:py-12 md:px-56 bg-gray-50">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <p className="text-xs text-[#073B3A] bg-[#073B3A1A] font-medium mb-2 px-3 py-1 rounded-md inline-block">
            Feedback/Testimonial
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#030E0F]">
            A Legacy Of Happy Clients
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 bg-[#5856D6] text-white rounded-full flex items-center justify-center"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 bg-[#5856D6] text-white rounded-full flex items-center justify-center"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch relative">
        <AnimatePresence exitBeforeEnter>
          {/* Image */}
          <motion.div
            key={testimonial.id + "-image"}
            className="w-full lg:w-1/2"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Card */}
          <motion.div
            key={testimonial.id + "-card"}
            className="w-full lg:w-1/2 bg-white rounded-lg p-6 shadow-md flex flex-col justify-between"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-[#073B3A] text-3xl font-bold mb-3">
                {testimonial.id}
              </p>
              <p className="text-[#030E0F] text-sm sm:text-base">
                {testimonial.text}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg text-[#030E0F]">
                    {testimonial.name}
                  </p>
                  <p className="text-[#252728] text-sm">{testimonial.role}</p>
                </div>
              </div>

              <img
                src="/google.png"
                alt={testimonial.company}
                className="w-20 h-auto object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
