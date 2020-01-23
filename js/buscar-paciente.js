var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", () => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", () => {
        let text = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            text.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(paciente => {
                montaPacienteTabela(paciente);
            });
        } else {
            text.classList.remove("invisivel");
        }
    });

    xhr.send();
});