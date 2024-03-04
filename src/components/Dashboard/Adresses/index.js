import React from "react";
import "./Adresses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Adresses() {
  return (
    <body className="adresses_body">
      <section id="title">
        <h2>Table des Adresses</h2>
        <i>
          <FontAwesomeIcon icon={faPenToSquare} />
        </i>
      </section>

      <section className="adresses_section">
        <div className="adresses_tables">
          <h3 className="adresses_titles">Id</h3>
          <h3 className="adresses_titles">Nom</h3>
          <h3 className="adresses_titles">Numéro</h3>
          <h3 className="adresses_titles">Ville</h3>
          <h3 className="adresses_titles">Code Postale</h3>
          <h3 className="adresses_titles">Pays</h3>
          <p className="icons"></p>
        </div>
        <div className="adresses_tables">
          <h3 className="adresses_titles">301</h3>
          <h3 className="adresses_titles">Rue des Roissiers</h3>
          <h3 className="adresses_titles">42</h3>
          <h3 className="adresses_titles">Paris</h3>
          <h3 className="adresses_titles">75000</h3>
          <h3 className="adresses_titles">France</h3>
          <p className="icons">
            <i>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
            <i className="fa-solid fa-trash trash"></i>
          </p>
        </div>
      </section>
      <Link to="/dashboard" className="link_style">
      <footer className="adresses_footer">
        <h1 >Retourner sur l'accueil du tableau de bord</h1>
      </footer>
      </Link>  
    </body>
  );
}

export default Adresses;
