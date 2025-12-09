// src/data.js

import movieImg from './assets/movie.jpg'
import homestayImg from './assets/homestay.jpg'
import cicdImg from './assets/cicd.jpg'

export const projectsData = [
  {
    id: 'movie-reco',
    title: 'Movie Recommendation System on AWS',
    year: '2024–2025',
    description:
      'Cloud-based recommendation system using AWS Personalize and SageMaker for real-time suggestions. Deployed with CloudFormation integrating Lambda, API Gateway, and DynamoDB with CI/CD automation.',
    tech: ['AWS Personalize', 'SageMaker', 'Lambda', 'DynamoDB', 'GitHub Actions'],
    image: movieImg
  },
  {
    id: 'tourist-homestay',
    title: 'Tourist Homestay & Local Guide Platform',
    year: '2024',
    description:
      'Full-stack Java-Spring Boot platform connecting tourists with homestays and nearby attractions with role-based modules and booking flows.',
    tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'],
    image: homestayImg
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Pipeline Project',
    year: '2024',
    description:
      'Containerized app deployed via Jenkins pipeline and automated build/test/push stages to DockerHub, with images deployed to AWS EC2 for production simulation.',
    tech: ['Docker', 'Jenkins', 'GitHub Actions', 'AWS EC2'],
    image: cicdImg
  }
]
