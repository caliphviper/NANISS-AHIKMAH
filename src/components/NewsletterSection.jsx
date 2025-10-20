import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const NewsletterSection = () => {
  return (
    <section id="contact" className="section-container px-4 md:px-0">
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-blue-600 rounded-2xl overflow-hidden"
      >
        <div className="relative md:px-16 px-6 py-16 md:py-24">
          {/* Background Gradient */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"
          ></motion.div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              variants={fadeIn('right', 0.5)}
              className="text-white max-w-lg mx-auto text-center lg:text-left"
            >
              <motion.h2 
                variants={textVariant(0.3)}
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4"
              >
                Contact Us
              </motion.h2>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                className="text-blue-100 text-sm sm:text-base"
              >
                We'd love to hear from you! Fill out the form and we'll get back to you soon.
              </motion.p>
            </motion.div>

            {/* Contact Form */}
            <motion.form 
              variants={fadeIn('left', 0.5)}
              className="w-full max-w-lg mx-auto bg-white rounded-xl p-6 flex flex-col gap-4 shadow-lg"
              onSubmit={e => e.preventDefault()}
            >
              <motion.input
                variants={fadeIn('right', 0.7)}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <motion.input
                variants={fadeIn('right', 0.7)}
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <motion.textarea
                variants={fadeIn('right', 0.7)}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
              <motion.button 
                variants={fadeIn('left', 0.7)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-base font-semibold"
              >
                <span>Send Message</span>
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  )
}

export default NewsletterSection
