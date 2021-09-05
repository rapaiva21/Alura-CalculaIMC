var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura)
    tdImc.textContent = imc.toFixed(2);

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
};
