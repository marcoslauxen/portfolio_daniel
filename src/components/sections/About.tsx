import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';
import { Download, Code, Database, BarChart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { id: 'years', value: '7+', label: t('about.experience'), icon: <Code size={24} /> },
    { id: 'projects', value: '50+', label: t('about.projects'), icon: <Database size={24} /> },
    { id: 'clients', value: '25+', label: t('about.clients'), icon: <BarChart size={24} /> },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t('about.bio')}
            </p>
            <Button 
              variant="primary" 
              icon={<Download size={16} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              {t('about.downloadResume')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center"
              >
                <div className="flex justify-center mb-3 text-primary-500">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;