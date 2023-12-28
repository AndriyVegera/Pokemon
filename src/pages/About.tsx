import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/avatar.jpg";
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Andrii Vehera</h1>
      <h2 className="profile-text">Junior Frontend Developer</h2>
      <div className="profile-links">
        <a href="https://github.com/AndriyVegera" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://t.me/haruka_7" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a href="https://www.linkedin.com/in/vehera-andrii" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
