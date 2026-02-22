import React, { useState } from "react";
import "./Donate.scss";

const Donate = ({ isAuthenticated }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="donate">
      <div className="donate__buttons">
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="filipzakrocki@gmail.com" />
          <input
            type="hidden"
            name="item_name"
            value="for server and (self)development, thank you kindly"
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
        </form>
        {!isAuthenticated && (
          <button
            type="button"
            className="donate__warning-btn"
            onClick={() => setModalOpen(true)}
            title="Data save warning"
            aria-label="Data save warning"
          >
            warning
          </button>
        )}
      </div>
      {modalOpen && (
        <div className="donate-modal" role="dialog" aria-labelledby="donate-modal-title">
          <div className="donate-modal__backdrop" onClick={() => setModalOpen(false)} />
          <div className="donate-modal__content">
            <h2 id="donate-modal-title" className="donate-modal__title">
              Hi, and thanks for using the platform
            </h2>
            <p className="donate-modal__text">
              Updates are on the way. I’ll do my best to preserve data stored only in your browser, but the safest way to keep your data is to create an account.
            </p>
            <p className="donate-modal__text">If you’re using the platform without an account:</p>
            <ol className="donate-modal__steps">
              <li>Save to Local (Save menu)</li>
              <li>Create an account and log in (a fake email is fine)</li>
              <li>Once you’re logged in: Load from Local, then Save to Server</li>
            </ol>
            <button
              type="button"
              className="donate-modal__close"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
