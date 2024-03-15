import React from 'react';
import './MaCommande.css';

function MaCommande() {
    return (
        <div className="MaCommande">
            <container id="mon-panier_commande">
          <h3>Ma commande</h3>
          <section>
            <div id="commande_total-achats">
              <p>Montant des achats : </p>
              <p>
                <strong>Total achats €</strong>
              </p>
            </div>
            <div id="commande_frais-de-ports">
              <p>Frais de port : </p>
              <p>
                <strong>Frais de port €</strong>
              </p>
            </div>
            <em>Plus que x euros pour les frais de ports offerts</em>
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
              <button>Valider mon panier</button>
            </span>
          </section>
        </container>
        </div>
    );
}

export default MaCommande;