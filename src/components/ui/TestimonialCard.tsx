import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <Quote className="text-primary-300 dark:text-primary-700 mb-4" size={24} />
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
      
      <div className="flex items-center">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;