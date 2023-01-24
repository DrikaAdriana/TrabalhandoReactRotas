import { Link } from 'react-router-dom'

function Erro(){
  return(
    <div>
      <h2>Ops!!! Página não encontrada</h2>

      <span>Encontramos estas páginas aqui:</span><br/>
      <Link to="/">Home</Link><br/>
      <Link to="sobre">Sobre</Link><br/>
      <Link to="contato">Contato</Link> 
    </div>
  )
}
export default Erro;