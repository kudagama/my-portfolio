import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "./assets/profile.png";
import doclink0 from "./assets/doclink0.png";
import doclink1 from "./assets/doclink1.jpg";
import doclink2 from "./assets/doclink2.jpg";
import auction0 from "./assets/auction0.png";
import auction1 from "./assets/auction1.png";
import auction2 from "./assets/auction2.png";
import hostel0 from "./assets/hostel0.png";
import hostal1 from "./assets/hostal1.png";
import hostal2 from "./assets/hostal2.png";
import student0 from "./assets/student0.png";
import student1 from "./assets/student1.png";
import student2 from "./assets/student2.png";
import student3 from "./assets/student3.png";
import track0 from "./assets/track0.png";
import track1 from "./assets/track1.png";
import track2 from "./assets/track2.png";
import track3 from "./assets/track3.png";
import robo0 from "./assets/robo0.jpg";
import robo1 from "./assets/robo1.jpg";
import fox0 from "./assets/fox0.png";
import fox1 from "./assets/fox1.png";
import fox2 from "./assets/fox2.png";
import fox3 from "./assets/fox3.png";

const projects = [
   {
    title: "DocLink",
    description: "DocLink is designed to simplify the process of doctor appointments, providing a platform for patients to connect with healthcare providers efficiently. It aims to make healthcare more accessible, ensuring patients can schedule appointments conveniently and receive timely communication from their doctors.",
    technologies: ["Java", "Kotlin", "Firebase"],
    details: "DocLink is designed to simplify the process of doctor appointments, providing a platform for patients to connect with healthcare providers efficiently. It aims to make healthcare more accessible, ensuring patients can schedule appointments conveniently and receive timely communication from their doctors.",
    images: [doclink0,doclink1, doclink2]
  },
   {
    title: "Courier Management System",
    description: "A Java application designed to manage courier operations efficiently, including package tracking and delivery status.",
    technologies: ["Java", "MySQL", "Java Swing","JasperReports"],
    details: "This software allows users to manage courier packages, assign deliveries, and track package statuses in real time using a simple GUI.",
    images: [track0,track1, track2, track3]
  },
   {
    title: "Student Management System",
    description: "A comprehensive desktop application for managing student records and academic performance.",
    technologies: ["Java", "MySQL", "Java Swing","JasperReports"],
    details: "The application provides functionalities such as adding, editing, and deleting student records, managing grades, and generating reports.",
    images: [student0, student1, student2, student3]
  },
  {
    title: "Auction Management System",
    description: "A web application for online auctions and bidding. Users can list items, place bids in real-time, and track auction progress, providing a transparent and interactive auction experience.",
    technologies: ["React"],
    details: "Includes live bidding, auction timers, user authentication, and automated winner notifications.",
    images: [auction0, auction1, auction2]
  },
  {
    title: "Student Hostal Management System",
    description: "A web application for booking and managing student hostel rooms. Students can search for available rooms, make reservations, and manage their bookings. Administrators can approve Hostels and manage bookings.",
    technologies: ["HTML","CSS", "MySQL","PHP","JavaScript"],
    details: "Room booking, reservation management, attendance logs, student profiles, and fee management modules.",
    images: [hostel0, hostal1, hostal2]
  },
  {
    title: "Handicraft E-Commerce",
    description: "A full-stack e-commerce site for handmade crafts.",
    technologies: ["React", "PHP Laravel"],
    details: "The platform supports user registration, product listing, cart, and order management.",
    //images: [ecom1, ecom2]
  },
  {
    title: "Nurse Allocation System",
    description: "A PHP-based web application for managing nurse allocations across hospital departments.",
    technologies: ["PHP", "HTML", "JavaScript", "MySQL"],
    details: "The system allows administrators to assign nurses to wards, manage schedules, and ensure efficient resource allocation.",
   // images: [nursealloc0, nursealloc1]
  },
  {
    title: "Green Basket",
    description: "An online platform for purchasing fresh fruits, vegetables, and organic goods directly from farmers and suppliers.",
    technologies: ["PHP", "HTML", "JavaScript", "MySQL"],
    details: "Green Basket connects users with fresh, organic produce through a clean interface and efficient delivery system. It includes features like product categories, real-time cart updates, and delivery tracking.",
    //images: [greenbasket0, greenbasket1, greenbasket2]
  },
  {
    title: "FoxFlair",
    description: "A fashion e-commerce platform focusing on trendy and affordable clothing, integrating user reviews and size guides.",
     technologies: ["PHP", "HTML", "JavaScript", "MySQL"],
    details: "FoxFlair is designed to give users a seamless shopping experience for fashion items. It supports user authentication, wishlists, and integrated feedback and rating features to enhance customer confidence.",
    images: [fox0, fox1, fox2,fox3]
  },
  {
    title: "StyleSnap",
    description: "A fashion assistant app that lets users upload photos and get visually similar outfit suggestions with purchase links.",
     technologies: ["PHP", "HTML", "JavaScript", "MySQL"],
    details: "StyleSnap uses machine learning to analyze uploaded outfit images and return visually similar results from a catalog. It provides an interactive and personalized shopping experience powered by visual search.",
    //images: [stylesnap0, stylesnap1, stylesnap2]
  },
  {
    title: "Security Alarm System",
    description: "An ESP32-based system with a mobile app for ultrasonic motion alerts.",
    technologies: ["ESP32", "React Native", "Java"],
    details: "The system alerts through the app and activates an alarm on motion detection.",
    //images: [security1]
  },
  {
  title: "Obstacle Avoiding Robot",
  description: "An autonomous robot that navigates its environment while avoiding obstacles using ultrasonic sensors.",
  technologies: ["Arduino", "Ultrasonic Sensor", "Motor Driver", "C++"],
  details: "This robot uses ultrasonic sensors to detect obstacles in its path and automatically changes direction to avoid collisions. It's built with Arduino and programmed in C++, using a motor driver to control wheel movement based on sensor input. Ideal for demonstrating basic autonomous navigation in robotics.",
  images: [robo0, robo1]
}

];

// --- Modern CSS with improved animations and typography ---
const style = document.createElement("style");
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
  html, body {
    height: 100%;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
    color: #222;
    transition: background 0.4s, color 0.4s;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  body.dark-mode {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: #f1f5f9;
  }
  
  .portfolio-container {
    min-height: 100vh;
    min-width: 100vw;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes gradientBackground {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .about-me-section {
    position: relative;
    overflow: hidden;
    margin: 32px auto 0 auto;
    padding: 32px;
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    z-index: 1;
    animation: fadeIn 0.8s ease-out forwards;
    max-width: 800px;
  }
  
  body.dark-mode .about-me-section {
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  
  .about-me-section::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(79, 140, 255, 0.1) 0%, transparent 70%);
    z-index: -1;
    pointer-events: none;
    animation: gradientBackground 12s ease infinite;
    background-size: 200% 200%;
  }
  
  .about-me-section h2 {
    font-size: 32px;
    margin-bottom: 24px;
    color: #3b82f6;
    position: relative;
    display: inline-block;
  }
  
  .about-me-section h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #93c5fd);
    border-radius: 4px;
  }
  
  .about-me-section p {
    font-size: 17px;
    line-height: 1.8;
    color: #4b5563;
    margin: 0;
    position: relative;
    z-index: 2;
  }
  
  body.dark-mode .about-me-section p {
    color: #cbd5e1;
  }
  
  .theme-toggle-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    background: rgba(255, 255, 255, 0.9);
    color: #1e40af;
    border: none;
    border-radius: 50px;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 10;
    backdrop-filter: blur(5px);
    font-family: 'Space Grotesk', sans-serif;
  }
  
  .theme-toggle-btn:hover {
    background: #3b82f6;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
  }
  
  .dark-mode .theme-toggle-btn {
    background: rgba(15, 23, 42, 0.9);
    color: #93c5fd;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
document.head.appendChild(style);

const aboutMeText = `I'm a passionate Full Stack Developer and IoT enthusiast with a strong background in Java, React, and embedded systems. I enjoy building robust applications and smart devices that solve real-world problems. My experience spans desktop, web, and mobile development, as well as hands-on IoT projects. I love learning new technologies and collaborating on innovative solutions.`;

// Language color mapping
const languageColors = {
  "Java": "#f89820",
  "JavaScript": "#f7df1e",
  "React": "#61DBFB",
  "PHP": "#787CB5",
  "HTML": "#e34c26",
  "CSS": "#264de4",
  "C++": "#00599C",
  "Kotlin": "#B125EA",
  "MySQL": "#00758F",
  "Firebase": "#FFA611",
  "Arduino": "#00979D"
};

// Function to calculate skills data from projects
const calculateSkillsData = (projectsList) => {
  // Initialize counters for each technology
  const techCount = {};
  let totalTechMentions = 0;

  // Count technology mentions across all projects
  projectsList.forEach(project => {
    project.technologies.forEach(tech => {
      // Handle special cases and grouping
      let normalizedTech = tech;
      if (tech === "Java Swing") normalizedTech = "Java";
      if (tech === "React Native") normalizedTech = "React";
      if (tech === "JavaScript") normalizedTech = "JavaScript";
      if (tech === "Ultrasonic Sensor" || tech === "Motor Driver") normalizedTech = "Arduino";

      techCount[normalizedTech] = (techCount[normalizedTech] || 0) + 1;
      totalTechMentions++;
    });
  });

  // Convert counts to percentages and format data
  const skillsData = Object.entries(techCount)
    .map(([language, count]) => ({
      language,
      percentage: Math.round((count / totalTechMentions) * 100),
      color: languageColors[language] || "#666666" // Default color if not specified
    }))
    .filter(skill => skill.percentage >= 3) // Only show skills with at least 3% usage
    .sort((a, b) => b.percentage - a.percentage); // Sort by percentage in descending order

  return skillsData;
};

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const skillsData = calculateSkillsData(projects);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [darkMode]);

  React.useEffect(() => {
    document.documentElement.style.height = "100%";
    document.documentElement.style.width = "100vw";
    document.body.style.height = "100%";
    document.body.style.width = "100vw";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.height = "";
      document.documentElement.style.width = "";
      document.body.style.height = "";
      document.body.style.width = "";
      document.body.style.overflowX = "";
    };
  }, []);

  const handleThemeToggle = () => setDarkMode((prev) => !prev);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="portfolio-container"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: darkMode
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        minHeight: "100vh",
        minWidth: "100vw",
        color: darkMode ? "#f1f5f9" : "#222",
        padding: "0 0 40px 0",
        position: "relative",
        overflowX: "hidden"
      }}
    >
      <header className="portfolio-header" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px 40px 20px",
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <motion.div 
          className="profile-container"
          style={{
            position: "relative",
            marginBottom: 24,
            zIndex: 1
          }}
        >
          <motion.div 
            className="profile-frame"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #3b82f6",
              width: 180,
              height: 180,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              animation: "float 6s ease-in-out infinite",
              position: "relative"
            }}
          >
            <img 
              src={profileImage} 
              alt="Saveen Kudagama" 
              className="profile-img" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }} 
            />
          </motion.div>
        </motion.div>

        <motion.button
          className="theme-toggle-btn"
          onClick={handleThemeToggle}
          aria-label="Toggle dark/light mode"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            background: darkMode 
              ? "rgba(15, 23, 42, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
            color: darkMode ? "#93c5fd" : "#1e40af",
            border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
            borderRadius: "50px",
            padding: "12px 24px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          {darkMode ? (
            <>
              <span style={{ fontSize: "18px" }}>☀️</span>
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <span style={{ fontSize: "18px" }}>🌙</span>
              <span>Dark Mode</span>
            </>
          )}
        </motion.button>

        <motion.h1 
          className="portfolio-name"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            margin: "20px 0 0 0",
            color: darkMode ? "#93c5fd" : "#1e40af",
            letterSpacing: "0.5px",
            textAlign: "center",
            fontFamily: "'Space Grotesk', sans-serif"
          }}
        >
          Saveen Kudagama
        </motion.h1>

        <motion.p 
          className="portfolio-title"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: darkMode ? "#60a5fa" : "#3b82f6",
            margin: "16px 0 0 0",
            fontWeight: 500,
            textAlign: "center"
          }}
        >
          Full Stack Developer | Java | IoT Enthusiast
        </motion.p>

        <motion.p 
          className="portfolio-contact"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            color: darkMode ? "#94a3b8" : "#64748b",
            margin: "12px 0 0 0",
            textAlign: "center",
            maxWidth: "90%"
          }}
        >
          Email: saveenkudagama2002@gmail.com | Phone: 0766088374
        </motion.p>
      </header>

      {/* About Me Section */}
      <motion.section 
        className="about-me-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>{aboutMeText}</p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{
          maxWidth: 800,
          margin: "60px auto 0 auto",
          padding: "32px 24px",
          background: darkMode ? "rgba(15, 23, 42, 0.7)" : "rgba(255, 255, 255, 0.9)",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(10px)"
        }}
      >
        <motion.h2
          style={{
            fontSize: "clamp(28px, 5vw, 36px)",
            fontWeight: 700,
            color: darkMode ? "#93c5fd" : "#1e40af",
            marginBottom: 40,
            fontFamily: "'Space Grotesk', sans-serif",
            position: "relative",
            display: "inline-block"
          }}
        >
          Skills & Technologies
          <motion.span
            style={{
              position: "absolute",
              bottom: -8,
              left: 0,
              width: "60%",
              height: 4,
              background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
              borderRadius: 4
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.language}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              style={{
                width: "100%"
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
                color: darkMode ? "#f1f5f9" : "#1e293b"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`
                    }}
                  />
                  <span style={{ fontWeight: 500 }}>{skill.language}</span>
                </div>
                <span style={{ fontWeight: 600 }}>{skill.percentage}%</span>
              </div>
              <div style={{
                width: "100%",
                height: "12px",
                background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                borderRadius: "6px",
                overflow: "hidden"
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  style={{
                    height: "100%",
                    background: skill.color,
                    borderRadius: "6px",
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="portfolio-projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{
          maxWidth: 1200,
          margin: "60px auto 0 auto",
          padding: "0 24px"
        }}
      >
        <motion.h2 
          className="projects-heading"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            fontSize: "clamp(28px, 5vw, 36px)",
            fontWeight: 700,
            color: darkMode ? "#93c5fd" : "#1e40af",
            marginBottom: 40,
            fontFamily: "'Space Grotesk', sans-serif",
            position: "relative",
            display: "inline-block"
          }}
        >
          Featured Projects
          <motion.span 
            style={{
              position: "absolute",
              bottom: -8,
              left: 0,
              width: "60%",
              height: 4,
              background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
              borderRadius: 4
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.h2>

        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
          perspective: "1000px"
        }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: darkMode 
                  ? "0 20px 40px rgba(0, 0, 0, 0.3)" 
                  : "0 20px 40px rgba(0, 0, 0, 0.1)"
              }} 
              className="project-card"
              onClick={() => setActiveProject(index)}
              whileTap={{ scale: 0.98 }}
              style={{
                background: darkMode
                  ? "rgba(15, 23, 42, 0.7)"
                  : "rgba(255, 255, 255, 0.9)",
                borderRadius: 24,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                padding: 32,
                cursor: "pointer",
                border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
                transition: "all 0.4s ease",
                minHeight: 240,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(10px)",
                transformStyle: "preserve-3d",
                overflow: "hidden"
              }}
            >
              {project.images && project.images.length > 0 && (
                <div style={{
                  marginBottom: 20,
                  marginTop: -32,
                  marginLeft: -32,
                  marginRight: -32,
                  height: 200,
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <motion.img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))",
                    pointerEvents: "none"
                  }}/>
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title" style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: darkMode ? "#93c5fd" : "#1e40af",
                  margin: "0 0 16px 0",
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>{project.title}</h3>
                <p className="project-description" style={{
                  fontSize: 16,
                  color: darkMode ? "#cbd5e1" : "#4b5563",
                  margin: "0 0 20px 0",
                  lineHeight: 1.7
                }}>{project.description}</p>
                <div className="project-tech" style={{
                  fontSize: 14,
                  color: darkMode ? "#60a5fa" : "#3b82f6",
                  fontWeight: 500,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10
                }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{
                      background: darkMode ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)",
                      padding: "6px 12px",
                      borderRadius: 20,
                      border: darkMode ? "1px solid rgba(147, 197, 253, 0.2)" : "1px solid rgba(59, 130, 246, 0.2)",
                      backdropFilter: "blur(4px)"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeProject !== null && (
          <motion.div 
            className="project-detail-modal" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999,
              padding: 24
            }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              style={{
                background: darkMode
                  ? "rgba(15, 23, 42, 0.95)"
                  : "rgba(255, 255, 255, 0.95)",
                borderRadius: 24,
                padding: "40px 32px",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                maxWidth: 600,
                width: "100%",
                position: "relative",
                color: darkMode ? "#f1f5f9" : "#1e293b",
                border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
                backdropFilter: "blur(16px)",
                overflow: "hidden"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-btn" 
                onClick={() => setActiveProject(null)} 
                style={{
                  position: "absolute",
                  top: 20,
                  right: 24,
                  background: "none",
                  border: "none",
                  fontSize: 28,
                  color: darkMode ? "#93c5fd" : "#3b82f6",
                  cursor: "pointer",
                  transition: "transform 0.2s"
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✖
              </button>
              
              <h3 style={{
                fontSize: 28,
                fontWeight: 700,
                color: darkMode ? "#93c5fd" : "#1e40af",
                marginBottom: 20,
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                {projects[activeProject].title}
              </h3>
              
              <p style={{
                fontSize: 16,
                color: darkMode ? "#cbd5e1" : "#4b5563",
                marginBottom: 24,
                lineHeight: 1.8
              }}>
                {projects[activeProject].details}
              </p>
              
              <div style={{
                marginBottom: 24
              }}>
                <h4 style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: darkMode ? "#93c5fd" : "#3b82f6",
                  marginBottom: 12,
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                  Technologies Used:
                </h4>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10
                }}>
                  {projects[activeProject].technologies.map((tech, i) => (
                    <span key={i} style={{
                      background: darkMode ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)",
                      padding: "8px 16px",
                      borderRadius: 20,
                      fontSize: 14,
                      fontWeight: 500,
                      border: darkMode ? "1px solid rgba(147, 197, 253, 0.2)" : "1px solid rgba(59, 130, 246, 0.2)",
                      backdropFilter: "blur(4px)"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-images" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
                width: "100%",
                marginTop: 24
              }}>
                {projects[activeProject].images && projects[activeProject].images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    className="image-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    style={{
                      position: "relative",
                      width: "100%",
                      cursor: "zoom-in",
                      aspectRatio: "4/3",
                      borderRadius: 16,
                      overflow: "hidden",
                      backgroundColor: darkMode ? "rgba(15, 23, 42, 0.5)" : "rgba(241, 245, 249, 0.5)",
                      border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)"
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(img);
                    }}
                  >
                    <motion.img 
                      src={img} 
                      alt={`${projects[activeProject].title} screenshot ${idx + 1}`}
                      className="project-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        backgroundColor: darkMode ? "rgba(15, 23, 42, 0.5)" : "rgba(241, 245, 249, 0.5)",
                        transition: "transform 0.3s ease"
                      }}
                    />
                    <motion.div 
                      className="image-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 16,
                        color: "#fff",
                        fontSize: "24px"
                      }}
                    >
                      <span>🔍</span>
                    </motion.div>
                  </motion.div>
                ))}
                {(!projects[activeProject].images || projects[activeProject].images.length === 0) && (
                  <motion.div
                    className="no-image-placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      width: "100%",
                      aspectRatio: "4/3",
                      borderRadius: 16,
                      backgroundColor: darkMode ? "rgba(15, 23, 42, 0.5)" : "rgba(241, 245, 249, 0.5)",
                      border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative"
                    }}
                  >
                    <div style={{
                      textAlign: "center",
                      color: darkMode ? "#64748b" : "#94a3b8"
                    }}>
                      <span style={{ fontSize: "24px", marginBottom: "8px", display: "block" }}>🖼️</span>
                      <span style={{ fontSize: "14px" }}>Images coming soon</span>
                    </div>
                  </motion.div>
                )}
              </div>

              <style>
                {`
                  .project-img {
                    opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                  }
                  .project-img.loaded {
                    opacity: 1;
                  }
                `}
              </style>
            </motion.div>
          </motion.div>
        )}
      </motion.section>

      <motion.section 
        className="portfolio-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 80,
          padding: "0 24px"
        }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: darkMode
              ? "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)"
              : "linear-gradient(90deg, #3b82f6 0%, #1e40af 100%)",
            color: "white",
            fontWeight: 600,
            fontSize: 17,
            border: "none",
            borderRadius: 50,
            padding: "16px 40px",
            cursor: "pointer",
            boxShadow: darkMode 
              ? "0 12px 30px rgba(59, 130, 246, 0.4)" 
              : "0 12px 30px rgba(59, 130, 246, 0.3)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <span style={{ position: "relative", zIndex: 2 }}>
            Download CV
          </span>
          <motion.span 
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
              transform: "rotate(45deg)",
              zIndex: 1
            }}
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.section>

      {/* Full Screen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.9)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              cursor: "zoom-out"
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 1001,
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                userSelect: "none",
                WebkitUserSelect: "none"
              }}
              onClick={(e) => e.stopPropagation()}
              alt="Full size view"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;