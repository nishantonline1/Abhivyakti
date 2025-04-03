import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Rocket, Brain, Target } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const [isPhotoAnimating, setIsPhotoAnimating] = useState(false);
  const nameControls = useAnimation();

  const bubbleAnimation = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.2, 0],
      opacity: [1, 0.8, 0],
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const randomDirection = () => {
    const directions = [
      { x: -20, y: -20 },
      { x: 20, y: -20 },
      { x: -20, y: 20 },
      { x: 20, y: 20 },
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  const handleNameHover = async () => {
    const letters = "Nishant Singh".split("");
    for (let i = 0; i < 3; i++) {
      await nameControls.start(j => ({
        x: randomDirection().x,
        y: randomDirection().y,
        transition: {
          duration: 0.2,
          delay: j * 0.02
        }
      }));
      await nameControls.start(j => ({
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: j * 0.02
        }
      }));
    }
  };

  const photoVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl mb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
          <motion.div 
            className="relative inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsPhotoAnimating(true)}
            onHoverEnd={() => setIsPhotoAnimating(false)}
            variants={photoVariants}
            whileHover="hover"
          >
            <img 
              src="/images/me.jpg" 
              alt="Professional headshot"
              className="w-32 h-32 rounded-full mx-auto shadow-lg relative z-10"
              />
              
            {/* {isPhotoAnimating && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-2 border-blue-400"
                    initial="initial"
                    animate="animate"
                    variants={bubbleAnimation}
                    style={{
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
              </>
            )} */}
          </motion.div>
          </div>
          <div className="overflow-hidden">
            <div className="flex justify-center flex-wrap">
              {"Nishant Singh".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  animate={nameControls}
                  onHoverStart={handleNameHover}
                  className="text-4xl md:text-5xl font-bold text-gray-900 inline-block cursor-pointer mx-[1px]"
                  whileHover={{
                    scale: 1.2,
                    color: '#3B82F6',
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.h2 
            className="text-xl md:text-2xl text-gray-700 mb-8 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sr Engineering Manager | Full Stack Developer
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Founding startup member with 8+ years of experience evolving from Frontend Developer to Senior Engineering Manager.
            Specialized in React, Django, and AWS.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Rocket className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Startup Enthusiast</h3>
              <p className="text-sm text-gray-600">Building scalable solutions from ground up</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Brain className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Continuous Learner</h3>
              <p className="text-sm text-gray-600">Always exploring new technologies</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Result Driven</h3>
              <p className="text-sm text-gray-600">Focused on delivering business impact</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a 
              href="mailto:nishantonline1@gmail.com" 
              className="flex items-center justify-center w-full md:w-auto bg-white px-6 py-3 rounded-lg shadow-sm text-gray-600 hover:text-gray-900 hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-2" size={20} />
              <span className="text-sm md:text-base">nishantonline1@gmail.com</span>
            </motion.a>
            <motion.a 
              href="tel:7980878844" 
              className="flex items-center justify-center w-full md:w-auto bg-white px-6 py-3 rounded-lg shadow-sm text-gray-600 hover:text-gray-900 hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2" size={20} />
              <span className="text-sm md:text-base">7980878844</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/technishant" 
              className="flex items-center justify-center w-full md:w-auto bg-white px-6 py-3 rounded-lg shadow-sm text-gray-600 hover:text-gray-900 hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="mr-2" size={20} />
              <span className="text-sm md:text-base">LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;