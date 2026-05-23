function Projects() {

  const projects = [

    {
      title: "AI Travel Planner",

      description:
        "AI-powered travel recommendation platform using React and OpenAI API to generate personalized travel plans based on user preferences and destinations.",

      tech: [
        "React",
        "Node.js",
        "OpenAI API",
        "Express"
      ],

      github:
        "https://github.com/HARSHAVARDHANTAMTAM",

      live:
        "https://google.com"
    },

    {
      title: "MediVault App",

      description:
        "Secure healthcare management platform for storing medical records, prescriptions, and patient information with authentication and cloud-based access.",

      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT Auth"
      ],

      github:
        "https://github.com/HARSHAVARDHANTAMTAM",

      live:
        "medivault-qrhub.vercel.app"
    }

  ];

  return (

    <section
      id="projects"
      className="section"
    >

      <h2 className="section-title">
        Projects
      </h2>

      <div className="projects-container">

        {
          projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {
                  project.tech.map((tech, i) => (

                    <span key={i}>
                      {tech}
                    </span>

                  ))
                }

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          ))
        }

      </div>

    </section>

  );
}

export default Projects;