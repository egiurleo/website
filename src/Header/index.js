import React from "react";
import "./styles.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">
        <a href="/" target="_self">
          Emily Giurleo<span className="cursor">_</span>
        </a>
      </h1>

      <div className="nav">
        <p>
          <a href="/projects" target="_self">
            projects
          </a>
        </p>
        <p>
          <a href="/speaking" target="_self">
            speaking
          </a>
        </p>
        <p>
          <a
            href="https://dev.to/emilygiurleo"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;