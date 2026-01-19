import { showMenu, moveMoney, printBalance, errorMessage } from "./io.js";
import { createBank } from "./bank.js";

const bank = createBank();
let input = showMenu();

while (input !== 4) {
  if (input === 1) {
    printBalance(bank.getBalance());
  } else if (input === 2) {
    const amount = moveMoney("deposit");
    if (bank.deposit(amount)) {
      printBalance(bank.getBalance());
    } else {
      errorMessage(1, "deposit");
    }
  } else if (input === 3) {
    const amount = moveMoney("withdraw");
    if (bank.withdraw(amount) === "success") {
      printBalance(bank.getBalance());
    } else if (bank.withdraw(amount) === "insufficent_funds") {
      errorMessage(1, "withdraw");
    } else {
      errorMessage(2);
    }
  } else {
    errorMessage(3);
  }

  input = showMenu();
}
