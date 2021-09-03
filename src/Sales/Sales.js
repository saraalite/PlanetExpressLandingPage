import './Sales.css';
import Carrousel from './Carrousel/Carrousel';

function Sales() {

  return (
    <div className="SalesWrapper">
      <header>
        <h1 className="SalesTitle">Ofertas</h1>
        <Carrousel/>
      </header>
    </div>
  );
}

export default Sales;
