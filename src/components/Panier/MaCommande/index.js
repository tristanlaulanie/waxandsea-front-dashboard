// REACT
import React from "react";

// CSS
import "./MaCommande.css";
import "./MaCommandeResponsive.css";

function MaCommande() {
  return (
    <div className="MaCommande">
      <container id="mon-panier_commande">
        <h3>Ma commande</h3>
        <section id="command_main-section">
          <div id="commande_total-achats">
            <p id="purchases-amout_title">Montant des achats : </p>
            <p>
              <div className="total_purchases total_fees_command">
                Total achats €
              </div>
            </p>
          </div>
          <div id="commande_frais-de-ports">
            <p id="shipping-fees_title">Frais de port : </p>
            <div className="fees_price total_fees_command">Frais de port €</div>
          </div>
          <div id="free-shipping">
            <em>Plus que x euros pour les frais de ports offerts</em>
          </div>
          <span>
            <div id="commande_total">
              <p>Total : </p>
              <p>
                <strong>Total €</strong>
              </p>
            </div>
            <div id="commande_tva">
              <p>TVA</p>
              <p>
                <strong>TVA €</strong>
              </p>
            </div>
          </span>
          <span id="achats_panier_buttons">
            <button>Continuer mes achats</button>
          </span>
        </section>
      </container>
    </div>
  );
}

export default MaCommande;
