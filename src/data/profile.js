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
      description: 'Intensive program covering graph theory fundamentals, advanced algorithms, and optimization strategies. Emphasis on rigorous problem solving, proof-based thinking, and complexity analysis.',
      color: '#F4C430',
    },
    {
      title: 'Problem Solving Intermediate',
      issuer: 'HackerRank',
      date: "Sept'25",
      url: '/certificates/problem_solving_intermediate certificate.pdf',
      thumbnail: '/assets/problemsolving.png',
      description: 'Credential validating intermediate proficiency in data structures and algorithmic problem solving. Focused on clean implementation, edge-case handling, and efficiency.',
      color: '#1A535C',
    },
    {
      title: 'OCI Foundations',
      issuer: 'Oracle',
      date: "Sept'25",
      url: '/certificates/eCertificate Oracle.pdf',
      thumbnail: '/assets/oracle.png',
      description: 'Certification covering Oracle Cloud Infrastructure core services, IAM, networking, and storage. Emphasizes cloud architecture principles, security best practices, and service selection.',
      color: '#E85D4A',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: "Oct'25",
      url: '/certificates/Cloud Computing.pdf',
      thumbnail: '/assets/nptel.png',
      description: 'Academic coursework on cloud service models, virtualization, and distributed systems. Explores scalability, fault tolerance, and resource management.',
      color: '#F4833D',
    },
    {
      title: 'DSA Self Paced',
      issuer: 'Neo Colab',
      date: "Dec'24",
      url: '/certificates/dsa cert.pdf',
      thumbnail: '/assets/neocolab.png',
      description: 'Comprehensive training in data structures, algorithms, and competitive programming patterns. Focus on complexity analysis, optimization, and interview problem solving.',
      color: '#1A535C',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: "Dec'23",
      url: '/certificates/freecodecamp.pdf',
      thumbnail: '/assets/ffc.png',
      description: 'Certification in responsive web design with HTML, CSS, and accessibility standards. Applied modern layout techniques including Flexbox and Grid.',
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
