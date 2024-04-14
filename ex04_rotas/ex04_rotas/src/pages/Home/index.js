import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <h1>HOME</h1>
        <span>Nossa primeira aplicação em REACT</span>
        <br></br>
        <Link to="/sobre">SOBRE</Link>
      </div>
    );
  }
  
  export default Home;