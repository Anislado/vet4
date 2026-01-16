// PROTEGER SESIÓN
if (!localStorage.getItem("sesion")) {
    window.location.href = "login.html";
}

let tabla = document.getElementById("tabla");
let contador = 1;

// Agregar fila editable
function agregarFila(datos = []) {
    let fila = tabla.insertRow();

    // Fecha
    let fecha = fila.insertCell();
    fecha.contentEditable = true;
    fecha.textContent = datos[0] || "";

    // Número
    fila.insertCell().textContent = contador++;

    // Paciente, especie, sexo
    for (let i = 1; i < 4; i++) {
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
        fila.push(tabla.rows[i].cells[0].innerText); // fecha
        fila.push(tabla.rows[i].cells[2].innerText); // paciente
        fila.push(tabla.rows[i].cells[3].innerText); // especie
        fila.push(tabla.rows[i].cells[4].innerText); // sexo
        datos.push(fila);
    }

    localStorage.setItem("visitas", JSON.stringify(datos));
    alert("Datos guardados");
}

// Cargar datos
function cargar() {
    let datos = JSON.parse(localStorage.getItem("visitas")) || [];
    datos.forEach(f => agregarFila(f));
}

// Cerrar sesión
function logout() {
    localStorage.removeItem("sesion");
    window.location.href = "login.html";
}

// Inicializar
cargar();

// Filas vacías tipo Excel
if (tabla.rows.length === 1) {
    for (let i = 0; i < 15; i++) {
        agregarFila();
    }
}
