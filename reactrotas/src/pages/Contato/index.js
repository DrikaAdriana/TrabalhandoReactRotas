import { Link } from 'react-router-dom';


function Contato(){
  return(
    <div>
      <h1>Página Contato</h1>
      <span>Contato da empresa (51)99269.XXXX</span> <br/> <br/>
      <Link to='/'>Home</Link> <br/>
      <Link to='/sobre'>Sobre</Link>

    </div>

  )
}
export default Contato;