import achievements from './achievements.json';
import skills from './skills.json';
import projects from './projects.json';
import dsaStats from './dsa-stats.json';

export const profile = {
  basics: {
    name: 'Anuj Yadav',
    title: 'MERN Stack Developer | DSA Enthusiast',
    email: 'anujyadav992241@gmail.com',
    location: 'India',
    summary: 'Building scalable full-stack applications and solving complex algorithmic problems.',
  },
  social: {
    github: 'https://github.com/anuj-yd',
    linkedin: 'https://linkedin.com/in/anuj-yd',
  },
  contact: {
    phone: '+91 9936992241',
    whatsapp: 'https://wa.me/919936992241',
  },
  dsaProfiles: {
    leetcode: 'https://leetcode.com/anuj-yd',
    hackerrank: 'https://hackerrank.com/anuj-yd',
    geeksforgeeks: 'https://auth.geeksforgeeks.org/user/anuj-yd',
    codolio: 'https://codolio.com/profile/anujyadav23',
  },
  education: [
    {
      school: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      status: 'Bachelor of Technology - Computer Science and Engineering; CGPA: 7.60',
      details: 'Currently pursuing the B.Tech program in Computer Science and Engineering.',
      date: "Aug'23 – Present",
    },
    {
      school: "St. Xavier's Senior Secondary School",
      location: 'Balrampur, Uttar Pradesh',
      status: 'Intermediate; Percentage: 79%',
      details: 'Completed intermediate education.',
      date: "Mar'20 – Mar'22",
    },
    {
      school: "St. Xavier's Senior Secondary School",
      location: 'Balrampur, Uttar Pradesh',
      status: 'Matriculation; Percentage: 83%',
      details: 'Completed matriculation.',
      date: "Apr'19 – Mar'20",
    },
  ],
  skills,
  projects,
  achievements,
  certifications: [
    {
      title: 'Graph Theory Programming Camp',
      issuer: 'Algo University',
      date: "Mar'26",
      url: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/anuj-yadav.png',
      thumbnail: '/assets/graphcamp.png',
      color: '#F4C430',
    },
    {
      title: 'Problem Solving Intermediate',
      issuer: 'HackerRank',
      date: '2025',
      url: '/certificates/problem_solving_intermediate certificate.pdf',
      thumbnail: '/assets/problemsolving.png',
      color: '#1A535C',
    },
    {
      title: 'OCI Foundations',
      issuer: 'Oracle',
      date: '2025',
      url: '/certificates/eCertificate Oracle.pdf',
      thumbnail: '/assets/oracle.png',
      color: '#E85D4A',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: "Oct'25",
      url: '/certificates/Cloud Computing.pdf',
      thumbnail: '/assets/nptel.png',
      color: '#F4833D',
    },
    {
      title: 'DSA Self Paced',
      issuer: 'Neo Colab',
      date: '2024',
      url: '/certificates/dsa cert.pdf',
      thumbnail: '/assets/neocolab.png',
      color: '#1A535C',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2023',
      url: '/certificates/freecodecamp.pdf',
      thumbnail: '/assets/ffc.png',
      color: '#E8699A',
    },
  ],
  dsaStats,
  resume: {
    hero: {
      title: 'My Resume',
      subtitle: 'A quick snapshot of my education, skills, and projects.',
    },
    downloadUrl: '/anujyadav38.pdf',
  },
};
