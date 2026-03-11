// Node.js implementation of the COBOL Student Account Management System
// Preserves business logic, data integrity, and menu options


// Business logic for testability
let balance = 1000.00;
function getBalance() {
  return balance;
}
function credit(amount) {
  if (isNaN(amount) || amount < 0) return 'Invalid amount. Please enter a positive number.';
  balance += amount;
  return `Amount credited. New balance: ${balance.toFixed(2)}`;
}
function debit(amount) {
  if (isNaN(amount) || amount < 0) return 'Invalid amount. Please enter a positive number.';
  if (balance >= amount) {
    balance -= amount;
    return `Amount debited. New balance: ${balance.toFixed(2)}`;
  } else {
    return 'Insufficient funds for this debit.';
  }
}
function resetBalance() {
  balance = 1000.00;
}

// CLI logic
if (require.main === module) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function showMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
    rl.question('Enter your choice (1-4): ', handleMenu);
  }
  function handleMenu(choice) {
    switch (choice.trim()) {
      case '1':
        console.log(`Current balance: ${balance.toFixed(2)}`);
        showMenu();
        break;
      case '2':
        rl.question('Enter credit amount: ', (input) => {
          const msg = credit(parseFloat(input));
          console.log(msg);
          showMenu();
        });
        break;
      case '3':
        rl.question('Enter debit amount: ', (input) => {
          const msg = debit(parseFloat(input));
          console.log(msg);
          showMenu();
        });
        break;
      case '4':
        console.log('Exiting the program. Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid choice, please select 1-4.');
        showMenu();
    }
  }
  showMenu();
}

// Export for testing
module.exports = { getBalance, credit, debit, resetBalance };
