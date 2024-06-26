// REACT IMPORTS
import React from "react";
// CSS
import "./Footer.css";
import "./FooterResponsive.css";
// IMAGE
import facebook from "./image/facebook-icon.png";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer_container">
      <ul class="policies-contact-footer">
        <li id="policie-link">
          <Link
            id="politique_de_confidentialite-link"
            to="/politique-de-confidentialite"
          >
            Politique de confidentialité
          </Link>
        </li>
        <li>
          <Link id="cgv-link" to="/cgv">
            Conditions générales de vente
          </Link>
        </li>
        <li id="legal-mentions">
          <Link id="mentions_legales-link" to="/mentions-legales">
            Mentions légales
          </Link>
        </li>
        <li>
          <Link id="contact-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <ul class="dev-policies-footer">
        <li id="copyright">(c) 2024</li>
        <li>Développé par neoCode</li>
        <li id="rights-link">Tous droits réservés</li>
      </ul>
      <ul>
        <li class="social-networks-footer">
          <a
            href="https://www.instagram.com/waxandsea/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="logo-insta-footer" icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/lamaisonpercheefrance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="facebook-logo-footer" src={facebook} alt="logo facebook" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
