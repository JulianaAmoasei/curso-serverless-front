import { useState } from "react";
import FormularioSingle from "./componentes/FormularioSingle";
import { criaRegistro } from "./servicos/api-connect";

function App() {
  const [alunos, setAlunos] = useState([]);

  const aoNovoAlunoAdicionado = async (aluno) => {
    setAlunos([...alunos, aluno]);
    const res = await criaRegistro(aluno);
    return res;
  };

  return (
    <div className="App">
      <FormularioSingle aoAlunoCadastrado={(aluno) => aoNovoAlunoAdicionado(aluno)} />
    </div>
  );
}

export default App;
