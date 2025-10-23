/* =========================================================================
   Tema 5 – Práctica DOM - Archivo del Alumno

   INSTRUCCIONES:
   1. Completa la funcionalidad de cada ejercicio siguiendo los comentarios
   2. Usa solo JavaScript vanilla (sin librerías externas)
   3. Sigue el patrón del Ejercicio 1 que está completado como ejemplo
   ========================================================================= */

/* ==============================================================
   Ejercicio 1 – Selectores y modificación
   ============================================================== */

// 1. Seleccionamos los elementos que vamos a usar
const contenido = document.getElementById('contenido');
const btnEj1 = document.getElementById('btn-ej1');

// 2. Añadimos el evento click al botón
btnEj1.addEventListener('click', function () {
  // Cambiar el texto del primer párrafo
  const primerParrafo = contenido.querySelector('p');
  if (primerParrafo) {
    primerParrafo.textContent = 'Este texto ha sido modificado';
  }

  // Cambiar el color del segundo párrafo
  const segundoParrafo = contenido.querySelectorAll('p')[1];
  if (segundoParrafo) {
    segundoParrafo.style.color = 'blue';
  }

  // Añadir clase "resaltado" a todos los párrafos
  const todosLosParrafos = contenido.querySelectorAll('p');
  for (let i = 0; i < todosLosParrafos.length; i++) {
    todosLosParrafos[i].classList.add('resaltado');
  }
});

/* ============================================================
   Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */

// 1. Seleccionar los botones con IDs: btn-add y btn-remove
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');

// 2. Crear función para el botón "Añadir párrafo"
function anadirParrafo() {
  const p = document.createElement('p');
  p.textContent = 'Nuevo párrafo añadido';
  p.classList.add('mb-2');
  contenido.appendChild(p);
  // Aplicar eventos hover (ejercicio 3)
  aplicarHoverParrafo(p);
}

// 3. Crear función para el botón "Eliminar párrafo"
function eliminarUltimoParrafo() {
  const parrafos = contenido.querySelectorAll('p');
  if (parrafos.length > 0) {
    parrafos[parrafos.length - 1].remove();
  }
}

// Asociamos eventos a los botones
if (btnAdd) btnAdd.addEventListener('click', anadirParrafo);
if (btnRemove) btnRemove.addEventListener('click', eliminarUltimoParrafo);

/* ==========================================
   Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */

// 1. Función cuando entra el ratón
function onMouseEnterParrafo(e) {
  e.currentTarget.style.backgroundColor = '#e7f5ff';
}

// 2. Función cuando sale el ratón
function onMouseLeaveParrafo(e) {
  e.currentTarget.style.backgroundColor = '';
}

// 3. Función para aplicar eventos hover a un párrafo
function aplicarHoverParrafo(p) {
  if (!p) return;
  p.addEventListener('mouseover', onMouseEnterParrafo);
  p.addEventListener('mouseout', onMouseLeaveParrafo);
}

// 4. Aplicar hover a todos los párrafos existentes inicialmente
(function aplicarHoverInicial() {
  const parrafosIniciales = contenido.querySelectorAll('p');
  parrafosIniciales.forEach(aplicarHoverParrafo);
})();

/* ======================================================
   Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */

// 1. Seleccionar elementos
const inputNuevoTexto = document.getElementById('nuevoTexto');
const btnCambiar = document.getElementById('btn-cambiar'); // (botón dentro del form)
const msgEj4 = document.getElementById('msg-ej4');
const formEj4 = document.getElementById('form-ej4');

// 2. Crear función para el botón "Cambiar texto"
function cambiarTextoPrimerParrafo(e) {
  // Evitamos recarga si viene de un form submit
  if (e) e.preventDefault();

  const valor = (inputNuevoTexto?.value || '').trim();

  if (valor === '') {
    // Mostrar error y enfocar input
    if (msgEj4) msgEj4.classList.remove('d-none');
    inputNuevoTexto?.focus();
    return;
  }

  // Ocultar error y cambiar texto del primer párrafo
  if (msgEj4) msgEj4.classList.add('d-none');
  const primerParrafo = contenido.querySelector('p');
  if (primerParrafo) {
    primerParrafo.textContent = valor;
    // Un pequeño detalle UX: aplicamos resaltado visual temporal
    primerParrafo.classList.add('resaltado');
    setTimeout(() => primerParrafo.classList.remove('resaltado'), 600);
  }

  // Limpiar input y volver a enfocar
  if (inputNuevoTexto) {
    inputNuevoTexto.value = '';
    inputNuevoTexto.focus();
  }
}

// Asociamos al submit del formulario (más robusto que solo al botón)
if (formEj4) formEj4.addEventListener('submit', cambiarTextoPrimerParrafo);

/* ===================================================
   Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */

// 1. Seleccionar elementos
const inputTarea = document.getElementById('tareaInput');
const btnTarea = document.getElementById('btn-tarea'); // (botón dentro del form)
const btnBorrarCompletadas = document.getElementById('btn-borrar-completadas');
const listaTareas = document.getElementById('listaTareas');
const formTareas = document.getElementById('form-tareas');

// 2. Función para añadir tarea
function anadirTarea(e) {
  // Evitar recarga si viene del submit
  if (e) e.preventDefault();

  const texto = (inputTarea?.value || '').trim();
  if (texto === '') {
    inputTarea?.focus();
    return;
  }

  const li = document.createElement('li');
  li.textContent = texto;

  // Al hacer clic, alterna la clase 'completada'
  li.addEventListener('click', () => {
    li.classList.toggle('completada');
  });

  listaTareas?.appendChild(li);

  // Limpiar y enfocar de nuevo
  if (inputTarea) {
    inputTarea.value = '';
    inputTarea.focus();
  }
}

// 3. Función para borrar tareas completadas
function borrarTareasCompletadas() {
  const completadas = listaTareas?.querySelectorAll('li.completada') || [];
  completadas.forEach(li => li.remove());
}

// Asociamos eventos
if (formTareas) formTareas.addEventListener('submit', anadirTarea);
if (btnBorrarCompletadas) btnBorrarCompletadas.addEventListener('click', borrarTareasCompletadas);

/* ===================================================
   CONSEJOS PARA LOS ALUMNOS:
   - Usa console.log() para depurar tu código
   - Prueba cada función por separado antes de continuar
   - Recuerda usar IDs únicos para cada elemento
   - Las clases CSS ya están definidas en custom.css
   - Si algo no funciona, revisa la consola del navegador
   =================================================== */
