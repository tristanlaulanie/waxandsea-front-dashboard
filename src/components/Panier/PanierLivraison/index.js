import React from "react";
import { Link } from "react-router-dom";
// COMPOSANT
import MaCommande from "../MaCommande";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

// CSS
import "./PanierLivraison.css";

function PanierLivraison() {
  return (
    <div className="PanierLivraison">
      <h1>Mon Panier</h1>
      <div id="panier_user-story">
        <h2 id="panier-title-story">Panier</h2>
        <h2 id="coordonnees-title-story">Coordonnées</h2>
        <h2 id="livraison-title-story">Livraison</h2>
        <h2 className="user-story-titles">Paiement</h2>
      </div>
      <container id="mon-panier_livraison-commande">
        <container id="colissimo_mondial-relay_container">
          <section id="colissimo_section">
            <input
              className="select-radio-colissimo"
              type="radio"
              placeholder="Pays"
            />
            <FontAwesomeIcon id="cube-icon" icon={faCube} />
            <h1 id="colissimo-title">Colissimo - Domicile</h1>
            <h2 className="delivery-titles">Frais de ports offerts</h2>
            <div className="deliveries-infos">
              <h2 className="delivery-titles delivery-title">
                Votre adresse de livraison
              </h2>
              <p id="delivery-contact-infos">
                Prénom - Nom <br></br>
                Nom de la voie et n° de la voie <br></br>
                Code postal - Ville - Pays <br></br>
              </p>
            </div>
          </section>
          <section id="mondial-relay_section">
            <input
              className="select-radio_mondial-relay"
              type="radio"
              placeholder="mondial-relay"
            />
            <FontAwesomeIcon id="cube-icon" icon={faEarthAfrica} />
            <h1 id="colissimo-title">Mondial relay - En point relais</h1>
            <div className="deliveries-infos">
              <h2 className="withdraw-title">Point retrait</h2>
              <p id="withdraw-adress-infos">
                Nom du point de retrait <br></br>
                Nom de la voie et n° de la voie du point de retrait <br></br>
                Code postal - Ville - Pays <br></br>
              </p>
            </div>
          </section>
        </container>
        <div id="command_component">
        <MaCommande />
        <div id="confirm_delivery">
            <Link to="/panier/paiement">
              <button type="submit">VALIDER MA LIVRAISON</button>
            </Link>
          </div>
        </div>
      </container>
    </div>
  );
}

export default PanierLivraison;
