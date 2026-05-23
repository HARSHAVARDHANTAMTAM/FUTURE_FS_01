function Certifications() {

  const certificates = [

    {
      title: "Full Stack Web Development",
      platform: "Udemy"
    },

    {
      title: "React JS Certification",
      platform: "Infosys Springboard"
    },

    {
      title: "Python Programming",
      platform: "HackerRank"
    },

    {
      title: "Cyber Security Essentials",
      platform: "Cisco Networking Academy"
    },

    {
      title: "Java Programming",
      platform: "NPTEL"
    }

  ];

  return (

    <section
      id="certifications"
      className="section"
    >

      <h2 className="section-title">
        Certifications
      </h2>

      <div className="certifications-container">

        {
          certificates.map((cert, index) => (

            <div
              key={index}
              className="certificate-card"
            >

              <h3>{cert.title}</h3>

              <p>{cert.platform}</p>

            </div>

          ))
        }

      </div>

    </section>

  );
}

export default Certifications;