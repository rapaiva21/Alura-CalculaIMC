var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);
    var pacienteTr = montaTr(paciente);
   

    
});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;

    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    pesoTd.textContent = paciente.peso;

    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    alturaTd.textContent = paciente.altura;

    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    gorduraTd.textContent = paciente.gordura;
    
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");
    imcTd.textContent = paciente.imc;
        
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}