import React from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";

function AddUser() {
    return (
        <>
          <section className="addUser_form">
            <header>
              <Link to="/dashboard/users" className="addUser_dashboard_link">
              <h1 className="addUser_dashboard_link">
                Retour a la table utilisateurs.
              </h1>
              </Link>
            </header>
            <section className="addUser_add_form">
              <h2 className="addUser_add_user">Formulaire d'ajout d'utilisateur</h2>
              <form className="addUser_form">
                <label className="addUser_label" htmlFor="Nom">
                  Nom
                </label>
                <input
                  className="addUser_input"
                  type="text"
                  name="Nom"
                  id="Nom"
                  placeholder="Nom de l'utilisateur"
                />
                <label className="addUser_label" htmlFor="Prenom">
                  Prénom
                </label>
                <input
                  className="addUser_input"
                  type="text"
                  name="Prenom"
                  id="Prenom"
                  placeholder="Prénom de l'utilisateur"
                />
                <label className="addUser_label" htmlFor="Téléphone">
                  Téléphone
                </label>
                <input
                  className="addUser_input"
                  type="text"
                  name="Téléphone"
                  id="Téléphone"
                  placeholder="Téléphone de l'utilisateur"
                />
                <label className="addUser_label" htmlFor="Rôle">
                  Rôle
                </label>
                <input
                  className="addUser_input"
                  type="text"
                  name="Rôle"
                  id="Rôle"
                  placeholder="Rôle de l'utilisateur"
                />
                <button className="addUser_button" type="submit">
                  ENREGISTRER
                </button>
              </form>
            </section>
          </section>
        </>
      );
}

export default AddUser;