import React from "react";
import "./Articles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className="articles">
      <body className="articles_body">
        <section id="title">
          <h2>Table des Articles</h2>
          <Link to="/dashboard/articles/add" >
            <p className="add_article">
              <FontAwesomeIcon icon={faCirclePlus} />
              Ajouter un article
            </p>
          </Link>
        </section>

        <section className="articles_section">
          <div className="categories_tables">
            <h3 className="articles_title_name">Id</h3>
            <h3 className="articles_title_name">Code-Barre</h3>
            <h3 className="articles_title_name">ArticleName</h3>
            <h3 className="articles_title_name">Image(s)</h3>
            <h3 className="articles_title_name">Vignette(s)</h3>
            <h3 className="articles_title_name">Stock</h3>
            <h3 className="articles_title_name">Description</h3>
            <h3 className="articles_title_name">Prix d'Achat</h3>
            <h3 className="articles_title_name">Prix de Vente HT</h3>
            <h3 className="articles_title_name">Prix de Vente TTC</h3>
            <h3 className="articles_title_name">TVA</h3>
            <p className="articles_set_icons"></p>
          </div>
          <div className="categories_tables">
            <h3 className="articles_title_name">604</h3>
            <h3 className="articles_title_name">894yyyhy</h3>
            <h3 className="articles_title_name">Chaussettes</h3>
            <h3 className="articles_title_name">Socks.jpg</h3>
            <h3 className="articles_title_name">Socks.png</h3>
            <h3 className="articles_title_name">145</h3>
            <h3 className="articles_title_name">Chaussettes de couleur bleu</h3>
            <h3 className="articles_title_name">10€</h3>
            <h3 className="articles_title_name">20€</h3>
            <h3 className="articles_title_name">22€</h3>
            <h3 className="articles_title_name">10</h3>
            <p className="articles_set_icons">
              <Link to="/dashboard/articles/set" className="articles_link_icons">
                <FontAwesomeIcon icon={faPenToSquare} className="pen-square" />
              </Link>
              <FontAwesomeIcon icon={faTrash} className="trash" />
            </p>
          </div>
          <div className="categories_tables">
            <h3 className="articles_title_name">605</h3>
            <h3 className="articles_title_name">Th9784hy498</h3>
            <h3 className="articles_title_name">Tee-Shirts</h3>
            <h3 className="articles_title_name">Tee-Shirts.jpg</h3>
            <h3 className="articles_title_name">Tee-Shirts.png</h3>
            <h3 className="articles_title_name">203</h3>
            <h3 className="articles_title_name">Tee-Shirts de couleur rouge</h3>
            <h3 className="articles_title_name">15€</h3>
            <h3 className="articles_title_name">30€</h3>
            <h3 className="articles_title_name">36€</h3>
            <h3 className="articles_title_name">20</h3>
            <p className="articles_set_icons">
              <Link to="/dashboard/articles/set" className="articles_link_icons">
                <FontAwesomeIcon icon={faPenToSquare} className="pen-square" />
              </Link>
              <FontAwesomeIcon icon={faTrash} className="trash" />
            </p>
          </div>
          <div className="categories_tables">
            <h3 className="articles_title_name">606</h3>
            <h3 className="articles_title_name">8947-48</h3>
            <h3 className="articles_title_name">Pull</h3>
            <h3 className="articles_title_name">Pull.jpg</h3>
            <h3 className="articles_title_name">Pull.png</h3>
            <h3 className="articles_title_name">203</h3>
            <h3 className="articles_title_name">Pull de couleur vert</h3>
            <h3 className="articles_title_name">7€</h3>
            <h3 className="articles_title_name">15€</h3>
            <h3 className="articles_title_name">18€</h3>
            <h3 className="articles_title_name">20</h3>
            <p className="articles_set_icons">
              <Link to="/dashboard/articles/set" className="articles_link_icons">
                <FontAwesomeIcon icon={faPenToSquare} className="pen-square" />
              </Link>
              <FontAwesomeIcon icon={faTrash} className="trash" />
            </p>
          </div>
        </section>
        <footer className="articles_footer">
          <h1>
            <Link to="/dashboard" className="link-style-footer">
              Retourner sur l'accueil du tableau de bord
            </Link>
          </h1>
        </footer>
      </body>
    </div>
  );
}

export default Articles;
