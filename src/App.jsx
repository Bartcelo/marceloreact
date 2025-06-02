
import './App.css';
import MenuSuperior from '../src/componentes/menusuperior';
import CentralTopo from './componentes/centraltopo';
import Sobre from "./componentes/sobre";
import Projetos from './componentes/projetos';
import Contatos from './componentes/contatos';
import Rodape from './componentes/rodape';
import Myskills from './componentes/myskills';



function App() {


  return (
    <div className='bg-sky-900' >

      <MenuSuperior />
      {/* <CentralTopo /> */}
      <Sobre />
      <Myskills />
      <Projetos />
      <Contatos />
      <Rodape />
    </div>
  )
}

export default App
