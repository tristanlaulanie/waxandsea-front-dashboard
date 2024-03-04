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
        <Link to="/dashboard" className="users_link-style">
          <header className="home_header">
            <h1 className="home_header_h1">
              Retourner sur l'accueil du tableau de bord.
            </h1>
          </header>
        </Link>
        <main className="main_container">
          <section id="title">
            <h2 className="users_table_title">Table des utilisateurs</h2>
            <div className="add-user_div">
            <Link to="/dashboard/users/add-user" className="link-style-add_user">
              <i >
                <FontAwesomeIcon icon={faCirclePlus} id="penSquare_icon_users"/>
              </i>
                <p>Ajouter un utilisateur</p>
            </Link>
            </div>
          </section>
          <section className="users_table">
            <div className="identifiants">
              <div id="id_box">
                <h3 id="id_title">ID</h3>
              </div>
              <div id="firstname_box">
                <h3 id="firstname_id">Prénom</h3>
              </div>
              <div id="lastname_box">
                <h3 id="name_id">Nom</h3>
              </div>
              <div id="phonenumber_box">
                <h3 id="phonenumber-title">Téléphone</h3>
              </div>
              <div id="role_box">
                <h3 id="role">Rôle</h3>
              </div>
              <div id="setuser_box">
                <h4 id="set_user">
                  Modifier <br></br> / Supprimer
                </h4>
              </div>
            </div>
          </section>
          <section className="users">
            <div className="utilisateur">
              <p className="number">
                <h1>1</h1>
              </p>
              <p className="firstname">
                <h1>John</h1>
              </p>
              <p className="lastname"> 
                <h1>Doe</h1>
              </p>
              <p className="phonenumber">
                <h1>06 00 00 00 00</h1>
              </p>
              <p className="role">
                <h1>Admin</h1>
              </p>
              <p className="users_set_icons">
                <Link
                  to="/dashboard/users/set-user"
                  className="link-style_set_user"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <i id="trash_icon">
                  <FontAwesomeIcon icon={faTrash} />
                </i>
              </p>
            </div>
            <div className="utilisateur">
              <p className="number">
                <h1>2</h1> 
              </p>
              <p className="firstname">
                <h1>Jane</h1>
              </p>
              <p className="lastname">
                <h1>Doe</h1>
              </p>
              <p className="phonenumber">
                <h1>06 00 00 00 00</h1>
              </p>
              <p className="role">
                <h1>Admin</h1>
              </p>
              <p className="users_set_icons">
                <Link
                  to="/dashboard/users/set-user"
                  className="link-style_set_user"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <i id="trash_icon">
                  <FontAwesomeIcon icon={faTrash} />
                </i>
              </p>
            </div>
            <div className="utilisateur">
              <p className="number">
                <h1>3</h1>
              </p>
              <p className="firstname">
                <h1>John</h1>
              </p>
              <p className="lastname">
                <h1>Doe</h1>
              </p>
              <p className="phonenumber">
                <h1>06 00 00 00 00</h1>
              </p>
              <p className="role">User</p>
              <p className="users_set_icons">
                <Link
                  to="/dashboard/users/set-user"
                  className="link-style_set_user"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <i id="trash_icon">
                  <FontAwesomeIcon icon={faTrash} />
                </i>
              </p>
            </div>
            <div className="utilisateur">
              <p className="number">
                <h1>4</h1>
              </p>
              <p className="firstname">
                <h1>Jane</h1>
              </p>
              <p className="lastname">
                <h1>Doe</h1>
              </p>
              <p className="phonenumber">
                <h1>06 00 00 00 00</h1>
              </p>
              <p className="role">
                <h1>User</h1>
              </p>
              <p className="users_set_icons">
                <Link
                  to="/dashboard/users/set-user"
                  className="link-style_set_user"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <i id="trash_icon">
                  <FontAwesomeIcon icon={faTrash} />
                </i>
              </p>
            </div>
            <div className="utilisateur user-final">
              <p className="number">
                <h1>5</h1>
              </p>
              <p className="firstname">
                <h1>John</h1>
              </p>
              <p className="lastname">
                <h1>Doe</h1>
              </p>
              <p className="phonenumber">
                <h1>06 00 00 00 00</h1>
              </p>
              <p className="role">
                <h1>User</h1>
              </p>
              <p className="users_set_icons">
                <Link
                  to="/dashboard/users/set-user"
                  className="link-style_set_user"
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
                <i id="trash_icon">
                  <FontAwesomeIcon icon={faTrash} />
                </i>
              </p>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export default UsersTable;
