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

    if (pesoEhValido && alturaEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = calculaImc(imc);
    }
};

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("teste do botaoAdicionar");
    var form = document.querySelector("#form-adiciona");
    nome = form.nome.value;
    peso = form.peso.value;
    altura = form.altura.value;
    gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);
        
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    console.log(nomeTd);


});
