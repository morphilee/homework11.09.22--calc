let firstNumber = Number(prompt("הזן את המספר"));
let secondNumber = Number(prompt("הזן מספר שני"));
let operator = prompt(
  'לחיבור הזן "+" לחיסור הזן "-" לכפל הזן "*" לחילוק הזן "/"'
);

let finalResult;
if (operator == "+") {
  finalResult = firstNumber + secondNumber;
} else if (operator == "-") {
  finalResult = firstNumber - secondNumber;
} else if (operator == "*") {
  finalResult = firstNumber * secondNumber;
} else if (operator == "/") {
  finalResult = firstNumber / secondNumber;
}
alert(finalResult);
