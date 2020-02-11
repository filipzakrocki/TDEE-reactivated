import React from "react";
import "./Faq.scss";

const Faq = props => {
  const { toggleFaq } = props;

  return (
    <div className="faq">
      <div className="textContent">
        <div className="textWrapper">
          <h1>Instructions and FAQ</h1>
          <div className="questionWrapper">
            <div className="question">
              <h4>Lorem Ipsum</h4>
              <p>
                Nullam a lectus velit. Quisque convallis eros odio, vitae
                aliquam lectus molestie vitae. Nulla egestas at risus sit amet
                tristique. Phasellus urna augue, viverra vitae dui et, tincidunt
                lobortis turpis. Vivamus tristique elementum urna at iaculis.
                Nunc fringilla velit urna, a auctor orci ultricies non. Fusce ac
                mi sapien. Sed erat turpis, egestas quis facilisis eleifend,
                aliquet sed nisi. Vivamus gravida felis lacus, quis congue felis
                feugiat ac. Aliquam pulvinar dictum quam, a porttitor nisi
                consectetur quis. Nam pellentesque congue nunc et bibendum. In
                sodales metus urna, dapibus laoreet nibh porttitor vel. Maecenas
                cursus et libero vitae facilisis.
              </p>
            </div>
            <div className="question">
              <h4>Lorem Ipsum</h4>
              <p>
                Nullam a lectus velit. Quisque convallis eros odio, vitae
                aliquam lectus molestie vitae. Nulla egestas at risus sit amet
                tristique. Phasellus urna augue, viverra vitae dui et, tincidunt
                lobortis turpis. Vivamus tristique elementum urna at iaculis.
                Nunc fringilla velit urna, a auctor orci ultricies non. Fusce ac
                mi sapien. Sed erat turpis, egestas quis facilisis eleifend,
                aliquet sed nisi. Vivamus gravida felis lacus, quis congue felis
                feugiat ac. Aliquam pulvinar dictum quam, a porttitor nisi
                consectetur quis. Nam pellentesque congue nunc et bibendum. In
                sodales metus urna, dapibus laoreet nibh porttitor vel. Maecenas
                cursus et libero vitae facilisis.
              </p>
            </div>
            <div className="question">
              <h4>Lorem Ipsum</h4>
              <p>
                Nullam a lectus velit. Quisque convallis eros odio, vitae
                aliquam lectus molestie vitae. Nulla egestas at risus sit amet
                tristique. Phasellus urna augue, viverra vitae dui et, tincidunt
                lobortis turpis. Vivamus tristique elementum urna at iaculis.
                Nunc fringilla velit urna, a auctor orci ultricies non. Fusce ac
                mi sapien. Sed erat turpis, egestas quis facilisis eleifend,
                aliquet sed nisi. Vivamus gravida felis lacus, quis congue felis
                feugiat ac. Aliquam pulvinar dictum quam, a porttitor nisi
                consectetur quis. Nam pellentesque congue nunc et bibendum. In
                sodales metus urna, dapibus laoreet nibh porttitor vel. Maecenas
                cursus et libero vitae facilisis.
              </p>
            </div>
            <div className="question">
              <h4>Lorem Ipsum</h4>
              <p>
                Nullam a lectus velit. Quisque convallis eros odio, vitae
                aliquam lectus molestie vitae. Nulla egestas at risus sit amet
                tristique. Phasellus urna augue, viverra vitae dui et, tincidunt
                lobortis turpis. Vivamus tristique elementum urna at iaculis.
              </p>
            </div>
            <div className="question">
              <h4>Lorem Ipsum</h4>
              <p>
                Nullam a lectus velit. Quisque convallis eros odio, vitae
                aliquam lectus molestie vitae. Nulla egestas at risus sit amet
                tristique. Phasellus urna augue, viverra vitae dui et, tincidunt
                lobortis turpis. Vivamus tristique elementum urna at iaculis.
              </p>
            </div>
            <div className="question">
              <h4>Lorem Ipsum</h4>
              <p>
                Nullam a lectus velit. Quisque convallis eros odio, vitae
                aliquam lectus molestie vitae. Nulla egestas at risus sit amet
                tristique. Phasellus urna augue, viverra vitae dui et, tincidunt
                lobortis turpis. Vivamus tristique elementum urna at iaculis.
              </p>
            </div>
            <div className="question">
              <h4>Lorem Ipsum</h4>
              <p>
                Nullam a lectus velit. Quisque convallis eros odio, vitae
                aliquam lectus molestie vitae. Nulla egestas at risus sit amet
                tristique. Phasellus urna augue, viverra vitae dui et, tincidunt
                lobortis turpis. Vivamus tristique elementum urna at iaculis.
              </p>
            </div>
          </div>
        </div>
        <div className="buttonWrapper">
          <button onClick={toggleFaq}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
