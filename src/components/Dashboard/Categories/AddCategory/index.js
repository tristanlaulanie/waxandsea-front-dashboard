import React from "react";
import "./AddCategory.css";
import { Link } from "react-router-dom";

function AddCategory() {
    return (
        <>
        <div className="add-category"> 
    <header>
        <Link to="/dashboard/categories">
        <h1>
            Retourner au tableau des categories.
        </h1>
        </Link>
    </header>
    <main>
        <h2>
        Ajout de Catégorie
        </h2>
        <form action="">
            <label htmlFor="Nom">Nom de la catégorie</label>
            <input type="text" name="Nom" id="Nom" placeholder="Nom de la catégorie" />
            <label htmlFor="image">Image associée</label>
            <input type="text" name="image" id="image" placeholder="Image de la catégorie" />
            <button type="submit">
                EDITER
            </button>
        </form>
    </main> 
        </div>
        </> 
    );
}

export default AddCategory;