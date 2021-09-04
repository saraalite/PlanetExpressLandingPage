import './Hero.css';
import '../Common.css';

function Hero() {
  return (
    <div className="Hero" id="Hero">
      <header>
        <h1 className="Title" >PLANET EXPRESS</h1>
        <h2>Envío intergaláctico de todo tipo de mercancía</h2>
        <img className="logo_pe" src={process.env.PUBLIC_URL + '/logo_pe.png'} alt="Planet express logo. Big spaceship."/>
      </header>
    </div>
  );
}

export default Hero;
