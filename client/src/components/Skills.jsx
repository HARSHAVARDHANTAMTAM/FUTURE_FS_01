const skills = {
  Languages: ["Java", "Python", "C", "JavaScript"],

  Frontend: ["HTML", "CSS", "React.js"],

  Backend: ["Node.js", "Express.js"],

  Database: ["MongoDB", "MySQL"]
};

function Skills() {
  return (
    <section id="skills" className="section">

      <h2 className="section-title">
        Skills
      </h2>

      <div className="skills-grid">

        {Object.entries(skills).map(([category, items]) => (

          <div className="skill-card" key={category}>

            <h3>{category}</h3>

            <div className="tags">

              {items.map((item, index) => (
                <span className="tag" key={index}>
                  {item}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;