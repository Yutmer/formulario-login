const usuariosRegistrados = [
    new Usuario("pedro12", "123"),
    new Usuario("carlos29", "345"),
];

const validarInicioSesion = (usuarioInput, claveInput) =>
    usuariosRegistrados.some(
        usuario => usuario.usuario === usuarioInput && usuario.clave === claveInput
    );

document.querySelector(".boton").addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("pasword").value.trim();
});
