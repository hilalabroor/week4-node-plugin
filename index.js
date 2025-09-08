import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

const args = process.argv.slice(2);
const name = args[0] ?? 'M. Wahyu Hilal Abroor';
const nim = args[1] ?? 'F1D02310123';

const ascii = figlet.textSync(name, { horizontalLayout: 'default', verticalLayout: 'default' });
console.log(chalk.bold.ascii ? ascii : ascii);

console.log(chalk.red.bold(`Nama : ${name}`));
console.log(chalk.white.bold(`NIM  : ${nim}`));
console.log();

const pesan = `Hallo gagah, semangat yooo`;
const cow = cowsay.say({ text: pesan, e: 'oo', T: 'U ' });

console.log(chalk.green(cow));

const now = new Date().toLocaleString('id-ID');
console.log(chalk.dim(`\nDijalankan: ${now}`));
