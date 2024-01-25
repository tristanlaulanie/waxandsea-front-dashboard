import React from "react";
import "./Adresses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Adresses() {
  return (
    <body>
      <section id="title">
        <h2>Table des Adresses</h2>
        <i>
          <FontAwesomeIcon icon={faPenToSquare} />
        </i>
      </section>

      <section className="">
        <div className="adresses_tables">
          <h3>Id</h3>
          <h3>Nom</h3>
          <h3>Numéro</h3>
          <h3>Ville</h3>
          <h3>Code Postale</h3>
          <h3>Pays</h3>
          <p className="icons"></p>
        </div>
        <div className="adresses_tables">
          <h3>301</h3>
          <h3>Rue des Roissiers</h3>
          <h3>42</h3>
          <h3>Paris</h3>
          <h3>75000</h3>
          <h3>France</h3>
          <p className="icons">
            <i>
              <FontAwesomeIcon icon={faPenToSquare} />
            </i>
            <i className="fa-solid fa-trash trash"></i>
          </p>
        </div>
      </section>
      <footer>
        <h1>Retourner sur l'accueil du tableau de bord</h1>
      </footer>
    </body>
  );
}

export default Adresses;
