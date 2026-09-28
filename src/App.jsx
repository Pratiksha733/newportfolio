import React from 'react';
import Typewriter from 'typewriter-effect';
import { 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  ExternalLink, 
  Mail, 
  Phone,
  FileText,
  Award,
  Terminal,
  Layers,
  Database,
  UserCheck,
  Globe,
  Sparkles
} from 'lucide-react';
import './App.css';

function App() {
  const contactInfo = {
    name: "Pratiksha Agnihotri",
    phone: "8009306784",
    email: "agnihotripratiksha733@gmail.com",
    github: "https://github.com/pratiksha733",
    linkedin: "https://linkedin.com/in/pratiksha-agnihotri",
    leetcode: "https://leetcode.com/",
    resume: "/Pratiksha_Agnihotri_Resume.pdf"
  };

  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: <Layers className="skill-icon" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"]
    },
    {
      category: "Backend & Databases",
      icon: <Database className="skill-icon" size={24} />,
      skills: ["MongoDB", "SQL", "Node.js", "Express.js"]
    },
    {
      category: "Tools & Core Concepts",
      icon: <Terminal className="skill-icon" size={24} />,
      skills: ["GitHub", "VS Code", "Data Structures & Algorithms", "Problem Solving"]
    }
  ];

  const softSkills = [
    "Quick Learner",
    "Adaptable",
    "Team Worker",
    "Technical Communication",
    "Problem Solving"
  ];

  const projectsData = [
    {
      title: "School ERP Web Application",
      image: "/school_erp.jpg",
      description: "Full-featured school management dashboard platform designed for digital attendance, timetables, academic reports, and multi-role admin controls.",
      badge: "Production Deployed",
      live: "https://school-erp-tan-seven.vercel.app/",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Blinkit Clone Web Application",
      image: "/blinkit.jpg",
      description: "Production-ready quick commerce grocery delivery interface replica featuring real-time category filtering, cart management, and interactive UI.",
      badge: "Deployed on GitHub Pages",
      live: "https://pratiksha733.github.io/Blinkit/",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI/UX"]
    }
  ];

  const educationData = [
    {
      institution: "SR Group of Institutions (AKTU)",
      location: "Lucknow, India",
      degree: "Bachelor of Technology in Computer Science and Engineering (Spec. in Artificial Intelligence)",
      period: "2023 – 2027",
      cgpa: "7.92"
    }
  ];

  const certificationsData = [
    {
      title: "Full Stack Web Development & DSA Training",
      provider: "AccioJob",
      highlights: [
        "Underwent rigorous training focused on Data Structures, Algorithms, and Core Computer Science fundamentals.",
        "Built practical web projects using modern front-end concepts and hands-on coding exercises."
      ]
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Header Navigation */}
      <header className="header">
        <div className="logo">&lt;{contactInfo.name} /&gt;</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#training">Certifications</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        {/* Profile photo in middle top with flank social links on Left and Right */}
        <div className="hero-avatar-wrapper">
          {/* Left Social Links */}
          <div className="avatar-flank flank-left">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="avatar-link-chip chip-github">
              <Globe size={18} /> GitHub
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="avatar-link-chip chip-linkedin">
              <Globe size={18} /> LinkedIn
            </a>
          </div>

          {/* Profile Photo Circle */}
          <div className="avatar-container">
            <img 
              src="/pratiksha_photo.jpg" 
              alt="Pratiksha Agnihotri" 
              className="avatar-img"
            />
          </div>

          {/* Right Links & Resume */}
          <div className="avatar-flank flank-right">
            <a href={contactInfo.leetcode} target="_blank" rel="noopener noreferrer" className="avatar-link-chip chip-leetcode">
              <Code2 size={18} /> LeetCode
            </a>
            <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer" className="avatar-link-chip chip-resume">
              <FileText size={18} /> Resume
            </a>
          </div>
        </div>

        <h1 className="hero-title">Hi, I'm {contactInfo.name} 👋</h1>

        {/* Animated Typewriter Text */}
        <div className="animated-text-container">
          <Typewriter
            options={{
              strings: [
                "I am a Developer.",
                "I am a Web Developer.",
                "I am an AI & Web Tech Student.",
                "Full Stack Developer Aspirant."
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>

        <p className="hero-subtitle">
          Computer Science undergraduate specializing in Artificial Intelligence. Eager to implement my skills in real-world projects and seeking an entry-level Full Stack Developer role to gain hands-on experience in front-end development, core DSA, and modern web frameworks.
        </p>

        {/* Contact Info Bar */}
        <div className="contact-bar">
          <a href={`mailto:${contactInfo.email}`} className="contact-chip">
            <Mail size={16} /> {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone}`} className="contact-chip">
            <Phone size={16} /> {contactInfo.phone}
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-tag">Capabilities</div>
        <h2 className="section-title">
          <Wrench size={28} /> Technical & Soft Skills
        </h2>

        <div className="skills-grid" style={{ marginBottom: '2.5rem' }}>
          {technicalSkills.map((item, idx) => (
            <div className="glass-card skill-card" key={idx}>
              <div className="skill-header">
                {item.icon}
                <h3>{item.category}</h3>
              </div>
              <div className="skill-tags">
                {item.skills.map((skill, sIdx) => (
                  <span className="tag" key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-container">
          <h3 className="sub-title"><UserCheck size={20} /> Soft Skills</h3>
          <div className="skill-tags">
            {softSkills.map((skill, idx) => (
              <span className="tag tag-soft" key={idx}>✓ {skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-tag">Work</div>
        <h2 className="section-title">
          <Briefcase size={28} /> Featured Projects
        </h2>
        <div className="projects-card-grid">
          {projectsData.map((project, idx) => (
            <div className="project-card-container glass-card" key={idx}>
              {/* Project Image Preview Header */}
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-preview-img" />
              </div>

              {/* Project Details */}
              <div className="project-details">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                
                {/* Highlight Badge */}
                <div className="project-highlight-chip">
                  <Sparkles size={14} /> {project.badge}
                </div>

                {/* Tech Tags */}
                <div className="project-tech-pills">
                  {project.tech.map((tech, tIdx) => (
                    <span className="project-pill" key={tIdx}>{tech}</span>
                  ))}
                </div>

                {/* Visit Live Demo Button */}
                <div style={{ marginTop: '1.25rem' }}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-visit-project">
                    Visit Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="section-tag">Academic</div>
        <h2 className="section-title">
          <GraduationCap size={28} /> Education
        </h2>
        <div className="timeline">
          {educationData.map((edu, idx) => (
            <div className="glass-card timeline-item" key={idx}>
              <div className="timeline-degree">{edu.degree}</div>
              <div className="timeline-school">{edu.institution} — {edu.location}</div>
              <div className="timeline-date">Duration: {edu.period} | CGPA: {edu.cgpa}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Training & Certifications Section */}
      <section id="training" className="section">
        <div className="section-tag">Learning</div>
        <h2 className="section-title">
          <Award size={28} /> Training & Certifications
        </h2>
        <div className="timeline">
          {certificationsData.map((cert, idx) => (
            <div className="glass-card timeline-item" key={idx}>
              <div className="timeline-degree">{cert.title}</div>
              <div className="timeline-school">Provider: {cert.provider}</div>
              <ul className="project-points" style={{ marginTop: '0.75rem' }}>
                {cert.highlights.map((hl, hIdx) => (
                  <li key={hIdx}>{hl}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>© {new Date().getFullYear()} {contactInfo.name}. Designed & Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;
