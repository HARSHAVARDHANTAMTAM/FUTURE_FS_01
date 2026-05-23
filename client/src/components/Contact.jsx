import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (

    <section
      id="contact"
      className="section"
    >

      <h2 className="section-title">
        Contact Me
      </h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

      <div className="contact-links">

        <a href="mailto:tamtamharshavardhan@gmail.com">
          tamtamharshavardhan@gmail.com
        </a>

        <a
          href="https://github.com/HARSHAVARDHANTAMTAM"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </section>

  );
}

export default Contact;