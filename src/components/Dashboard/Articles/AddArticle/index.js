import React from "react";
import "./AddArticle.css";
import { Link } from "react-router-dom";

function AddArticle() {
  return (
    <div className="add-article">
      <body className="addArticle_body">
        <header>
          <h1 className="addArticle_dashboard_link">
            <Link to="/dashboard/articles" className="link-style">
              Retourner à la table des articles.
            </Link>
          </h1>
        </header>
        <main className="addArticle_main_container">
          <h2 className="addArticle_title">Ajouter un article</h2>
          <form className="addArticle_form" action="">
            <label for="Référence">Référence</label>
            <input
              type="text"
              name="Référence"
              id="Référence"
              placeholder="Référence de l'article"
            />
            <label for="Nom_article">Nom de l'article</label>
            <input
              type="text"
              name="Nom_article"
              id="Nom_article"
              placeholder="Nom de l'article"
            />
            <label for="Image">Image</label>
            <input
              type="text"
              name="Image"
              id="Image"
              placeholder="Image de l'article"
            />
            <label for="Miniature">Rôle</label>
            <input
              type="text"
              name="Miniature"
              id="Miniature"
              placeholder="Miniature de l'article"
            />
            <label for="Quantité">Quantité en stock</label>
            <input
              type="text"
              name="Quantité"
              id="Quantité"
              placeholder="Quantité d'articles en stock"
            />
            <label for="Description">Quantité en stock</label>
            <input
              type="text"
              name="Description"
              id="Description"
              placeholder="Description de l'article"
            />
            <label for="Prix d'achat">Prix d'achat</label>
            <input
              type="text"
              name="Prix d'achat"
              id="Prix d'achat"
              placeholder="Prix d'achat de l'article"
            />
            <label for="Prix de vente Hors Taxe">
              Prix de vente hors taxe.
            </label>
            <input
              type="text"
              name="Prix de vente Hors Taxe"
              id="Prix de vente Hors Taxe"
              placeholder="Prix de vente hors taxe de l'article"
            />
            <label for="Taux de TVA">Taux de TVA</label>
            <input
              type="text"
              name="Taux de TVA"
              id="Taux de TVA"
              placeholder="Taux de TVA de l'article"
            />
            <button className="addArticle_button" type="submit">
              ENREGISTRER
            </button>
          </form>
        </main>
      </body>
    </div>
  );
}

export default AddArticle;
