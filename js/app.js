const usuariosRegistrados = [
    new Usuario("pedro12", "123"),
    new Usuario("carlos29", "345"),
    //new Usuario("maria", "111")
];

const validarInicioSesion = (usuarioInput, claveInput) =>
    usuariosRegistrados.some(
        usuario => usuario.usuario === usuarioInput && usuario.clave === claveInput
    );

document.querySelector(".boton").addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("pasword").value.trim();

    if (validarInicioSesion(usuario, clave)) {
        Swal.fire({
            icon: "success",
            title: "¡Bienvenido!",
            text: `Hola, ${usuario} Has iniciado sesión correctamente.`,
            timer: 3000,
            showConfirmButton: false
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Acceso denegado",
            text: "Usuario o contraseña incorrectos",
            confirmButtonText: "Intentar de nuevo"
        });
    }
});
