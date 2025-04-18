import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming Languages
  { id: '1', name: 'Python', category: 'languages', level: 5 },
  { id: '2', name: 'SQL', category: 'languages', level: 5 },
  { id: '3', name: 'Scala', category: 'languages', level: 4 },
  { id: '4', name: 'Java', category: 'languages', level: 3 },
  { id: '5', name: 'R', category: 'languages', level: 4 },
  
  // Databases
  { id: '6', name: 'PostgreSQL', category: 'databases', level: 5 },
  { id: '7', name: 'MongoDB', category: 'databases', level: 4 },
  { id: '8', name: 'Cassandra', category: 'databases', level: 4 },
  { id: '9', name: 'MySQL', category: 'databases', level: 5 },
  { id: '10', name: 'Snowflake', category: 'databases', level: 5 },
  { id: '11', name: 'Redshift', category: 'databases', level: 4 },
  
  // Frameworks & Libraries
  { id: '12', name: 'Apache Spark', category: 'frameworks', level: 5 },
  { id: '13', name: 'Apache Kafka', category: 'frameworks', level: 4 },
  { id: '14', name: 'Apache Airflow', category: 'frameworks', level: 5 },
  { id: '15', name: 'Pandas', category: 'frameworks', level: 5 },
  { id: '16', name: 'dbt', category: 'frameworks', level: 4 },
  { id: '17', name: 'TensorFlow', category: 'frameworks', level: 3 },
  
  // Cloud Services
  { id: '18', name: 'AWS', category: 'cloud', level: 5 },
  { id: '19', name: 'Azure', category: 'cloud', level: 4 },
  { id: '20', name: 'Google Cloud', category: 'cloud', level: 4 },
  { id: '21', name: 'AWS Glue', category: 'cloud', level: 5 },
  { id: '22', name: 'AWS Lambda', category: 'cloud', level: 4 },
  { id: '23', name: 'Azure Data Factory', category: 'cloud', level: 4 },
  
  // Tools & Platforms
  { id: '24', name: 'Docker', category: 'tools', level: 5 },
  { id: '25', name: 'Kubernetes', category: 'tools', level: 4 },
  { id: '26', name: 'Terraform', category: 'tools', level: 4 },
  { id: '27', name: 'Git', category: 'tools', level: 5 },
  { id: '28', name: 'Tableau', category: 'tools', level: 4 },
  { id: '29', name: 'Power BI', category: 'tools', level: 4 },
];

export const skillCategories = [
  { id: 'languages', label: 'skills.categories.languages' },
  { id: 'databases', label: 'skills.categories.databases' },
  { id: 'frameworks', label: 'skills.categories.frameworks' },
  { id: 'cloud', label: 'skills.categories.cloud' },
  { id: 'tools', label: 'skills.categories.tools' },
];