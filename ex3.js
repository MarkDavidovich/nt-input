import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const collectInfo = () => {
  rl.question("What is your name? ", (name) => {
    rl.question("What is your Email? ", (email) => {
      rl.question("How old are you? ", (age) => {
        rl.question("What is your favorite color? ", (color) => {
          console.log(`Registration Summary:\nName: ${name}\nEmail: ${email}\nAge: ${age}\nFavorite Color: ${color}`);
          rl.close();
        });
      });
    });
  });
};

collectInfo();
