let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (input === null) break;

  input = parseFloat(input);

  if (input) numbers.push(input);
  else {
    alert("Было введено не число, попробуйте еще раз");
    input = true;
    continue;
  }
} while (input);

for (const number of numbers) {
  total += number;
}

console.log(total);
