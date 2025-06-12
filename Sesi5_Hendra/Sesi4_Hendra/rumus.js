// rumus.js
export function kalkulator(angka1, angka2, operator)
{switch(operator) 
    {case "+": return angka1 + angka2;  // case untuk penambahan
     case "-": return angka1 - angka2;  // case untuk pengurangan
     case "/": return angka1 / angka2;  // case untuk pembagian
     case "*": return angka1 * angka2;  // case untuk perkalian
        default:
            return "operator tidak valid";
    }
}