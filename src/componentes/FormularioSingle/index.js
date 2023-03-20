import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import "./FormularioSingle.css";

const defaultState = { value: "", error: true };

const FormularioSingle = (props) => {
  const [nome, setNome] = useState(defaultState);
  const [matricula, setMatricula] = useState(defaultState);
  const [mostraErro, setMostraErro] = useState(false);

  const aoSalvar = (evento) => {
    evento.preventDefault();
    setMostraErro(true);
    if (formValido()) {
      props.aoAlunoCadastrado({
        nome: nome.value,
        matricula: matricula.value,
      });
      setNome(defaultState);
      setMatricula(defaultState);
      setMostraErro(false);
    }
  };

  const formValido = () => {
    console.log(nome.error, matricula.error);
    return !nome.error && !matricula.error;
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para cadastrar estudante</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome'
          valor={nome.value}
          aoAlterado={(valor, erro) => setNome({ value: valor, error: erro })}
          id='form-nome'
          mostraErro={mostraErro}
          mensagemErro='O campo nome deve ser preenchido'
        />
        <CampoTexto
          obrigatorio={true}
          label='matricula'
          placeholder='Digite a matricula'
          valor={matricula.value}
          aoAlterado={(valor, erro) => setMatricula({ value: valor, error: erro })}
          id='form-email'
          mostraErro={mostraErro}
          mensagemErro='O campo matrícula deve ser preenchido'
        />
        <Botao id='form-botao'>Criar registro de estudante</Botao>
      </form>
    </section>
  );
};

export default FormularioSingle;
