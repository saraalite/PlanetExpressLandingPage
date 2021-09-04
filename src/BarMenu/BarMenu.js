import './BarMenu.css';

function BarMenu() {
  return (
    <div className="BarMenu">
      <div className="flexDiv">
        <a className="NavBarLink" href='#PriceCalculator'>
          <p className="menuText">Calcula el precio de tu paquete</p>
        </a>
        <a className="NavBarLink" href='#Sales'>
          <p className="menuText">Ofertas</p>
        </a>
        <a className="NavBarLink" href='#Newsletter'>
          <p className="menuText">Newsletter</p>
        </a>
        <a className="NavBarLink" href='#Characters'>
          <p className="menuText">Quiénes somos</p>
        </a>
        </div>
    </div>
  );
}

export default BarMenu;
