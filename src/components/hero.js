import React from "react";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span>
                <div className="primary-color">online business</div>
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              velit a vel accusantium reprehenderit. Dolores mollitia error
              molestias magni voluptas quo, a itaque iusto eligendi recusandae
              corrupti quia culpa saepe.
            </p>

            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <span>
                  <FaDatabase />
                  Staxx
                </span>
                <span>
                  <FaAsterisk />
                  Star AI
                </span>
                <span>
                  <FaAccusoft />
                  Accusoft
                </span>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-text">Sign in With</p>
                <div className="social-login">
                  <span>
                    <FaFacebook size={20} />
                  </span>
                  <span>
                    <FaTwitter size={20} />
                  </span>
                  <span>
                    <FaGithub size={20} />
                  </span>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>

                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="******" />
                  <button>Create Your Account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>
                  By signing up, you agree to our{" "}
                  <span className="primary-color">Terms, Data Policy</span> and{" "}
                  <span className="primary-color">Cookies Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
