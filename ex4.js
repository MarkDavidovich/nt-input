import promptSync from "prompt-sync";
const prompt = promptSync();

let balance = 0;
const menu = "1) Check Balance \t 2) Deposit \t 3) Withdraw \t 4) Exit\n";

let input = +prompt(menu);

while (input !== 4) {
  if (input === 1) {
    console.log(balance);
  } else if (input === 2) {
    let amount = +prompt("How much would you like to deposit? ");
    if (amount > 0) {
      balance += amount;
      console.log(`You have successfully deposited ${amount}`);
    } else {
      console.log("invalid operation!");
    }
  } else if (input === 3) {
    let amount = +prompt("How much would you like to withdraw? ");
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      console.log(`You have successfully withdrawn ${amount}`);
    } else {
      console.log("invalid operation!");
    }
  } else {
    console.log("error, please enter a number between 1 to 4.\n");
  }
  input = +prompt(menu);
}
