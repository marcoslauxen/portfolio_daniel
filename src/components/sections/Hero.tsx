import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.p variants={item} className="text-xl text-primary-500 mb-4">
              {t('hero.greeting')}
            </motion.p>
            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {t('hero.name')}
            </motion.h1>
            <motion.h2 variants={item} className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              {t('hero.title')}
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              {t('hero.subtitle')}
            </motion.p>
            <motion.div variants={item}>
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleScrollToContact}
              >
                {t('hero.cta')}
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            variants={item}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="#about"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;