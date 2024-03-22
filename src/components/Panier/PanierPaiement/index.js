import React from "react";
// COMPOSANT

// ICONS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PanierPaiement.css";
// import { Link } from "react-router-dom";

function PanierPaiement() {
  return (
    <div className="PanierPaiement">
      <h1>Mon Panier</h1>
      <div id="panier_user-story">
        <h2 id="panier-title-story">Panier</h2>
        <h2 id="coordonnees-title-story">Coordonnées</h2>
        <h2 id="livraison-title-story">Livraison</h2>
        <h2 id="paiement-title-story">Paiement</h2>
      </div>
      <h2>Choisir mon mode de paiement</h2>
      <div className="stripe-container">
        <section id="stripe-select-img">
          <input
            className="select-radio-stripe"
            type="radio"
            placeholder="Stripe"
          />
          <img
            src="https://stripe.com/img/v3/home/social.png"
            alt="stripe-logo"
            id="stripe-logo"
          />
        </section>
        <div id="paiement_title_form">
          <h3 id="stripe-paiement-title">Paiement par carte bancaire</h3>
          <form action="/process_payment" method="post">
            <section id="card-number">
              <label for="cardNumber">Numéro de carte:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                maxlength="16"
                placeholder="1234 5678 9012 3456"
                required
              />
            </section>
            <section id="security-expiry-card">
              <div id="paiement_expiry-date">
                <label for="expiryDate">Date d'expiration:</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/AA"
                  required
                />
              </div>
              <div id="paiement_security-code">
                <label for="securityCode">Code de sécurité:</label>
                <input
                  type="text"
                  id="securityCode"
                  name="securityCode"
                  maxlength="4"
                  placeholder="123"
                  required
                />
              </div>
            </section>
          </form>
        </div>
      </div>
      <input
        className="select-radio-paypal"
        type="radio"
        placeholder="Paypal"
      />
      <img
        src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png"
        alt="paypal-logo"
        id="paypal-logo"
      />
    </div>
  );
}

export default PanierPaiement;
