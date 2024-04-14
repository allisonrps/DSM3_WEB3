import { Link } from 'react-router-dom'

function Error(){
return (
    <div>
     <h1>ERRO! PÁGINA INEXISTENTE</h1>
     <span>VOLTE A PÁGINA HOME:</span>
     <Link to="/">HOME</Link>
     </div>
   )
}

export default Error;