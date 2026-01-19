export const createBank = function () {
  let _balance = 0;

  return {
    deposit(amount) {
      if (amount <= 0) {
        return false;
      }
      _balance += amount;
      return true;
    },

    withdraw(amount) {
      if (amount > _balance) {
        return "invalid_amount";
      } else if (amount <= 0) {
        return "insufficent_funds";
      }
      _balance -= amount;
      return "success";
    },

    getBalance() {
      return _balance;
    },
  };
};
