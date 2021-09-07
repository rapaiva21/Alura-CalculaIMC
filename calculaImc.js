var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    
    

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 500){
        pesoEhValido = false;
        console.log("Peso inválido");
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00){
        alturaEhValido = false;
        console.log("Altura inválido");
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValido){
        tdImc.textContent = calculaImc(peso, altura);
    }
};

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
};
