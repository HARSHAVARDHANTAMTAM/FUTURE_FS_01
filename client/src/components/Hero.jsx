import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <img
              src={profile}
              alt="profile"
              className="profile-img"
            />

          </motion.div>

          <p className="hero-tag">
            Open to Opportunities
          </p>

          <h1>
            Harshavardhan <span>Tamtam</span>
          </h1>

          <p className="hero-desc">
            B.Tech student in Computer Science &
            Cyber Security building AI-powered apps,
            full-stack platforms, and scalable digital solutions.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>

            <a
              href="https://github.com/HARSHAVARDHANTAMTAM"
              target="_blank"
              className="btn-outline"
            >
              GitHub
            </a>
            <a
              href={resume}
              download
              className="btn-primary"
            >
              Download Resume
            </a>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;