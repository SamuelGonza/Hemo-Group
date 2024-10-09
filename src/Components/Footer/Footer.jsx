function Footer() {
  return (
    <div
      style={{
        background: "rgb(116, 207, 226)",
        color: "white",
        fontSize: "14px",
        textAlign: "center",
        padding: "40px 20px",
        marginTop: "30px",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <a
          href="https://www.facebook.com/hemogroup"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "24px" }}
        >
          <i className="ri-facebook-fill"></i>
        </a>
        <a
          href="https://www.twitter.com/hemogroup"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "24px" }}
        >
          <i className="ri-twitter-fill"></i>
        </a>
        <a
          href="https://www.instagram.com/hemogroup"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "24px" }}
        >
          <i className="ri-instagram-fill"></i>
        </a>
      </div>
      <p style={{ marginBottom: "10px" }}>
        © {new Date().getFullYear()} Hemo Group. Todos los derechos reservados.
      </p>
      <p style={{ marginBottom: "0" }}>
        Contáctanos: info@hemogroup.com | +1 (800) 123-4567
      </p>
    </div>
  );
}

export default Footer;
