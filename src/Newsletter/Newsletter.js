import React, { useState } from 'react';
import './Newsletter.css';
import MailchimpSubscribe from "react-mailchimp-subscribe"

function Newsletter() {


  return (
    <div className="NewsletterMainDiv">
      <h1 className="NewsletterTitle">Newsletter</h1>
      <h2>Suscríbete a nuestra Newsletter para estar al día de todas las novedades más allá del espacio exterior</h2>
      <img className="Mordisquitos" src="/Mordisquitos.png" alt="Mordisquitos."/>
      <br/>
      <br/>
      <br/>
      <div>Suscribirse <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} /></div>
    </div>
  );
}

export default Newsletter;
