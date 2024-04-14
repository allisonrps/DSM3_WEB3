import { Link } from 'react-router-dom';
import './style.css';

function Header() {
     return (
        <header>
            <h2>FATEC FRANCA</h2>
              <div className="menu">
               <Link to='/'>HOME</Link>
               <Link to='/sobre'>SOBRE</Link>
              </div>
        </header>
     );
}

export default Header;