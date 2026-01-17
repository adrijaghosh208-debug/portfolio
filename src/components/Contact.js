function Contact() {
  return (
    <section
      id="contact"
      className="section light"
      style={{ textAlign: "center" }}
    >
      <h2>Contact</h2>

      <p>
        Email:{" "}
        <a
          href="mailto:adrijaghosh208@gmail.com"
          style={{ color: "#1d2671", textDecoration: "none", fontWeight: "bold" }}
        >
          adrijaghosh208@gmail.com
        </a>
      </p>

      <p>
        Phone:{" "}
        <a
          href="tel:+919874268358"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          +91 9874268358
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/adrija-ghosh-708533315"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          View Profile
        </a>
      </p>
    </section>
  );
}

export default Contact;