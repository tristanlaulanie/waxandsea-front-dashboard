// REACT IMPORT
import React from "react";

// CSS
import "./BoutiqueAccessoire.css";
import "./BoutiqueAccessoireResponsive.css";

// FONTAWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function BoutiqueAccessoire() {
  return (
    <div className="BoutiqueAccessoire">
      <h1 id="product_main_title">Accessoire</h1>
      <main id="product_main-container">
        <section id="product_images_description">
          <div id="product_images">
            <img
              id="product_main_image"
              src="https://picsum.photos/400?random=15"
              alt="Pic Product"
            ></img>
            <div id="product_side_images">
              <img
                src="https://picsum.photos/200?random=15"
                alt="side pic"
              ></img>
              <img
                src="https://picsum.photos/200?random=15"
                alt="side pic"
              ></img>
            </div>
          </div>
          <div id="product_name_price_description">
            <h2> Nom de l'accessoire</h2>
            <p id="product_price"> Prix : xx €</p>
            <p id="product_description">
              <div id="product_description_container">
                Description de l'accessoire :<br></br> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum lacinia, lacus ut rutrum accumsan, <br></br>
                lectus dolor eleifend lacus, id finibus ex lorem id urna.
                Integer laoreet vestibulum molestie. <br></br>
                In hac habitasse platea dictumst. Nulla facilisi. Integer nunc
                dolor, sodales eget.
              </div>
            </p>
          </div>
        </section>
        <div id="product_colors_sizes_quantity_cart">
          <section id="product_colors_sizes">
            <div id="product_colors">
              <h3> Couleurs disponibles</h3>
              <div id="product_colors_list">
                <div className="product_color product_color_blue"></div>
                <div className="product_color product_color_yellow"></div>
                <div className="product_color product_color_green"></div>
                <div className="product_color product_color_red"></div>
                <div className="product_color product_color_pink"></div>
                <div className="product_color product_color_purple"></div>
              </div>
            </div>
            <div id="product_sizes">
              <h3>Choisissez la dimension</h3>
              <select name="sizes" id="sizes-select">
                <option id="sizes-select_option" value="choose">
                  Dimensions :
                </option>
                <option value="small">Petit</option>
                <option value="medium">Moyen</option>
                <option value="large">Grand</option>
              </select>
            </div>
          </section>
          <section id="product_quantity">
            <label id="product_quantity_label" for="quantity">
              Quantité :
            </label>
            <input
              id="product_quantity_input"
              type="number"
              name="quantity"
              min="1"
              max="10"
            ></input>
          </section>
          <section id="product_add-to-cart">
            <p>Total : XX €</p>
            <button id="product_add-to-cart_button">
              <i id="">
                <FontAwesomeIcon
                  className="product_add-to-cart_button_icon"
                  icon={faCartPlus}
                  size="l"
                />
              </i>
              Ajouter au panier
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default BoutiqueAccessoire;
