import React from "react";

const Footer = props => {
  return (
    <footer className="page-footer grey darken-3 section">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>Footer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              voluptates iusto excepturi suscipit in hic, dolorem labore
              repellendus consequatur nulla. Eius aliquam esse minima explicabo
              molestias quae, tempore quo maiores.
            </p>
          </div>
          <div className="col l4 offset-l2 s2">
            <h5>Links</h5>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Register</li>
              <li>ProudSmart</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
