// Função para contar ocorrências de 'a' ou 'A' em uma string
function contarA(string) {
  // Converte a string para minúsculas e usa regex para contar ocorrências de 'a'
  let quantidadeA = string.match(/a/gi)?.length || 0;

  if (quantidadeA > 0) {
    console.log(`A letra 'a' aparece ${quantidadeA} vezes na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
}

// Defina a string para ser verificada
let string = "Exemplo de string para verificação.";

// Chama a função para contar a quantidade de 'a'
contarA(string);
