import React from "react";
import "./PanierProduit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function PanierProduit() {
  return (
    <div className="PanierProduit">
      <h1>Mon Panier</h1>
      <section>
        <h2>Panier</h2>
        <h2>Coordonnées</h2>
        <h2>Livraison</h2>
        <h2>Paiement</h2>
      </section>
      <section>
        <h3>Mon Panier</h3>
        <i>
          <FontAwesomeIcon icon={faTrash} />
        </i>
        <button>Vider mon panier</button>
      </section>
      <section>
        <img src="https://fakeimg.pl/150/" alt="grey neutral card" />
        <h3>Nom du produit</h3>
        <p>Référence : xxx</p>
        <p>Prix unitaire : Prix €</p>
      </section>
      <span>
        <div>
          <div>-</div>
          <p>1</p>
          <div>+</div>
        </div>
        <p>Supprimer</p>
      </span>
      <section>
        <h3>Ma commande</h3>*
        <div>
            <p>Montant des achats : </p>
            <p>
                <strong>Total achats €</strong>
            </p>
        </div>
      </section>
    </div>
  );
}

export default PanierProduit;
