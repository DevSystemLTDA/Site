import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <h3>Entre em contato conosco!</h3>
            <div id="cont">
                <a href="https://www.instagram.com/dev.syst" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>

        </footer>
    );
}

export default Footer;