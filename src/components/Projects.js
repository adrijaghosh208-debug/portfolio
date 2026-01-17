import { title } from "framer-motion/client";

function Projects() {
  const projects = [
    {title: "Personal Business Card", desc: "A simple React project" },
    {title: "State Management App", desc: "Using Button actions for state management" },
    { title: "Todo App", desc: "Task manager using React hooks" },
    {title: "Quote Generator App", desc: "Random quote generator using API call" },
    { title: "Portfolio Website", desc: "Personal React portfolio" },
    { title: "Weather App", desc: "API based weather application" }
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;