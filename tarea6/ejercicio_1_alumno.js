/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información

    var estudiante = { // este es el objeto estudiante
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",
        // TODO: Completar las propiedades del objeto

        mostrarInfo: function () { // este es el método mostrarInfo
            var html = "<h5>Información del Estudiante</h5>";
            html += "<p><strong>Nombre:</strong> " + this.nombre + "</p>";
            html += "<p><strong>Apellidos:</strong> " + this.apellidos + "</p>";
            html += "<p><strong>Edad:</strong> " + this.edad + " años</p>";
            html += "<p><strong>Curso:</strong> " + this.curso + "</p>";
            // TODO: Retornar HTML con la información del estudiante
            // Sugerencia: usar template strings o concatenación
            return html; // Cambiar esta línea
        }
    };
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();

    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    var color = document.getElementById("color-input").value.trim(); // TODO: Obtener el valor del input con id "color-input"
    if (color === "") {
        alert("Introduce un color válido.");
        return;
    }
    colores.push(color); // TODO: Agregar el color al array usando push()
    document.getElementById("color-input").value = ""; // TODO: Limpiar el input
    document.getElementById("resultado-ej2").innerHTML = // TODO: Mostrar mensaje de confirmación
        "<div class='alert alert-success'>Color '" + color + "' agregado correctamente.</div>";
}

function eliminarUltimoColor() {
    if (colores.length === 0) { // TODO: Si el array está vacío, mostrar mensaje apropiado
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-warning'>No hay colores para eliminar.</div>";
        return;
    }
    var eliminado = colores.pop(); // TODO: Eliminar el último elemento del array usando pop()
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-danger'>Se eliminó el color '" + eliminado + "'.</div>"; // TODO: Mostrar mensaje indicando qué color se eliminó
}

function mostrarColores() {
    var html = "<h5>Lista de Colores:</h5><ul>"; // TODO: Mostrar todos los colores del array
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>"; // TODO: Crear HTML con la lista de colores
    }
    html += "</ul>";
    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
        { nombre: "Laptop", precio: 899, categoria: "Electrónicos" },
        { nombre: "Smartphone", precio: 699, categoria: "Electrónicos" },
        { nombre: "Camiseta", precio: 29, categoria: "Ropa" },
        { nombre: "Zapatos", precio: 79, categoria: "Calzado" },
        { nombre: "Mochila", precio: 49, categoria: "Accesorios" }
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    productos.sort(function (a, b) { return a.precio - b.precio; });
    mostrarProductos(productos);
}

function filtrarProductosCaros() {
    var productosCaros = productos.filter(function (p) { // TODO: Filtrar productos con precio mayor a 50€  // Pista: usar el método filter()
        return p.precio > 50; // TODO: Implementar el filtro
    });
    mostrarProductos(productosCaros);
}

function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    var html = "<h5>Catálogo de Productos:</h5>";
    for (var i = 0; i < arrayProductos.length; i++) {
        var p = arrayProductos[i]; // TODO: Recorrer el array y crear HTML para cada producto
        html += "<div class='producto-item'><strong>" + p.nombre +
            "</strong> - " + p.categoria + " - <em>" + p.precio + "€</em></div>"; // Crear tarjetas o lista con nombre, precio y categoría
    }
    if (html === "") html = "<div class='alert alert-warning'>No hay productos para mostrar.</div>";
    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        if (nota < 0 || nota > 10) { // TODO: Validar que la nota esté entre 0 y 10
            alert("Introduce una nota válida entre 0 y 10.");
            return;
        }
        this.notas.push(nota); // Agregar la nota al array de notas
        document.getElementById("resultado-ej4").innerHTML =
            "<div class='alert alert-success'>Nota " + nota + " agregada correctamente.</div>"; // TODO: Mostrar mensaje de confirmación
    },

    calcularPromedio: function () {
        if (this.notas.length === 0)
            return 0;
        var suma = 0;
        for (var i = 0; i < this.notas.length; i++)
            suma += this.notas[i];
        return (suma / this.notas.length);
    },

    mostrarNotas: function () {
        var html = "<h5>Notas de " + this.nombre + ":</h5><ul>";
        for (var i = 0; i < this.notas.length; i++) {
            html += "<li>Nota " + (i + 1) + ": " + this.notas[i] + "</li>"; // TODO: Recorrer el array de notas y crear HTML
        }
        html += "</ul>";
        if (this.notas.length > 0) {
            var promedio = this.calcularPromedio(); // TODO: Calcular el promedio usando el método calcularPromedio()
            html += "<p><strong>Promedio:</strong> " + promedio + "</p>"; // TODO: Incluir el promedio en el HTML
        } else {
            html += "<p>No hay notas para mostrar.</p>";
        }
        return html; // Retornar el HTML generado
    }
};

function agregarNota() {
    var nota = parseFloat(document.getElementById("nota-input").value);
    estudianteNotas.agregarNota(nota);
    document.getElementById("nota-input").value = "";
}

function calcularPromedio() {
    var promedio = estudianteNotas.calcularPromedio();
    document.getElementById("resultado-ej4").innerHTML +=
        "<div class='alert alert-info'>El promedio de las notas es: " + promedio + "</div>";
}

function mostrarNotasEstudiante() {
    var notasHTML = estudianteNotas.mostrarNotas();
    document.getElementById("resultado-ej4").innerHTML = notasHTML;
    // TODO: Llamar al método mostrarNot
    // as
    // TODO: Mostrar el resultado en el DOM
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        { nombre: "Ana Pérez", departamento: "Ventas", salario: 3200, antiguedad: 5 },
        { nombre: "Luis Gómez", departamento: "Marketing", salario: 2800, antiguedad: 3 },
        { nombre: "Marta Sánchez", departamento: "Desarrollo", salario: 4000, antiguedad: 7 },
        { nombre: "Javier Torres", departamento: "Recursos Humanos", salario: 2500, antiguedad: 2 },
        { nombre: "Sofía Ramírez", departamento: "Ventas", salario: 3100, antiguedad: 4 },
        { nombre: "Carlos Fernández", departamento: "Desarrollo", salario: 4500, antiguedad: 6 }
        // TODO: Completar con datos de empleados
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    var departamento = document.getElementById("departamento-input").value.trim();
    if (departamento === "") {
        alert("Introduce un departamento válido.");
        return;
    }
    var empleadosDepto = empleados.filter(function (e) {
        return e.departamento.toLowerCase() === departamento.toLowerCase();
    });

    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {

    var empleadosAltoSalario = empleados.filter(function (p) { // TODO: Filtrar productos con precio mayor a 50€  // Pista: usar el método filter()
        return p.salario > 3000; // TODO: Implementar el filtro
    });


    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {

    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    var html = "<h5>Lista de Empleados:</h5>";
    // TODO: Crear HTML para cada empleado
    for (var i = 0; i < arrayEmpleados.length; i++) {
        var p = arrayEmpleados[i]; // TODO: Recorrer el array y crear HTML para cada producto
        html += "<div class='producto-item'><strong>" + p.nombre +
            "</strong> - " + p.departamento + "</strong> - " + p.salario + "€</strong> - " + p.antiguedad + "</div>"; // Crear tarjetas o lista con nombre, precio y categoría
    }

    if (html === "") html = "<div class='alert alert-warning'>No se encontraron empleados.</div>";
    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    var medio = Math.floor(ciudades.length / 2);
    var eliminados = ciudades.splice(medio, 1); // TODO: Usar splice para eliminar elementos del medio
    document.getElementById("resultado-ej6").innerHTML +=
        "<div class='alert alert-danger'>Se eliminó la ciudad: " + eliminados.join(", ") + "</div>"; // TODO: Mostrar qué elementos se eliminaron
    document.getElementById("resultado-ej6").innerHTML +=
        "<h5>Array resultante:</h5>" + ciudades.join(", ");  // TODO: Mostrar el array resultante
}

function extraerConSlice() {
    var porcion = ciudades.slice(1, 5); // TODO: Usar slice para extraer una porción del array
    document.getElementById("resultado-ej6").innerHTML +=
        "<h5>Porción extraída (índices 1 a 4):</h5>" + porcion.join(", "); // TODO: Mostrar la porción extraída
    document.getElementById("resultado-ej6").innerHTML +=
        "<h5>Array original (sin modificar):</h5>" + ciudades.join(", ");  // TODO: Mostrar que el array original no se modifica
}

function buscarMadrid() {
    var encontrar = ciudades.find(function (c) { // TODO: Usar find() para buscar "Madrid"
        return c === "Madrid";
    });
    var posicion = ciudades.indexOf("Madrid"); // TODO: Usar indexOf() para encontrar su posición

    var html = "<h5>Búsqueda de 'Madrid':</h5>";
    if (encontrar) {
        html += "<div class='alert alert-success'>'Madrid' fue encontrada en la posición: " + (posicion + 1) + "</div>"; // TODO: Mostrar los resultados
    } else {
        html += "<div class='alert alert-warning'>'Madrid' no fue encontrada en el array.</div>";
    }
    document.getElementById("resultado-ej6").innerHTML += html;
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    this.marca = marca; // TODO: Asignar propiedades usando this
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;

    this.acelerar = function () { // metodo acelerar que aumenta la velocidad en 10 km/h
        this.velocidad += 10;
    };

    this.mostrarInfo = function () { // TODO: Crear método mostrarInfo() que retorne información
        return "<div class='vehiculo-item'><strong>" + this.marca + " " + this.modelo +
            "</strong> (" + this.año + ") - Velocidad: " + this.velocidad + " km/h</div>";
    };
}

var vehiculos = [];
function crearVehiculos() {
    vehiculos = [
        new Vehiculo("Toyota", "Corolla", 2020),
        new Vehiculo("Honda", "Civic", 2019),
        new Vehiculo("Ford", "Focus", 2018)
    ];
    var html = "<h5>Vehículos creados:</h5>";
    for (var i = 0; i < vehiculos.length; i++) {
        html += vehiculos[i].mostrarInfo();
    }
    document.getElementById("resultado-ej7").innerHTML = html;


}

function acelerarTodos() {
    for (var i = 0; i < vehiculos.length; i++) {
        vehiculos[i].acelerar();
    }
    var html = "<div class='alert alert-info'>Todos los vehículos han acelerado en 10 km/h.</div>";
    document.getElementById("resultado-ej7").innerHTML = html;
}
function mostrarInfoVehiculos() {
    var html = "<h5>Información de Vehículos:</h5>";
    for (var i = 0; i < vehiculos.length; i++) {
        html += vehiculos[i].mostrarInfo();
    }

    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    matriz = []; // TODO: Crear matriz 3x3 con números aleatorios
    for (var i = 0; i < 3; i++) { // Pista: usar bucles anidados y Math.random()
        matriz[i] = [];
        for (var j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100); // Números aleatorios entre 0 y 99
        }
    }

    mostrarMatriz();
}

function sumarDiagonal() {
    var suma = 0;
    for (var i = 0; i < 3; i++) { // TODO: Calcular la suma de la diagonal principal
        suma += matriz[i][i]; // TODO: Sumar los elementos de la diagonal principal
    }
    document.getElementById("resultado-ej8").innerHTML +=
        "<div class='alert alert-info'>Suma de la diagonal principal: " + suma + "</div>";
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered'>";

    for (var i = 0; i < 3; i++) { // Recorriendo filas
        html += "<tr>"; // Iniciando fila
        for (var j = 0; j < 3; j++) { // Recorriendo columnas
            html += "<td>" + matriz[i][j] + "</td>"; // Agregando celda con el valor
        }
        html += "</tr>"; // Cerrando fila
    }

    // TODO: Crear filas y celdas de la tabla

    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {

    // TODO: Crear array con números del 1 al 10
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // TODO: Completar
    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    var duplicados = numeros.map(function (n) { // TODO: Usar map() para duplicar todos los números
        return n * 2; // TODO: Implementar map
    });

    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    var pares = numeros.filter(function (n) { // TODO: Usar filter() para obtener solo números pares
        return n % 2 === 0;
    });

    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    var suma = numeros.reduce(function (n, s) { // TODO: Usar reduce() para sumar todos los números
        return n + s; // TODO: Implementar reduce
    });
    var html = "";
    document.getElementById("resultado-ej9").innerHTML = html;
    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {

    // TODO: Obtener valores de los inputs
    var titulo = document.getElementById("libro-titulo").value.trim();
    var autor = document.getElementById("libro-autor").value.trim();
    var año = parseInt(document.getElementById("libro-year").value);
    var genero = document.getElementById("libro-genero").value;

    if (titulo === "" || autor === "" || isNaN(año) || genero === "") { // TODO: Validar que todos los campos estén completos
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }


    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero,
    };
    biblioteca.push(libro);

    document.getElementById("libro-titulo").value = ""; // TODO: Limpiar los inputs
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";

    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro agregado correctamente.</div>"; // TODO: Mostrar mensaje de confirmación

}

function mostrarBiblioteca() {
    var html = "<h5>Biblioteca de Libros:</h5>";
    for (var i = 0; i < biblioteca.length; i++) {
        var libro = biblioteca[i];
        html += "<div class='libro-item'><strong>" + libro.titulo + "</strong> por " + libro.autor +
            " (" + libro.año + ") - Género: " + libro.genero + "</div>"; // TODO: Crear HTML para cada libro
    }
    if (biblioteca.length === 0) {
        html += "<div class='alert alert-warning'>No hay libros en la biblioteca.</div>";
    }
    else {
        mostrarLibros(biblioteca);
    }
}

function ordenarPorTitulo() {
    var librosOrdenados = biblioteca.slice().sort(function (a, b) { // TODO: Ordenar libros por título alfabéticamente
        if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) return -1;
        if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) return 1;
        return 0;
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    var generoSeleccionado = document.getElementById("libro-genero").value;
    var librosFiltrados = biblioteca.filter(function (l) {
        return l.genero === generoSeleccionado;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    var recientes = biblioteca.filter(function (l) { // TODO: Filtrar libros publicados en los últimos 5 años
        return l.año >= (new Date().getFullYear() - 5);
    });

    mostrarLibros(recientes);
}
function eliminarLibro(indice) {
    // Confirmación opcional
    if (!confirm("¿Seguro que quieres eliminar este libro?")) return;
    var html = "Libro  eliminado:";
    document.getElementById("resultado-ej10").innerHTML = html;

    biblioteca.splice(indice, 1);
    mostrarBiblioteca();
}

function mostrarLibros(arrayLibros) {
    var html = "";
    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        for (var i = 0; i < arrayLibros.length; i++) {
            var l = arrayLibros[i];
            html += "<div class='producto-item d-flex justify-content-between align-items-center'>" +
                "<div><h6 class='mb-1'>" + l.titulo + "</h6>" +
                "<small>" + l.autor + " - " + l.año + " - " + l.genero + "</small></div>" +
                "<button class='btn btn-sm btn-danger' onclick='eliminarLibro(" + i + ")'>🗑️ Eliminar</button>" +
                "</div>";
        }
    }
    document.getElementById("resultado-ej10").innerHTML = html;
}

    // ===================================
    // EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
    // ===================================

    document.addEventListener('DOMContentLoaded', function () {
        // Ejercicio 1
        document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

        // Ejercicio 2
        document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
        document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
        document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

        // Ejercicio 3
        document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
        document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
        document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

        // Ejercicio 4
        document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
        document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
        document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

        // Ejercicio 5
        document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
        document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
        document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

        // Ejercicio 6
        document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
        document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
        document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
        document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

        // Ejercicio 7
        document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
        document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
        document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

        // Ejercicio 8
        document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
        document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
        document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

        // Ejercicio 9
        document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
        document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
        document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
        document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

        // Ejercicio 10
        // TODO: Añadir event listeners para los botones del ejercicio 10
        document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
        document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
        document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
        document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
        document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);

    });

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/