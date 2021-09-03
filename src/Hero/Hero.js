import './Hero.css';

function Hero() {
  return (
    <div className="Hero">
      <header>
        <h1 className="HeroTitle" >PLANET EXPRESS</h1>
        <h2>Envío intergaláctico de todo tipo de mercancía</h2>
        <img className="logo_pe" src="/logo_pe.png" alt="Planet express logo. Big spaceship."/>
      </header>
    </div>
  );
}

export default Hero;
