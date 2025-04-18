import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-900 dark:text-white">{name}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}/5</span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(level / 5) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-2 rounded-full bg-primary-500"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillCard;