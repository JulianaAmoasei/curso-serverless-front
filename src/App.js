import { useState } from "react";
import Formulario from "./componentes/Formulario";

function App() {

  const [alunos, setAlunos] = useState([]);

  const aoNovoAlunoAdicionado = (aluno) => {
    setAlunos([...alunos, aluno]);
    console.log('alunos', alunos);
  };

  return (
    <div className='App'>
      <Formulario
        aoAlunoCadastrado={(aluno) =>
          aoNovoAlunoAdicionado(aluno)
        }
      />
    </div>
  );
}

export default App;
