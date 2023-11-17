const alunos = [];
const mediaMinima = 6.0;

const quantidadeAlunos = parseInt(prompt('Digite a quantidade de alunos:'));

for (let i = 0; i < quantidadeAlunos; i++) {
  const nomeAluno = prompt(`Digite o nome do aluno ${i + 1}:`);
  const notasAluno = [];
  
  let somaNotas = 0;
  for (let j = 1; j <= 3; j++) {
    const nota = parseFloat(prompt(`Digite a ${j}ª nota de ${nomeAluno}:`));
    notasAluno.push(nota);
    somaNotas += nota;
  }

  const mediaAluno = somaNotas / 3;

  let situacao;
  if (mediaAluno >= mediaMinima) {
    situacao = 'passou';
  } else {
    situacao = 'não passou';
  }

  alunos.push({ nome: nomeAluno, notas: notasAluno, media: mediaAluno.toFixed(2), situacao });
}

console.log('Resultados:');
for (const aluno of alunos) {
  console.log(`${aluno.nome} - Média: ${aluno.media}, Situação: ${aluno.situacao}`);
}