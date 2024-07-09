import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import Splash from "./Splash";

const Header = ({ data }) => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isShineActive, setIsShineActive] = useState(false);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
    setTimeout(() => {
      setIsShineActive(true);
    }, 1000); // Delay to ensure smooth transition
  };

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a target={"_blank"} rel="noreferrer" href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  const {text} = useTypewriter({
    words: ['Stephen Asiedu Dompreh'],
    loop: 3,
  });

  return (
    <>
      {isSplashVisible && <Splash onFinish={handleSplashFinish} />}
      <header id="home">
        <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={`row banner ${isShineActive ? "shine" : ""}`}>
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {text}</h1>
            <h3>
              Based in {city}. <span>{occupation}</span>. {description}
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </>
  );
};

export default Header;
