const BASE_URL = "http://ecs-django-186565849.us-east-1.elb.amazonaws.com";

async function criaRegistro(novoRegistro) {
  try {
    const res = await fetch(`${BASE_URL}/alunos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST,GET"
      },
      body: JSON.stringify(novoRegistro),
    });
    return res.json();
  } catch (erro) {
    return erro;
  }
}

async function enviaArquivo(arquivo) {
  console.log('entrou', arquivo);
}

export { criaRegistro, enviaArquivo };
