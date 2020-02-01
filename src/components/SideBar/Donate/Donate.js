import React from "react";
import "./Donate.scss";

const Donate = () => {
  return (
    <div className="donate">
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="filipzakrocki@gmail.com" />
        <input
          type="hidden"
          name="item_name"
          value="for server and development"
        />
        <input type="hidden" name="currency_code" value="EUR" />
        <input
          className="logo"
          type="image"
          src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png"
          border="0"
          name="submit"
          title="PayPal - Thanks for the support!"
          alt="Donate with PayPal button"
        />

        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_IE/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
};

export default Donate;
