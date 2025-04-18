import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { id: 'github', icon: <Github size={20} />, url: 'https://github.com/johndoe' },
    { id: 'linkedin', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/johndoe' },
    { id: 'twitter', icon: <Twitter size={20} />, url: 'https://twitter.com/johndoe' },
    { id: 'email', icon: <Mail size={20} />, url: 'mailto:john@example.com' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">DataEngineer</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {t('footer.copyright').replace('{{year}}', currentYear.toString())}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                aria-label={link.id}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;