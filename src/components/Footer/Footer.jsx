import React from 'react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import "./Footer.css";
import Wave from "../../img/wave.png";

function Footer() {
    return (
        <div className="footer">
<img src={Wave} alt="" style={{ width: "100%", height: "2%" }} />

            <div className="f-content">
                <span>ajeelavan1503@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/clevonextech" target="_blank" rel="noopener noreferrer">
                        <FaInstagram color="white" size="3rem" />
                    </a>
                    <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaFacebook color="white" size="3rem" />
                    </a>
                    <a href="https://github.com/ayilavan" target="_blank" rel="noopener noreferrer">
                        <FaGithub color="white" size="3rem" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
