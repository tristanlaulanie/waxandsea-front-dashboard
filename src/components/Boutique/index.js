// REACT IMPORT
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Boutique.css";
import "./BoutiqueResponsive.css";

// FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

function Boutique() {
  return (
    <div className="Boutique">
      <h1 id="main_title">Boutique</h1>
      <h1 id="shop_products_title">NOS PRODUITS EN BOUTIQUE</h1>
      <p className="shop_description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
        tellus eu nulla imperdiet maximus in ac purus. <br></br>
        Vivamus consequat risus in tellus lacinia pulvinar.
      </p>
      <p className="shop_description">
        Suspendisse pellentesque pharetra turpis elementum elementum.
        Suspendisse id pretium mauris. Cras non magna at leo venenatis
        convallis. <br></br>
        Quisque sit amet blandit lectus. Ut quis tincidunt.
      </p>
      <p className="shop_description">
        Donec ac velit euismod, lobortis ante sit amet, malesuada neque. Aliquam
        congue ultrices semper. Suspendisse a magna nec neque <br></br>
        malesuada scelerisque. Nulla fermentum purus nec.
      </p>
      <h3 id="product-order-instruction">
        <i>
          <FontAwesomeIcon icon={faArrowPointer} flip="horizontal" />
        </i>
        Cliquez sur un des produits pour passer votre commande.
        <i id="product-order_cart-icon">
          <FontAwesomeIcon
            className="description_cart-icon add-product-to-cart"
            icon={faCartPlus}
            size="l"
          />
        </i>
      </h3>
      <div className="images-shop">
        <div className="images-grid">
          <div className="article_pic_title">
            <img src="https://picsum.photos/300?random=1" alt="Pic 1"></img>
            <h2>Pochette N°1</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=2" alt="Pic 2"></img>
            <h2>Pochette N°2</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=3" alt="Pic 3"></img>
            <h2>Sac Seau</h2>
            <Link to="/boutique/produit">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=4" alt="Pic 4"></img>
            <h2>Sac de plage</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=5" alt="Pic 5"></img>
            <h2>Sac "Amanda"</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=6" alt="Pic 6"></img>
            <h2>Essuie tout lavable</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=7" alt="Pic 7"></img>
            <h2>Lingettes Demake up</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=8" alt="Pic 8"></img>
            <h2 id="washable-towels">Serviettes hygièniques lavables</h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div class="article_pic_title">
            <img src="https://picsum.photos/300?random=9" alt="Pic 9"></img>
            <h2 id="handbag-organizer">
              Organiseur de <br></br>
              sac à main
            </h2>
            <Link to="/boutique/accessoire">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
        </div>
        <div className="images-flex">
          <div className="article_pic_title">
            <img src="https://picsum.photos/300?random=10" alt="Pic 10"></img>
            <h2>Bustier-Jupe</h2>
            <Link to="/boutique/produit">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
          <div className="article_pic_title">
            <img src="https://picsum.photos/300?random=11" alt="Pic 11"></img>
            <h2>Jupe gitane</h2>
            <Link to="/boutique/produit">
              <i>
                <FontAwesomeIcon
                  className="add-product-to-cart"
                  icon={faCartPlus}
                  size="xl"
                />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boutique;
