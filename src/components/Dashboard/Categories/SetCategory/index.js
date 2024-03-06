import React from "react";
import "./SetCategory.css";
import { Link } from "react-router-dom";

function SetCategory() {
  return (
    <>
      <div className="set-category">
        <body clasname="setCategory_body">
          <div>
            <h1 className="setCategory_title">
              <Link
                to="/dashboard/categories"
                className="setCategory_title_link"
              >
                Retourner au tableau des categories.
              </Link>
            </h1>
          </div>
          <main className="setCategory_main">
            <h2 className="setCategory_main_title">
              Modification d'une catégorie
            </h2>
            <form className="setCategory_form" action="">
              <label for="Nom">Nom de la catégorie</label>
              <input
                type="text"
                name="Nom"
                id="Nom"
                placeholder="Nom de la catégorie"
              />
              <label for="image">Image associée</label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image de la catégorie"
              />
              <button className="setCategory_button" type="submit">EDITER</button>
            </form>
          </main>
        </body>
      </div>
    </>
  );
}

export default SetCategory;
