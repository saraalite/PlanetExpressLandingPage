import './Sales.css';
import Carrousel from './Carrousel/Carrousel';
import '../Common.css';

function Sales() {

  return (
    <>
      <div className="anchor" id="Sales"></div>
      <div className="SalesWrapper">
        <header>
          <h1 className="Title">Ofertas</h1>
          <h2>Consulta nuestra ofertas. Solo aplicables en días bisiestos.</h2>
          <Carrousel/>
        </header>
      </div>
    </>
  );
}

export default Sales;
