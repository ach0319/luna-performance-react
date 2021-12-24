import React, { useState } from "react";
import "../Shop/Shop.css";
import AirFresheners from "../Images/AirFresheners.jpeg";
import image3 from "../Images/image3.png";
import lunaperformancesweathirt from "../Images/lunaperformancesweathirt.jpeg";
import lunaperformanceshirt from "../Images/lunaperformanceshirt.jpeg";

function Shop() {
  return (
    <div className="shop">
      <div
        className="top-shop"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center 25px",
          backgroundColor: "#0d0106",
        }}
      >
        <h1>LUNA PERFORMANCE SHOP</h1>
      </div>
      <div className="container content-section">
        <div className="shop-items">
          <div className="shop-item">
            <span className="shop-item-title">Air Fresheners</span>
            <img
              src={AirFresheners}
              alt="pic of air fresheners"
              style={{
                width: "200px",
                height: "349px",
              }}
            ></img>
            <div class="shop-item-details">
              <p class="shop-item-price">$5.00</p>

              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
              >
                <input type="hidden" name="cmd" value="_cart" />
                <input
                  type="hidden"
                  name="business"
                  value="lunaperformancenc@gmail.com"
                />
                <input type="hidden" name="lc" value="US" />
                <input type="hidden" name="item_name" value="Air Fresheners" />
                <input type="hidden" name="amount" value="5.00" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="add" value="1" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest"
                />
                <table>
                  <tr>
                    <td>
                      <input type="hidden" name="on0" value="Scents" />
                      Scents
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <select name="os0">
                        <option value="New Car">New Car </option>
                        <option value="Eucalyptus">Eucalyptus </option>
                        <option value="Grapefruit">Grapefruit </option>
                        <option value="Cinnamon Leaf">Cinnamon Leaf </option>
                        <option value="Tea Tree">Tea Tree </option>
                        <option value="Sea Breeze">Sea Breeze </option>
                        <option value="Forrest">Forrest </option>
                        <option value="Pineapple">Pineapple </option>
                        <option value="Coconut">Coconut </option>
                        <option value="Summer Rose">Summer Rose </option>
                      </select>{" "}
                    </td>
                  </tr>
                </table>
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                  className="paypal-button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
          <div className="shop-item one">
            <span className="shop-item-title">Sweatshirts</span>
            <img
              src={lunaperformancesweathirt}
              alt="pic of air fresheners"
            ></img>
            <div class="shop-item-details">
              <p class="shop-item-price">$45.00</p>
              <p>*Black with White Lettering</p>
              <p>**Colors may vary</p>

              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="R97TNALKCC5ZY"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
          <div className="shop-item two">
            <span className="shop-item-title">T-Shirt</span>
            <img src={lunaperformanceshirt} alt="pic of air fresheners"></img>
            <div class="shop-item-details">
              <p class="shop-item-price">$25.00</p>
              <p>*Black with White Lettering</p>
              <p>**Colors may vary</p>

              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="ZTUL7298T4G9Q"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
