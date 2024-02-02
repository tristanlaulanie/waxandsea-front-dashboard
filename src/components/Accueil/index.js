import React from "react";

// COMPOSANTS
import Description from "./Description";
import Slider from "./Slider";
import CardProduit from "./Card-produit";
import BannierePub from "./Banniere-pub";
import CardShopping from "./Card-shopping";
// CSS
import "./Accueil.css";
import "./AccueilResponsive.css";

function Accueil() {
  return (
    <>
      <div>
        <Slider />
        <Description />
        <container className="container_card_produit">
          <CardProduit />
          <CardProduit />
          <CardProduit />
        </container>
        <container className="banniere_pub">
        <BannierePub/>
        </container>
        <container className="container-card-shopping">
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </container>
        <container className="container-card-shopping">
          <CardShopping />
          <CardShopping />
          <CardShopping />
        </container>
        <container className="container-card-shopping">
          <CardShopping />
          <CardShopping />
        </container>
      </div>
    </>
  );
}

export default Accueil;
