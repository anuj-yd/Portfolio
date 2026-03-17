export const findAnswer = (question, cvData) => {
  const q = question.toLowerCase().trim();

  // Greeting
  if (q.match(/^(hi|hello|hey|howdy|sup|yo|good morning|good afternoon|good evening)[\s!?]*$/)) {
    return `👋 Hi there! I'm Anuj's virtual assistant. I can tell you about his skills, projects, achievements, certifications, education, and contact info. What would you like to know?`;
  }

  // Who is Anuj / about
  if (q.includes('who is') || q.includes('about anuj') || q.includes('tell me about') || q.includes('introduce') || q.includes('summary') || q.includes('background')) {
    return `🙋 Anuj Yadav is a ${cvData.basics.title} based in ${cvData.basics.location}.\n\n${cvData.basics.summary}\n\nHe's currently pursuing B.Tech in Computer Science Engineering.`;
  }

  // Projects — specific project queries
  if (q.includes('nivana') || q.includes('mental wellness') || q.includes('wellness')) {
    const p = cvData.projects.find(proj => proj.name.toLowerCase().includes('nivana'));
    return p ? `🧘 **${p.name}** (${p.tech})\n\n${p.description}` : "I couldn't find details about that project.";
  }

  if (q.includes('shortest path') || q.includes('dijkstra') || q.includes('graph') || q.includes('path finder')) {
    const p = cvData.projects.find(proj => proj.name.toLowerCase().includes('shortest path'));
    return p ? `🗺️ **${p.name}** (${p.tech})\n\n${p.description}` : "I couldn't find details about that project.";
  }

  if (q.includes('volunteer hub') || q.includes('volunteer')) {
    const p = cvData.projects.find(proj => proj.name.toLowerCase().includes('volunteer'));
    return p ? `🤝 **${p.name}** (${p.tech})\n\n${p.description}` : "I couldn't find details about that project.";
  }

  // Projects — general
  if (q.includes('project') || q.includes('build') || q.includes('built') || q.includes('portfolio') || q.includes('made') || q.includes('created') || q.includes('developed')) {
    return `🚀 Anuj has worked on ${cvData.projects.length} key projects:\n\n${cvData.projects.map((p, i) => `${i + 1}. **${p.name}** (${p.tech})\n   ${p.description}`).join('\n\n')}`;
  }

  // Skills — specific tech
  const allSkills = [
    ...cvData.skills.languages,
    ...cvData.skills.frontend,
    ...cvData.skills.backend,
    ...cvData.skills.database,
    ...cvData.skills.tools
  ];

  const mentionedSkill = allSkills.find(skill => {
    // Escape special regex chars (e.g. C++)
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Word boundary: skill must not be surrounded by other letters
    const pattern = new RegExp(`(?<![a-zA-Z])${escaped}(?![a-zA-Z])`, 'i');
    return pattern.test(q);
  });
  if (mentionedSkill) {
    const category = Object.entries(cvData.skills).find(([, skills]) =>
      skills.map(s => s.toLowerCase()).includes(mentionedSkill.toLowerCase())
    );
    const categoryName = category ? category[0] : 'skills';
    return `✅ Yes! Anuj knows **${mentionedSkill}**. It's listed under his ${categoryName} skills.\n\nFull ${categoryName} stack: ${category ? category[1].join(', ') : mentionedSkill}`;
  }

  // Skills — general
  if (q.includes('skill') || q.includes('know') || q.includes('tech') || q.includes('language') || q.includes('stack') || q.includes('frontend') || q.includes('backend') || q.includes('database') || q.includes('tools') || q.includes('experti')) {
    return `💻 Anuj's technical skills:\n\n🔤 **Languages**: ${cvData.skills.languages.join(', ')}\n🎨 **Frontend**: ${cvData.skills.frontend.join(', ')}\n⚙️ **Backend**: ${cvData.skills.backend.join(', ')}\n🗄️ **Database**: ${cvData.skills.database.join(', ')}\n🛠️ **Tools**: ${cvData.skills.tools.join(', ')}`;
  }

  // Education
  if (q.includes('education') || q.includes('study') || q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('btech') || q.includes('b.tech') || q.includes('student') || q.includes('studying') || q.includes('qualification')) {
    return `🎓 ${cvData.education.status} — **${cvData.education.degree}**\n\n${cvData.education.details}`;
  }

  // Achievements
  if (q.includes('achievement') || q.includes('award') || q.includes('star') || q.includes('hackerrank') || q.includes('dsa') || q.includes('problem solving') || q.includes('leetcode') || q.includes('competitive') || q.includes('accomplish')) {
    return `🏆 Anuj's achievements:\n\n${cvData.achievements.map(a => `• ${a}`).join('\n')}`;
  }

  // DSA Profiles
  if (q.includes('profile') || q.includes('codolio') || q.includes('geeksforgeeks') || q.includes('gfg') || q.includes('coding profile') || q.includes('competitive programming')) {
    return `📊 Anuj's coding profiles:\n\n• 🟡 LeetCode: ${cvData.dsaProfiles.leetcode}\n• 🟢 HackerRank: ${cvData.dsaProfiles.hackerrank}\n• 🟢 GeeksForGeeks: ${cvData.dsaProfiles.geeksforgeeks}\n• 🔵 Codolio: ${cvData.dsaProfiles.codolio}`;
  }

  // Certifications
  if (q.includes('certif') || q.includes('course') || q.includes('nptel') || q.includes('oracle') || q.includes('mongodb') || q.includes('freecodecamp') || q.includes('credential') || q.includes('badge')) {
    return `📜 Anuj's certifications:\n\n${cvData.certifications.map(c => `• ${c}`).join('\n')}`;
  }

  // Contact / social
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('connect') || q.includes('linkedin') || q.includes('github') || q.includes('social')) {
    return `📬 You can reach Anuj here:\n\n📧 **Email**: ${cvData.basics.email}\n💼 **LinkedIn**: ${cvData.social.linkedin}\n🐙 **GitHub**: ${cvData.social.github}`;
  }

  // Experience / work
  if (q.includes('experience') || q.includes('internship') || q.includes('intern') || q.includes('job') || q.includes('work experience')) {
    return `💼 Anuj is currently a student and has built strong practical experience through personal projects including a MERN stack wellness platform, algorithm visualizers, and volunteer management systems. He's actively looking for internship and full-time opportunities!\n\n📬 Reach him at: ${cvData.basics.email}`;
  }

  // Location
  if (q.includes('locat') || q.includes('where') || q.includes('country') || q.includes('city') || q.includes('based')) {
    return `📍 Anuj is based in **${cvData.basics.location}** and is open to remote opportunities.`;
  }

  // Fallback
  return `🤔 I'm not sure about that! Try asking me about:\n\n• 💻 Skills & tech stack\n• 🚀 Projects\n• 🎓 Education\n• 🏆 Achievements\n• 📜 Certifications\n• 📬 Contact info\n\nOr reach Anuj directly at **${cvData.basics.email}**!`;
};
