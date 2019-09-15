import React from 'react';
import { Link } from 'react-router-dom';

const profileImage = 'https://res.cloudinary.com/al-tech/image/upload/v1568369434/ahrhivsypsuedoc8lzbn.jpg';
const Home = () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        <div className="columns">
          <div className="column has-text-centered">
            <img src={profileImage} alt="Alain" className="profile-image" />
          </div>
          <div className="column">
            <h1 className="title is-1">I am Alain Burindi</h1>
            <h3 className="title is-5">Software Engineer -2 Years</h3>
            <hr />

            <p className="about-me">A backend developer, who love building projects</p>
            <div className="columns">
              <div className="column">
                <Link to="/resume" className="button is-info is-large is-fullwidth">
                  RESUME
                </Link>
              </div>
              <div className="column">
                <Link to="/contact" className="button is-info is-large is-fullwidth">
                  CONTACT
                </Link>
              </div>
            </div>
            <p className="social-icons">
              <a
                href="https://github.com/alainburindi"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://twitter.com/alainburindi"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://facebook.com/alainburindi"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
