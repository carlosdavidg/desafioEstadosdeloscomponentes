import { useState } from "react";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Inputs from "./components/Inputs.jsx";


function App() {
  const [estadoUsuario, setEstadoUsuario] = useState('');
  const [estadoPassword, setEstadoPassword] = useState('');
  const RenderBoton = () => {if (estadoUsuario === 'usuariovalido' && estadoPassword === '252525'){
    return <Button></Button>
  }

}
  return (
    <div className="App">
      <Header titulo="Desafio Estado de los componentes y eventos React"></Header>
      <Inputs
          estadoUsuario={estadoUsuario}
          setEstadoUsuario={setEstadoUsuario}
          estadoPassword={estadoPassword}
          setEstadoPassword={setEstadoPassword}
        ></Inputs>
        <RenderBoton></RenderBoton>

    </div>
  );
}

export default App;
