import React from "react";
import "../styles/contact.css";
import 'bulma/css/bulma.min.css';


function ContactForm() {
  return (
    <div className="section-form">
      <h1>Contactez-moi</h1>
      <p>
        Vous avez une question ou un projet en tête ? N'hésitez pas à me
        contacter.
      </p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
