import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.title}>
        <Link to="/" style={styles.link}>Social Media Dashboard</Link>
      </h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link> {/* Added Dashboard Link */}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  }
};

export default Navbar;
