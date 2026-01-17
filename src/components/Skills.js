function Skills() {
  const skills = ["C", "Python", "Java", "AI/ML", "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "NextJS", "ExpressJS", "Git", "Github"];

  return (
    <section id="skills" className="section light">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;