const formulario = document.getElementById("formCita");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const resultado = document.getElementById("resultado");

        resultado.textContent =
            "¡Gracias por probar el formulario! " +
            "La solicitud es una demostración escolar. " +
            "No se ha enviado ni reservado ninguna cita.";

        formulario.reset();
    });
}

const formularioContacto = document.getElementById("formContacto");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(evento) {
        evento.preventDefault();

        document.getElementById("resultadoContacto").textContent =
            "¡Prueba realizada! Este mensaje no se ha enviado a ninguna persona.";

        formularioContacto.reset();
    });
}