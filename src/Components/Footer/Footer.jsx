function Footer() {
  return (
    <div
      style={{
        background: "rgb(116, 207, 226)",
        color: "white",
        fontSize: "14px",
        textAlign: "center",
        padding: "30px",
        marginTop: "30px",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        <a
          href="https://www.facebook.com/hemogroup"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", marginRight: "10px" }}
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com/hemogroup"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", marginRight: "10px" }}
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/hemogroup"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          Instagram
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Hemo Group. Todos los derechos reservados.
      </p>
      <p>Contáctanos: info@hemogroup.com | +1 (800) 123-4567</p>
    </div>
  );
}

export default Footer;
