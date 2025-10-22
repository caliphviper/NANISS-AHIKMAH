import React from 'react'
import { BsShieldLock, BsBarChart, BsMegaphone } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiUsers, FiSettings } from 'react-icons/fi'
import { BiTime, BiBookBookmark } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BsShieldLock className="w-8 h-8 text-indigo-600" />,
      title: "Student Welfare & Security",
      details: [
        "Ensuring the safety, well-being, and dignity of all members remains a top priority.",
        "Strengthen cooperation with university security units.",
        "Establish a Welfare & Security Response Desk.",
        "Promote student mental health and emergency support systems."
      ],
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Academic & Economic Empowerment", 
      details: [
         "Fostering excellence and opportunities for Niger State students.",
        "Organize tutorials, mentorships, and academic workshops.",
        "Provide information on scholarships, grants, and SIWES placements.",
        "Encourage small-scale student entrepreneurship and skill development programs."
      ],
    },
    {
      icon: <FiUsers className="w-8 h-8 text-red-400" />,
      title: "Councils & Committees",
      details: [
         "Inclusive governance through active participation.",
        "Form standing and ad-hoc committees to manage key association projects.",
        "Empower faculty representatives to strengthen communication.",
        "Promote teamwork, accountability, and inclusive decision-making."
      ],
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Transparency & Accountability",
      details: [
         "Building a credible and trusted student government.",
        "Publish periodic financial and activity reports.",
        "Enforce open-door leadership and member feedback channels.",
        "Uphold honesty, discipline, and responsibility in all operations."
      ],
    },
    {
      icon: <BsMegaphone className="w-8 h-8 text-green-500" />,
      title: "Communication & Media Relations",
      details: [
        "Enhancing NANISS visibility and image across and beyond the university.",
        "Strengthen media/publicity units to keep members informed.",
        "Maintain a digital presence through the official website and social platforms.",
        "Foster positive engagement with student bodies and university authorities."
      ],
    },
    {
      icon: <BsBarChart className="w-8 h-8 text-blue-500" />,
      title: "Budget, Planning & Innovation",
      details: [
        "Strategic allocation of resources to maximize impact.",
        "Prepare annual budgets aligned with association goals.",
        "Prioritize projects that add long-term value to members.",
        "Encourage innovation through research and creative student ideas."
      ],
    },
    {
      icon: <BiBookBookmark className="w-8 h-8 text-yellow-500" />,
      title: "Service Charter",
      details: [
        "A commitment to serve every member of NANISS with fairness, respect, and dedication.",
        "Promote leadership that listens, acts, and delivers.",
        "Ensure all association activities align with its constitution and core values: Unity, Progress, and Student Welfare."
      ],
    }
  ]

  return (
  <section id="services" className="py-14 px-2 sm:px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
    {/* Header at the top for all devices */}
    <motion.div 
      variants={fadeIn('right', 0.4)}
      className="mb-10"
    >
      <motion.h2 
        variants={textVariant(0.2)}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Policy Framework & Strategic Focus
      </motion.h2>
      <motion.p 
        variants={fadeIn('up', 0.5)}
        className="text-gray-600 text-lg mb-4 text-center"
      >
        Discuss your goals, determine success metrics, identify problems
      </motion.p>
    </motion.div>

    {/* Services Grid */}
    <motion.div 
      variants={fadeIn('left', 0.4)}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service, index) => (
        <motion.div 
          key={index}
          variants={fadeIn('up', 0.3 * (index + 1))}
          whileHover={{ scale: 1.05 }}
          className="bg-white w-full max-w-md mx-auto cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
        >
          <motion.div 
            variants={fadeIn('down', 0.4 * (index + 1))}
            className="mb-4"
          >
            {service.icon}
          </motion.div>
          <motion.h3 
            variants={textVariant(0.3)}
            className="text-xl font-semibold mb-2"
          >
            {service.title}
          </motion.h3>
          <ul className="text-gray-600 mb-4 list-disc list-inside text-left w-full max-w-xs mx-auto">
            {service.details.map((sentence, i) => (
              <li key={i}>{sentence}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
    </section>
  )
}

export default ServicesSection 