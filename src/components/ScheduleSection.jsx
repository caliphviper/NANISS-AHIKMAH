
import React, { useState } from 'react';
import scheduleImage from '../assets/stats.webp'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ScheduleSection = () => {
  const [showMore, setShowMore] = useState(false);
  const shortText = `Comr. Abdulakdir Hamza Abugi is a visionary student leader, strategist, and advocate of student development, welfare, and inclusive governance. Known for his passion for youth empowerment, leadership excellence, and academic growth, he has established himself as one of the most dynamic and forward-thinking student leaders at Al-Hikmah University. Before his current role as President of the National Association of Niger State Students (NANISS), Al-Hikmah University Chapter, Comr. Hamza Abugi had served in several leadership and strategic capacities within student and youth organizations, where he worked tirelessly to strengthen unity, welfare, and representation among Niger State students in the university community.`;
  const moreText = `During his tenure as President, Comr. Abugi has led with purpose and innovation — repositioning NANISS as a vibrant, progressive, and student-centered association. Under his leadership, the chapter has launched key initiatives to promote academic excellence, student welfare, and social engagement, including inter-faculty programs, welfare support drives, and creative student events that have strengthened camaraderie among members.
An advocate of inclusive participation and community service, President Abugi believes in strategic collaboration, innovation, and accountability as the pillars of effective leadership. His approach to leadership emphasizes teamwork, transparency, and the empowerment of others to achieve collective success.
Respected for his organizational skill and calm diplomacy, Comr. Abugi continues to inspire a new generation of students through his commitment to excellence, discipline, and service. His vision is to make NANISS Al-Hikmah Chapter a model of unity, progress, and impactful student representation within the Nigerian student landscape. 
`;
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left side - Image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.img 
            variants={fadeIn('up', 0.4)}
            src={scheduleImage} 
            alt="Statistics dashboard" 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span 
            variants={fadeIn('up', 0.4)}
            className="text-orange-500 font-semibold"
          >
            Comr. Abdulakdir Hamza Abugi
          </motion.span>
          <motion.h2 
            variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6"
          >
            President, National Association of Niger State Students (NANISS), Al-Hikmah University Chapter <br />
            With Smart Scheduling Solutions
          </motion.h2>
          <motion.div variants={fadeIn('up', 0.6)}>
            <p className="text-gray-600 mb-2">
              {shortText}
            </p>
            <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-96 mb-8' : 'max-h-0 mb-0'}`}>
              <p className="text-gray-600 mt-2">{moreText}</p>
            </div>
            <button
              onClick={() => setShowMore(v => !v)}
              className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all focus:outline-none"
              aria-expanded={showMore}
            >
              {showMore ? 'Show less' : 'Read more'}
              <motion.svg 
                variants={fadeIn('left', 0.8)}
                className={`w-5 h-5 transform transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </motion.svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ScheduleSection