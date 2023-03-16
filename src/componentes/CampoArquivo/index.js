import "./CampoArquivo.css";

const CampoArquivo = (props) => {

  const guardaArquivo = (evento) => {
    props.arquivoSelecionado(evento.target.value);
  }
  
  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        type={props.type}
        accept='.csv'
        onChange={guardaArquivo}
        id={props.id}
      />
    </div>
  );
};

export default CampoArquivo;
