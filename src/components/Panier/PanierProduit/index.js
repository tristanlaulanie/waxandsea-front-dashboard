import React from "react";
import "./PanierProduit.css";
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
              <i>
                <FontAwesomeIcon icon={faTrash} />
              </i>
              <button>Vider mon panier</button>
            </div>
          </section>
          <section id="mon-panier_section-produit">
            <img src="https://fakeimg.pl/150/" alt="grey neutral card" />
            <div id="section-produit_text">
              <div className="section-produit_text-img">
                <h3>Nom du produit</h3>
                <div id="produit_text">
                  <p>Référence : xxx</p>
                  <p>Prix unitaire : Prix €</p>
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
                <strong>
                  Total___€ <br></br> par article{"(s)"}
                </strong>
              </p>
            </div>
          </section>
        </container>
        <container id="mon-panier_commande">
          <h3>Ma commande</h3>
          <section>
            <div id="commande_total-achats">
              <p>Montant des achats : </p>
              <p>
                <strong>Total achats €</strong>
              </p>
            </div>
            <div id="commande_frais-de-ports">
              <p>Frais de port : </p>
              <p>
                <strong>Frais de port €</strong>
              </p>
            </div>
            <em>Plus que x euros pour les frais de ports offerts</em>
            <span>
              <div id="commande_total">
                <p>Total : </p>
                <p>
                  <strong>Total €</strong>
                </p>
              </div>
              <div id="commande_tva">
                <p>TVA</p>
                <p>
                  <strong>TVA €</strong>
                </p>
              </div>
            </span>
            <span id="achats_panier_buttons">
              <button>Continuer mes achats</button>
              <button>Valider mon panier</button>
            </span>
          </section>
        </container>
      </div>
    </div>
  );
}

export default PanierProduit;
