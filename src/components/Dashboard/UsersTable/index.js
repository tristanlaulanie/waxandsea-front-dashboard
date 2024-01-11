import React from "react";
import "./UsersTable.css";
import "./UsersTableResponsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function UsersTable() {
  return (
    <>
      <section className="dashboard_users_table">
      <Link to="/dashboard" className="link-style">
        <header className="home_header">
          <h1 className="home_header_h1">Retourner sur l'accueil du tableau de bord</h1>
        </header>
        </Link>
        <main className="main_container">
          <section id="title">
            <h2 className="users_table_title">Table des utilisateurs</h2>
            <Link to="/dashboard/users/add-user" className="link-style-add">
            <i id="penSquare_icon">
              <FontAwesomeIcon icon={faCirclePlus} />
              <p>Ajouter un utilisateur</p>
            </i>
            </Link>
          </section>
          <section className="users_table">
            <div className="identifiants">
              <h3>ID</h3>
              <h3>Prénom</h3>
              <h3>Nom</h3>
              <h3 id="phonenumber-title">Téléphone</h3>
              <h3 id="role">Rôle</h3>
              <h4>Modifier / Supprimer</h4>
            </div>
            <section className="users">
              <div className="utilisateur">
                <p className="number">1</p>
                <p className="firstname">John</p>
                <p className="lastname">Doe</p>
                <p className="phonenumber">06 00 00 00 00</p>
                <p className="role">Administrateur</p>
                <p className="icons">
                  <i id="penSquare_icon">
                  <Link to="/dashboard/users/set-user" className="link-style_set_user">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  </i>
                  <i id="trash_icon">
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                </p>
              </div>
              <div className="utilisateur">
                <p className="number">2</p>
                <p className="firstname">Jane</p>
                <p className="lastname">Doe</p>
                <p className="phonenumber">06 00 00 00 00</p>
                <p className="role">Administrateur</p>
                <p className="icons">
                  <Link to="/dashboard/users/set-user" className="link-style_set_user">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <i id="trash_icon">
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                </p>
              </div>
              <div className="utilisateur">
                <p className="number">3</p>
                <p className="firstname">John</p>
                <p className="lastname">Doe</p>
                <p className="phonenumber">06 00 00 00 00</p>
                <p className="role">Utilisateur</p>
                <p className="icons">
                  <Link to="/dashboard/users/set-user" className="link-style_set_user">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <i id="trash_icon">
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                </p>
              </div>
              <div className="utilisateur">
                <p className="number">4</p>
                <p className="firstname">Jane</p>
                <p className="lastname">Doe</p>
                <p className="phonenumber">06 00 00 00 00</p>
                <p className="role">Utilisateur</p>
                <p className="icons">
                  <Link to="/dashboard/users/set-user" className="link-style_set_user">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <i id="trash_icon">
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                </p>
              </div>
              <div className="utilisateur user-final">
                <p className="number">5</p>
                <p className="firstname">John</p>
                <p className="lastname">Doe</p>
                <p className="phonenumber">06 00 00 00 00</p>
                <p className="role">Utilisateur</p>
                <p className="icons">
                  <Link to="/dashboard/users/set-user" className="link-style_set_user">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <i id="trash_icon">
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                </p>
              </div>
            </section>
          </section>
        </main>
        <footer className="home_dashboard_footer">
          <Link to="/dashboard" className="link-style">
          <h1 className="home_dash_footer_h1">Retourner sur l'accueil du tableau de bord</h1>
          </Link>
        </footer>
      </section>
    </>
  );
}

export default UsersTable;
