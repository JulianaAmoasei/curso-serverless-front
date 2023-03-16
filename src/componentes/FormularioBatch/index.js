import { useState } from "react";
import Botao from "../Botao";
import CampoArquivo from "../CampoArquivo";
import { enviaArquivo } from "../../servicos/api-connect";
import "./FormularioBatch.css";

const FormularioBatch = (props) => {

  const [arquivo, setArquivo] = useState(null)

  const aoSalvar = (evento) => {
    evento.preventDefault();
    enviaArquivo(arquivo)
  };
  
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Selecione um arquivo para fazer o cadastro em lote</h2>
        <CampoArquivo
          obrigatorio={true}
          label='Selecione apenas arquivos do tipo CSV'
          type='file'
          id='form-arquivo'
          arquivoSelecionado={(caminhoArquivo) => setArquivo({ value: caminhoArquivo })}
        />
        <Botao id='form-botao'>Criar registros em lote</Botao>
      </form>
    </section>
  );
};

export default FormularioBatch;
