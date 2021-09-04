import './Footer.css';

function Footer() {
  let getCurrentYear = new Date().getFullYear()
  return (
      <div className="FooterWrapper">
        <div className="LogoContainer">
        <img className="logoPE" src={process.env.PUBLIC_URL + '/logo_pe.png'} alt="Planet express logo. Big spaceship."/>
        </div>
        <div className="ContactInfoContainer">
            Contacto:
            <br></br>
            Dirección: Calle 57 Nueva York, zona Oeste de Manhattan
            <br></br>
            Teléfono: 653 85 13 05
            <br></br>
            Email: planetExpress@gmail.com
        </div>
        <div className="ContactInfoContainer">
          Planet Express©<br></br>{getCurrentYear}
        </div>
      </div>

  );
}

export default Footer;
