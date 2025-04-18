import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enterprise Data Warehouse',
    description: 'Designed and implemented a cloud-based data warehouse solution that consolidated data from multiple sources, enabling real-time analytics and reporting.',
    thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Snowflake', 'AWS Glue', 'Python', 'dbt', 'Airflow'],
    category: 'dataWarehousing',
    links: {
      demo: 'https://example.com/data-warehouse',
      github: 'https://github.com/johndoe/data-warehouse',
    },
  },
  {
    id: '2',
    title: 'Streaming Analytics Platform',
    description: 'Built a real-time analytics platform processing millions of events per second, providing insights through interactive dashboards.',
    thumbnail: 'https://images.pexels.com/photos/7947782/pexels-photo-7947782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Apache Kafka', 'Apache Spark', 'Elasticsearch', 'Grafana', 'Docker'],
    category: 'bigData',
    links: {
      article: 'https://medium.com/@johndoe/streaming-analytics',
      github: 'https://github.com/johndoe/streaming-analytics',
    },
  },
  {
    id: '3',
    title: 'ETL Pipeline Automation',
    description: 'Automated data extraction, transformation, and loading processes, reducing manual effort by 95% and improving data quality.',
    thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Apache Airflow', 'Python', 'SQL', 'Amazon S3', 'Redshift'],
    category: 'dataPipelines',
    links: {
      github: 'https://github.com/johndoe/etl-automation',
    },
  },
  {
    id: '4',
    title: 'Customer Analytics Dashboard',
    description: 'Created an interactive dashboard for analyzing customer behavior and purchase patterns, increasing customer retention by 15%.',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Power BI', 'SQL', 'Azure Data Factory', 'R', 'DAX'],
    category: 'analytics',
    links: {
      demo: 'https://example.com/customer-analytics',
    },
  },
  {
    id: '5',
    title: 'Machine Learning Pipeline',
    description: 'Implemented an end-to-end ML pipeline for predictive maintenance, reducing equipment downtime by 25%.',
    thumbnail: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['TensorFlow', 'Scikit-learn', 'MLflow', 'Kubernetes', 'Python'],
    category: 'bigData',
    links: {
      article: 'https://medium.com/@johndoe/ml-pipeline',
      github: 'https://github.com/johndoe/ml-pipeline',
    },
  },
  {
    id: '6',
    title: 'Data Quality Framework',
    description: 'Developed a framework for monitoring and improving data quality across the organization, resulting in 30% reduction in data errors.',
    thumbnail: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Great Expectations', 'Python', 'Postgres', 'Airflow', 'Docker'],
    category: 'dataPipelines',
    links: {
      github: 'https://github.com/johndoe/data-quality',
    },
  },
];

export const projectCategories = [
  { id: 'all', label: 'projects.filter.all' },
  { id: 'bigData', label: 'projects.filter.bigData' },
  { id: 'dataWarehousing', label: 'projects.filter.dataWarehousing' },
  { id: 'dataPipelines', label: 'projects.filter.dataPipelines' },
  { id: 'analytics', label: 'projects.filter.analytics' },
];