import React from "react";
import "./SetAdresses.css";
import "./SetAdressesResponsive.css";
import { Link } from "react-router-dom";

function SetAdresses() {
  return (
    <>
      <section className="setAdresses_form_section">
        <div>
          <h1 className="setAdresses_dashboard_link">
          <Link to="/dashboard/adresses" className="setAdresses_dashboard_link">
            Retour a la table des adresses.
          </Link>
          </h1>
        </div>
        <section className="setAdresses_add_form">
          <h2 className="setAdresses_add_adresse">Modification d'une adresse.</h2>
          <form className="setAdresses_form">
            <label className="setAdresses_label" htmlFor="Nom">
              Nom
            </label>
            <input
              className="setAdresses_input"
              type="text"
              name="Nom"
              id="Nom"
              placeholder="Nom de l'utilisateur"
            />
            <label className="setAdresses_label" htmlFor="Numero">
              Numero
            </label>
            <input
              className="setAdresses_input"
              type="text"
              name="Numero"
              id="Numero"
              placeholder="Adresse : Numéro"
            />
            <label className="setAdresses_label" htmlFor="Ville">
              Ville
            </label>
            <input
              className="setAdresses_input"
              type="text"
              name="Ville"
              id="Ville"
              placeholder="Adresse : Ville"
            />
            <label className="setAdresses_label" htmlFor="CodePostal">
              Code postal
            </label>
            <input
              className="setAdresses_input"
              type="text"
              name="CodePostal"
              id="CodePostal"
              placeholder="Adresse : Code postal"
            />
            <label className="setAdresses_label" htmlFor="Pays">
              Pays
            </label>
            <input
              className="setAdresses_input"
              type="text"
              name="Pays"
              id="Pays"
              placeholder="Adresse : Pays"
            />
            <button className="setAdresses_button" type="submit">
              ENREGISTRER
            </button>
            <button className="setAdresses_button_delete" type="submit">
              SUPPRIMER
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default SetAdresses;
