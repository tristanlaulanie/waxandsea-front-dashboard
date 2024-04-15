import React from "react";
import "./Card-produit.css";

import { Link } from "react-router-dom";

function CardProduit() {
  return (
    <section class="three-cards">
      <div class="first-products-card">
        <img
          src="https://picsum.photos/350?random=22"
          alt="grey neutral card"
        />
        <button>
          <Link className="card_button" to="/boutique/produit">
            <p>Voir le produit</p>
          </Link>
        </button>
      </div>
    </section>
  );
}

export default CardProduit;
