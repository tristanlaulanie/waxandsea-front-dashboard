import React from "react";
import "./SetUser.css";
import "./SetUserResponsive.css";
import { Link } from "react-router-dom";

function SetUser() {
  return (
    <>
      <section className="setUser_form">
        <div>
          <Link to="/dashboard/users" className="setUser_dashboard_link">
          <h1 className="setUser_dashboard_link">
            Retour a la table utilisateurs.
          </h1>
          </Link>
        </div>
        <section className="setUser_add_form">
          <h2 className="setUser_add_user">Modification d'un utilisateur.</h2>
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
              Prénom
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Prenom"
              id="Prenom"
              placeholder="Prénom de l'utilisateur"
            />
            <label className="setUser_label" htmlFor="Téléphone">
              Téléphone
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Téléphone"
              id="Téléphone"
              placeholder="Téléphone de l'utilisateur"
            />
            <label className="setUser_label" htmlFor="Rôle">
              Rôle
            </label>
            <input
              className="setUser_input"
              type="text"
              name="Rôle"
              id="Rôle"
              placeholder="Rôle de l'utilisateur"
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

export default SetUser;
