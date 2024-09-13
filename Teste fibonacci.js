// Função para calcular a sequência de Fibonacci até um número limite
function fibonacci(limit) {
  let fibSequence = [0, 1];
  
  while (true) {
    let nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    
    if (nextValue > limit) break;
    
    fibSequence.push(nextValue);
  }
  
  return fibSequence;
}

// Função que verifica se um número pertence à sequência de Fibonacci
function isFibonacci(number) {
  const sequence = fibonacci(number);
  
  if (sequence.includes(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${number} NÃO pertence à sequência de Fibonacci.`);
  }
}

// Aqui voce define o numero
let number = 21; // Exemplo: o numero que voce quer verificar

// Chama a função para verificar se o número pertence à sequência de Fibonacci
isFibonacci(number);
