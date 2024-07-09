import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-zinc-900 text-center text-white p-4 flex justify-center gap-5">
      {/* <a href="https://www.facebook.com">
        <span>Facebook</span>{" "}
        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
      </a> */}
      <a href="https://www.instagram.com/tarhaa20/" target="_blank">
        <span> Instagram</span>{" "}
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Footer;
