import React, { useState } from "react";
import "../Shop/Shop.css";
import NewAirFresheners from "../Images/NewAirFresheners.jpg";
import image3 from "../Images/image3.png";
import lunaperformancesweathirt from "../Images/lunaperformancesweathirt.jpeg";
import lunaperformanceshirt from "../Images/lunaperformanceshirt.jpeg";
import Ctumbler from "../Images/Ctumbler.jpeg";
import DoggieSweatshirt from "../Images/DoggieSweatshirt.jpg";

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
        <h1>LUNA PERFORMANCE & COATINGS SHOP</h1>
      </div>
      <div className="container content-section">
        <div className="shop-items">
          <div className="shop-item zero">
            <span className="shop-item-title">Air Fresheners</span>
            <img
              src={NewAirFresheners}
              alt="pic of air fresheners"
              style={{
                width: "273px",
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
                </table><input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                  border="0"
                  name="submit"
                  alt="PayPal - The safer, easier way to pay online!"
                  className="paypal-button"
                /><img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                /></form>
            </div>
          </div>
          <div className="shop-item one">
            <span className="shop-item-title">Sweatshirts</span>
            <img
              src={lunaperformancesweathirt}
              alt="pic luna performance sweatshirt"
              style={{
                width: "250px",
            
              }}
            ></img>
            <div class="shop-item-details">
              <p class="shop-item-price">$45.00</p>
              <p>*Black with White Lettering</p>
              <p>**Colors may vary</p>

              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                  <input type="hidden" name="cmd" value="_s-xclick"/>
                  <input type="hidden" name="hosted_button_id" value="EVHFSDNA9F8Z6"/>
                <table>
                  <tr><td><input type="hidden" name="on0" value="Child Sizes:"/>Child Sizes:</td></tr><tr><td><select name="os0">
	<option value="Child-1T">Child-1T </option>
	<option value="Child-2T">Child-2T </option>
	<option value="Child-3T">Child-3T </option>
	<option value="Child-4T">Child-4T </option>
	<option value="Child-5T">Child-5T </option>
                </select> </td></tr>
                <tr><td><input type="hidden" name="on1" value="Adult Sizes:"/>Adult Sizes:</td></tr><tr><td><select name="os1">
	            <option value="Adult-Small">Adult-Small </option>
	            <option value="Adult-Medium">Adult-Medium </option>
	            <option value="Adult-Large">Adult-Large </option>
	            <option value="Adult-XL">Adult-XL </option>
	            <option value="Adult-2XL">Adult-2XL </option>
	            <option value="Adult-3XL">Adult-3XL </option>
	            <option value="Adult-4XL">Adult-4XL </option>
	            <option value="Adult-5XL">Adult-5XL </option>
              </select> </td></tr>
                </table>
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" className="paypal-button" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
              </form>
            </div>
          </div>
          <div className="shop-item two">
            <span className="shop-item-title">T-Shirt</span>
            <img src={lunaperformanceshirt} alt="pic luna performance shirt"
            style={{
              width: "250px",

            }}></img>
            <div class="shop-item-details">
              <p class="shop-item-price">$25.00</p>
              <p>*Black with White Lettering</p>
              <p>**Colors may vary</p>
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="3MQCGPYB3SLKQ"/>
<table>
<tr><td><input type="hidden" name="on0" value="Child Sizes:"/>Child Sizes:</td></tr><tr><td><select name="os0">
	<option value="Child-1T">Child-1T </option>
	<option value="Child-2T">Child-2T </option>
	<option value="Child-3T">Child-3T </option>
	<option value="Child-4T">Child-4T </option>
	<option value="Child-5T">Child-5T </option>
</select> </td></tr>
<tr><td><input type="hidden" name="on1" value="Adult Sizes:"/>Adult Sizes:</td></tr><tr><td><select name="os1">
	<option value="Adult-Small">Adult-Small </option>
	<option value="Adult-Medium">Adult-Medium </option>
	<option value="Adult-Large">Adult-Large </option>
	<option value="Adult-XL">Adult-XL </option>
	<option value="Adult-2XL">Adult-2XL </option>
	<option value="Adult-3XL">Adult-3XL </option>
	<option value="Adult-4XL">Adult-4XL </option>
	<option value="Adult-5XL">Adult-5XL </option>
</select> </td></tr>
</table>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" className="paypal-button" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>

              
            </div>
          </div>
          <div className="shop-item three">
            <span className="shop-item-title">Tumbler</span>
            <img
              src={Ctumbler}
              alt="pic of luna performance tumbler"
              style={{
                width: "200px",
                height: "705px",
              }}
            ></img>
            <div class="shop-item-details">
              <p class="shop-item-price">$30.00-$45.00</p>
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="VKXPJK5AQ3K6E"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sizes"/>Sizes</td></tr><tr><td><select name="os0">
	<option value="30 ounce">30 ounce $45.00 USD</option>
	<option value="20 ounce">20 ounce $30.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" className="paypal-button" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>


            </div>
          </div>
          <div className="shop-item four">
            <span className="shop-item-title">Doggie Sweatshirt</span>
              <img
                src={DoggieSweatshirt}
                alt="pic dog in luna performance sweatshirt"
                className= "item-image"
                style={{
                width: "250px",
               
                
              }}
            ></img>
            <div class="shop-item-details">
              <p class="shop-item-price">$45.00</p>
              <p>*Black with White Lettering</p>
              <p>**Colors may vary</p>
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="DYVW25SPFU2TU"/>
                  <table>
<tr><td><input type="hidden" name="on0" value="Sizes"/>Sizes</td></tr><tr><td><select name="os0">
	<option value="XS">XS </option>
	<option value="SM">SM </option>
	<option value="MD">MD </option>
	<option value="LG">LG </option>
	<option value="XL">XL </option>
	<option value="2XL">2XL </option>
	<option value="3XL">3XL </option>
	<option value="4XL">4XL </option>
	<option value="5XL">5XL </option>
	<option value="6XL">6XL </option>
</select> </td></tr>
                  </table>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" className="paypal-button" alt="PayPal - The safer, easier way to pay online!"/>
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
              </form>
            </div>
            </div>
            </div>
          </div>
        </div>
  );
}

export default Shop;
