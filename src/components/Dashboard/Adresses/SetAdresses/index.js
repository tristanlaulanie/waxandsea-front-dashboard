import React from "react";
import "./SetAdresses.css";
import { Link } from "react-router-dom";

function SetAdresses() {
  return (
    <>
      <section className="setUser_form">
        <header>
          <Link to="/dashboard/users" className="setUser_dashboard_link">
          <h1 className="setUser_dashboard_link">
            Retour a la table des adresses.
          </h1>
          </Link>
        </header>
        <section className="setUser_add_form">
          <h2 className="setUser_add_user">Modification d'une adresse.</h2>
          <form className="setUser_form">
            <label className="setUser_label" htmlFor="Nom">
              Nom
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Nom"
              id="Nom"
              placeholder="Nom de l'utilisateur"
            />
            <label className="setUser_label" htmlFor="Prenom">
              Numero
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Prenom"
              id="Prenom"
              placeholder="Numéro de l'utilisateur"
            />
            <label className="setUser_label" htmlFor="Téléphone">
              Ville
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Téléphone"
              id="Téléphone"
              placeholder="Ville de l'utilisateur"
            />
            <label className="setUser_label" htmlFor="Rôle">
              Code postal
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Rôle"
              id="Rôle"
              placeholder="Code postal de l'utilisateur"
            />
            <label className="setUser_label" htmlFor="Rôle">
              Pays
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Rôle"
              id="Rôle"
              placeholder="Pays de l'utilisateur"
            />
            <button className="setUser_button" type="submit">
              ENREGISTRER
            </button>
            <button className="setUser_button_delete" type="submit">
              SUPPRIMER
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default SetAdresses;
