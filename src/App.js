import { useState } from "react";
import FormularioSingle from "./componentes/FormularioSingle";
import FormularioBatch from "./componentes/FormularioBatch";
import { criaRegistro } from "./servicos/api-connect";

function App() {
  const [alunos, setAlunos] = useState([]);

  const aoNovoAlunoAdicionado = async (aluno) => {
    setAlunos([...alunos, aluno]);
    const res = await criaRegistro(aluno);
    console.log(res);
  };

  const aoNovoCadastroEmBatch = async (arquivo) => {
    console.log('entrou', arquivo);
  }

  return (
    <div className="App">
      <FormularioSingle aoAlunoCadastrado={(aluno) => aoNovoAlunoAdicionado(aluno)} />
      <FormularioBatch aoCadastroEmBatch={(arquivo) => aoNovoCadastroEmBatch(arquivo)} />
    </div>
  );
}

export default App;
