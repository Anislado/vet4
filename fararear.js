// PROTEGER SESIÓN
if (!localStorage.getItem("sesion")) {
    window.location.href = "login.html";
}

let tabla = document.getElementById("tabla");

// Agregar fila editable
function agregarFila(datos = []) {
    let fila = tabla.insertRow();

    for (let i = 0; i < 9; i++) {
        let c = fila.insertCell();
        c.contentEditable = true;
        c.textContent = datos[i] || "";
    }
}

// Guardar datos
function guardar() {
    let datos = [];

    for (let i = 1; i < tabla.rows.length; i++) {
        let fila = [];
        for (let j = 0; j < 9; j++) {
            fila.push(tabla.rows[i].cells[j].innerText);
        }
        datos.push(fila);
    }

    localStorage.setItem("fararear", JSON.stringify(datos));
    alert("Datos guardados");
}

// Cargar datos guardados
function cargar() {
    let datos = JSON.parse(localStorage.getItem("fararear")) || [];
    datos.forEach(f => agregarFila(f));
}

// Cerrar sesión
function logout() {
    localStorage.removeItem("sesion");
    window.location.href = "login.html";
}

// Inicializar
cargar();

// Filas iniciales tipo Excel
if (tabla.rows.length === 1) {
    for (let i = 0; i < 15; i++) {
        agregarFila();
    }
}
