//---Segunda Versão---\\
let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var pesoValidation = validaPeso(peso);
    var alturaValidation = validaAltura(altura);


    if (!pesoValidation) {
        pesoValidation = false;
        paciente.querySelector(".info-imc").textContent = "Peso Inválido!"
        paciente.classList.add("pacienteInvalido")
    }

    if (!alturaValidation) {
        alturaValidation = false;
        paciente.querySelector(".info-imc").textContent = "Altura Inválida!"
        paciente.classList.add("pacienteInvalido")
    }

    if (pesoValidation && alturaValidation) {
        var IMC = calculaimc(peso, altura);
        paciente.querySelector(".info-imc").textContent = IMC;
    }
}

function calculaimc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
//---Função Professor---\\
function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true;
    } else { return false }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else { return false }
}

//---Função Cairo---\\
// function validaDados(paciente, peso, altura) {
//     let IMCValidation = true;

//     if (peso <= 0 || peso >= 500 || altura <= 0 || altura >= 3) {
//         IMCValidation = false;
//         paciente.querySelector(".info-imc").textContent = "Peso/Altura Inválidos!"
//         paciente.classList.add("pacienteInvalido")
//     }

//     if (IMCValidation) {
//         var IMC = calculaimc(peso, altura);
//         paciente.querySelector(".info-imc").textContent = IMC;
//     }
// }