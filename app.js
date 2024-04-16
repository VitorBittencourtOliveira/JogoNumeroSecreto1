let secretNumber = parseInt(Math.random() * 1001);
let attempt = 1;

while (kick != secretNumber) {
  while (attempt < 11) {
    var kick = prompt(
      "Você tem 10 tentativas para adivinhar um número de 0 a 1000:"
    );

    if (secretNumber == kick) {
      alert(`Acertou! O número secreto é este mesmo, ${kick}.`);
      attempt = 12;
    } else if (kick > secretNumber) {
      alert(`Errou, o número secreto é menor que ${kick}. Tentativa: ${attempt}.`);

      attempt++

      if (attempt == 11) {
        kick = secretNumber;
        alert(`Acabaram suas tentativas, boa sorte na próxima vez. O número secreto era ${secretNumber}.`);
      }
    } else if (kick < secretNumber) {
      alert(`Errou, o número secreto é maior que ${kick} . Tentativa: ${attempt}.`);

      attempt++

      if (attempt == 11) {
        kick = secretNumber;
        alert(`Acabaram suas tentativas, boa sorte na próxima vez. O número secreto era ${secretNumber}.`);
      }
    }
  }
}
