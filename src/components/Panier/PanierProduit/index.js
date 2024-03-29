import React from "react";
// COMPOSANT
import MaCommande from "../MaCommande";
import { Link } from "react-router-dom";
// CSS
import "./PanierProduit.css";
import "./PanierProduitResponsive.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function PanierProduit() {
  return (
    <div className="PanierProduit">
      <h1>Mon Panier</h1>
      <container id="panier_user-story">
        <h2 id="panier-title-story">Panier</h2>
        <h2 className="user-story-titles">Coordonnées</h2>
        <h2 className="user-story-titles">Livraison</h2>
        <h2 className="user-story-titles">Paiement</h2>
      </container>
      <div id="mon-panier_produit_commande">
        <container id="mon-panier_produit">
          <section id="panier_container_title">
            <h3>Mon Panier</h3>
            <div id="panier_title-icon-button">
              <div>
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <button>Vider mon panier</button>
            </div>
          </section>
          <section id="mon-panier_section-produit">
            <img src="https://fakeimg.pl/150/" alt="grey neutral card" />
            <div id="section-produit_text">
              <div className="section-produit_text-img">
                <h3>Nom du produit</h3>
                <div id="produit_text">
                  <p id="produit_text_ref">Référence : xxx</p>
                  <p id="produit_text_price">Prix unitaire : <br/> Prix €</p>
                </div>
              </div>
              <div id="section-produit_quantity">
                <div id="produit_quantity">
                  <div className="quantity_operator">-</div>
                  <p className="quantity_number">1</p>
                  <div className="quantity_operator">+</div>
                </div>
                <p id="produit_delete">Supprimer</p>
              </div>
            </div>
            <div id="section-produit_total">
              <p>
                  Total___€ <br></br> par article{"(s)"}
              </p>
            </div>
          </section>
        </container>
        <div id="panier-produit_commande_component">
          <MaCommande />
          <div id="valid_button">
            <Link to="/panier/coordonnees">
              <button type="submit">VALIDER MON PANIER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanierProduit;
