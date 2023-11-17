const mediaMinima = 6.0;
let menuOpcao = 0;

const listaAlunos = [];

function cadastrarAluno(nome) {
  // Checa se aluno com o nome dado já está cadastrado
  const alunoExiste = listaAlunos.find(
    (dadosAluno) => dadosAluno.nome === nome
  );

  // Se o aluno não existe, realiza o cadastro
  if (!alunoExiste) {
    listaAlunos.push({
      nome: nome,
      notas: [],
    });
    console.log(`Aluno ${nome} cadastrado com sucesso.`);
  } else {
    console.log(`Aluno ${nome} já cadastrado.`);
  }
}

function cadastrarNotas() {
  // Pede nome do aluno
  const nomeAluno = prompt("Digite o nome do aluno: ");

  // Checa se aluno está cadastrado, caso contrário, faz o cadastro
  const aluno = listaAlunos.find((dadosAluno) => dadosAluno.nome === nomeAluno);
  if (!aluno) {
    console.log("Aluno não encontrado. Cadastre o aluno primeiro.");
    return;
  }

  // Pede 3 notas e as cadastra
  for (let i = 0; i < 3; i++) {
    const nota = parseFloat(
      prompt(`Digite a nota ${i + 1} para ${nomeAluno}: `)
    );
    aluno.notas.push(Math.round(nota));
  }

  console.log("Notas cadastradas com sucesso.");
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;
  return Math.round(media);
}

function exibirBoletim() {
  // Pede nome do aluno
  const nomeAluno = prompt("Digite o nome do aluno: ");

  // Checa se o aluno existe e se tem 3 notas cadastradas
  const aluno = listaAlunos.find((dadosAluno) => dadosAluno.nome === nomeAluno);
  if (!aluno || aluno.notas.length < 3) {
    console.log("Aluno não encontrado ou não possui notas cadastradas.");
    return;
  }

  // Calcula média
  const media = calcularMedia(aluno.notas);

  // Mostra nome, notas, média e status
  console.log(`Nome: ${aluno.nome}`);
  console.log(`Notas: ${aluno.notas.join(", ")}`);
  console.log(`Média: ${media}`);
  if (media >= 7) {
    console.log("Status: Aprovado");
  } else if (media >= 5) {
    console.log("Status: Em recuperação");
  } else {
    console.log("Status: Reprovado");
  }
}

while (menuOpcao != 4) {
  menuOpcao = parseInt(
    prompt(
      "Sistema de notas\nMenu de opções\n\n" +
        "1 Cadastrar Aluno\n2 Cadastrar Notas\n" +
        "3 Exibir Boletim\n4 Sair"
    )
  );

  switch (menuOpcao) {
    case 1:
      const nomeAluno = prompt("Digite o nome do aluno: ");
      cadastrarAluno(nomeAluno);
      break;

    case 2:
      cadastrarNotas();
      break;

    case 3:
      exibirBoletim();
      break;

    case 4:
      console.log("Saindo do sistema. Até mais!");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
}
