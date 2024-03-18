import React from "react";
// COMPOSANT
import MaCommande from "../MaCommande";
// CSS
import "./PanierCoordonnees.css";

function PanierCoordonnees() {
  return (
    <div className="PanierCoordonnes">
      <h1>Mon Panier</h1>
      <div id="panier_user-story">
        <h2 id="panier-title-story">Panier</h2>
        <h2 id="coordonnees-title-story">Coordonnées</h2>
        <h2 className="user-story-titles">Livraison</h2>
        <h2 className="user-story-titles">Paiement</h2>
      </div>
      <div id="mon-panier_coordonnees-commande">
        <form>
          {/* Form content here */}
          <div>
            <h1>Dénomination sociale :</h1>
          </div>
          <div id="firstname-lastname_form">
            <div>
              <label htmlFor="first_name">Prénom * :</label>
              <input type="text" id="first_name" name="first_name" required />
            </div>
            <div>
              <label htmlFor="last_name">Nom * :</label>
              <input type="text" id="last_name" name="last_name" required />
            </div>
          </div>
          <div id="company-name_form">
            <label htmlFor="company_name">
              Nom de l'entreprise (facultatif):
            </label>
            <input type="text" id="company_name" name="company_name" />
          </div>
          <div id="billing-form">
            <div>
              <h1 id="billing-adress_title">Adresse de facturation :</h1>
              <h2 id="billing-adress_country">
                Pays : <strong>France</strong>
              </h2>
              <div id="street-name-number">
                <label htmlFor="billing_address">
                  Numéro et nom de rue * :
                </label>
                <input
                  type="text"
                  id="billing_address"
                  name="billing_address"
                />
                <input
                  type="text"
                  name="building"
                  placeholder="Bâtiment, Appartement etc. (facultatif)"
                />
              </div>
              <div id="postal-code">
                <label htmlFor="billing_postal_code">Code postal * :</label>
                <input
                  type="text"
                  id="billing_postal_code"
                  name="billing_postal_code"
                />
              </div>
              <input
                type="text"
                id="billing_city"
                name="billing_city"
                placeholder="Ville *"
              />
              <input
                type="text"
                id="billing_phone"
                name="billing_phone"
                placeholder="Téléphone *"
              />
              <input
                type="email"
                id="billing_email"
                name="billing_email"
                placeholder="Adresse de messagerie *"
              />
            </div>
            <div>
              <input type="checkbox" id="same_address" name="same_address" />
              <label htmlFor="same_address">
                Choisir la même adresse pour la livraison
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="shipping_address">Adresse de livraison :</label>
            <input
              type="text"
              id="shipping_address"
              name="shipping_address"
              placeholder="Numéro et nom de rue *"
            />
            <input
              type="text"
              name="shipping_building"
              placeholder="Bâtiment, Appartement etc. (facultatif)"
            />
            <input
              type="text"
              id="shipping_postal_code"
              name="shipping_postal_code"
              placeholder="Code postal *"
            />
            <input
              type="text"
              id="shipping_city"
              name="shipping_city"
              placeholder="Ville *"
            />
            <input
              type="text"
              id="shipping_phone"
              name="shipping_phone"
              placeholder="Téléphone *"
            />
            <input
              type="email"
              id="shipping_email"
              name="shipping_email"
              placeholder="Adresse de messagerie *"
            />
          </div>
          <div>
            <button type="submit">CONFIRMER MES COORDONNÉES</button>
          </div>
        </form>
        {/* Assuming MaCommande is a component you have created */}
        <MaCommande />
      </div>
    </div>
  );
}

export default PanierCoordonnees;
