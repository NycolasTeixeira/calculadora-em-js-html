class Calculator {
  input = document.getElementById("input");

  addToInput = (value) => this.input.value += value;

  calculate = () => {
    const input = this.input.value;
    const values = input.split(/([+\-*/])/); // separa números e operadores em um array

    let total = 0;
    let operator = "+";

    for (let i = 0; i < values.length; i++) {
      const value = values[i].trim();

      if (value === "" || "+-*/".indexOf(value) !== -1) {
        operator = value;
      } else {
        const number = parseFloat(value);

        switch (operator) {
          case "+":
            total += number;
            break;
          case "-":
            total -= number;
            break;
          case "*":
            total *= number;
            break;
          case "/":
            total /= number;
            break;
        }
      }
    }

    this.input.value = total;
  }

  clear = () => this.input.value = "";
}

const calculator = new Calculator();
