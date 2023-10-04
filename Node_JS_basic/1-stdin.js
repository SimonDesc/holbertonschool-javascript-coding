process.stdout.write('Welcome to Holberton School, what is your name?\n');

let inputData = '';

process.stdin.on('data', (chunk) => {
  inputData += chunk.toString();
  
  // Si une nouvelle ligne est détectée, affiche le nom
  if (inputData.includes('\n')) {
    process.stdout.write(`Your name is: ${inputData.trim()}\n`);
    process.stdin.pause(); // Ferme stdin
  }
});

process.stdin.on('end', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
  process.exit(0);
});
