import React from "react";
import "./Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <body className="categories_body">
        <section id="title">
          <h2>Table des Catégories</h2>
          <i className="fa-solid fa-pen-to-square"></i>
        </section>

        <section className="categories_section">
          <div className="categories_tables">
            <h3 className="categories_title_info">Id</h3>
            <h3 className="categories_title_info">Catégorie</h3>
            <h3 className="categories_title_info">image</h3>
            <p className="categories_set_icons"></p>
          </div>
          <div className="categories_tables">
            <h3 className="categories_title_info">20</h3>
            <h3 className="categories_title_info">Homme</h3>
            <h3 className="categories_title_info">Man</h3>
            <p className="categories_set_icons">
              <Link to="/dashboard/categories/set">
                <FontAwesomeIcon icon={faPenSquare} className="pen-square" />
              </Link>
              <FontAwesomeIcon icon={faTrash} className="trash" />
            </p>
          </div>
          <div className="categories_tables">
            <h3 className="categories_title_info">21</h3>
            <h3 className="categories_title_info">Femme</h3>
            <h3 className="categories_title_info">Woman</h3>
            <p className="categories_set_icons">
              <Link to="/dashboard/categories/set">
                <FontAwesomeIcon icon={faPenSquare} className="pen-square" />
              </Link>
              <FontAwesomeIcon icon={faTrash} className="trash" />
            </p>
          </div>
          <div className="categories_tables">
            <h3 className="categories_title_info">22</h3>
            <h3 className="categories_title_info">Enfants</h3>
            <h3 className="categories_title_info">Children</h3>
            <p className="categories_set_icons">
              <Link to="/dashboard/categories/set">
                <FontAwesomeIcon icon={faPenSquare} className="pen-square" />
              </Link>
              <FontAwesomeIcon icon={faTrash} className="trash" />
            </p>
          </div>
        </section>
        <footer className="categories_footer">
          <h1>
            <Link to="/dashboard" className="categories_link-style">
              Retourner sur l'accueil du tableau de bord
            </Link>
          </h1>
        </footer>
      </body>
    </>
  );
}

export default Categories;
