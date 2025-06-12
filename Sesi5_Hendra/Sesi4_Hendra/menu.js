// menu.js
import { Hash } from 'crypto';
import { kalkulator } from './rumus.js';
import readline from 'readline';            
                                            // membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
                                            // minta input angka1 dari pengguna
inputUser.question('Masukan angka pertama:', (angka1) => {
                                            // minta input angka2 dari pengguna
    inputUser.question('Masukan angka kedua:', (angka2) => {        
                                            // minta input memasukan operator dari pengguna (+,-,*,)
        inputUser.question('Masukan operator (+,-,*,/): ', (operator) => {
                                            // tampilkan hasil 
                    console.log(
                        `Hasil:${kalkulator(
                        parseFloat(angka1),
                        parseFloat(angka2),
                        operator
                                )}`
                    );
                    inputUser.close();
});
});
});