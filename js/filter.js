var campoFiltro = document.querySelector("#filtrar-tabela");


campoFiltro.addEventListener("input", () => {
    let filtro = normalizeString(campoFiltro.value);
    var pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(paciente => {
        let nome = normalizeString(paciente.querySelector(".info-nome").textContent);

        if (!nome.includes(filtro)) {
            paciente.classList.add("fadeOut");
            setTimeout(() => {
                paciente.classList.add("invisivel");
            }, 400);
        } else {
            paciente.classList.remove("invisivel");
            paciente.classList.remove("fadeOut");
        }
    });
});

function normalizeString(texto) {
    let text = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return text
}