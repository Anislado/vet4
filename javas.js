function login() {
    const cuenta = document.getElementById("cuenta").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    if (cuenta === "admin" && password === "23456") {
        window.location.href = "menu.html";
    } else {
        msg.textContent = "Cuenta o contraseña incorrecta";
        msg.style.color = "red";
    }
}

function registrar() {
    alert("Función de registro pendiente");
}

