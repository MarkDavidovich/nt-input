//input/output file
import promptSync from "prompt-sync";
const prompt = promptSync();

export const showMenu = () => +prompt("1) Check Balance \t 2) Deposit \t 3) Withdraw \t 4) Exit\n");

export const moveMoney = (action) => +prompt(`How much would you like to ${action}? `);

export const printBalance = (balance) => console.log(`Your balance is: $${balance}.`);

export const errorMessage = (errNum, action) => {
  if (errNum === 1) {
    console.log(`Error, can't ${action} $0!`);
  } else if (errNum === 2) {
    console.log("Error, can't withdraw more than your balance!");
  } else if (errNum === 3) {
    console.log("Error, please enter a number between 1 and 4!");
  }
};
