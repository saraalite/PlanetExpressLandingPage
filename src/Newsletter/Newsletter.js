import React, {useState, useEffect} from 'react';
import './Newsletter.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import '../Common.css';

function Newsletter() {

  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const CustomForm = ({ status, message, onValidated }) => {

    let submitEmail;
    const submit = () => {
      setEmail(submitEmail.value);
      return submitEmail.value &&
        onValidated({
          EMAIL: submitEmail.value,
        });
    }

    useEffect(() => {
      setIsSuccess(status ==="success")
    }, [status]);
  
    return (
      <div>
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      <input
        className="CustomForm"
        ref={node => (submitEmail = node)}
        type="email"
        placeholder="Tu email"
      />
      <br></br>
      <button className="SubmitButton"onClick={submit}>
        ¡Suscribirme!
      </button>
      </div>
    );
  };


  return (
    <>
    <div className="anchor" id="Newsletter"></div>
      <div className="NewsletterMainDiv">
        <h1 className="Title">Newsletter</h1>
        <h2 className="PlainText">Suscríbete a nuestra Newsletter para estar al día de todas las novedades más allá del espacio exterior</h2>
        <img className="Mordisquitos" src="/Mordisquitos.png" alt="Mordisquitos."/>
        <br/>
        <br/>
        <br/>
        <MailchimpSubscribe
          url={process.env.REACT_APP_MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
        <div className="Message">
        { isSuccess && `Tu email ${email} se ha suscrito correctamente.` }
        </div>
    </div>
    </>
  );
}

export default Newsletter;
