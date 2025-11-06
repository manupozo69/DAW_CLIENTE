// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');

  // Implementar raizCuadrada(numero)
  function raizCuadrada(numero) {
    if (numero < 0) {
      return 'Error: no se puede calcular la raíz cuadrada de un número negativo.';
    }
    return Math.sqrt(numero);
  }

  const res = raizCuadrada(v);
  out.textContent = `Resultado: ${res}`;

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
  function alerta(mensaje) {
    alert(mensaje);
  }

  // Llama a la función alerta con el mensaje
  alerta(msg);
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const out = document.getElementById('out-e3');
  const suma = new Function('a', 'b', 'return a + b;');
  let res = suma(a, b);
  out.textContent = `Resultado: ${res}`;

  // TODO: usa new Function para construir y ejecutar una función que sume a y b

});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  function muestraMensaje(texto) {
    console.log(texto);
  }
  var mensaje = 'Hola, mundo';
  muestraMensaje(mensaje);
  // TODO: reproduce el ejemplo en el código editando esta función.
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {
  const res = (function () {
    console.log('Función autoinvocada');
    return 42;
  })();
  document.getElementById('out-e5').textContent += ' Resultado:' + res;

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.

});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {
  const out = document.getElementById('out-e6');
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const dividir = function (a, b) {
    return a / b;
  };

  let res = dividir(a, b);
  out.textContent = `Resultado: ${res}`;


  // TODO: define y usa esa función para devolver el resultado

});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {
  const out = document.getElementById('out-e7');
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const multiplicar = (a, b) => a * b;
  let res = multiplicar(a, b);
  out.textContent = `Resultado: ${res}`;

  // TODO: implementa una función flecha multiplicar = 

});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {
  const a = document.getElementById('a-e8').value;
  function saludar(a = 'invitado') {
    console.log(`Hola, ${a}`);
  }
  saludar(a || 'invitado');




  // TODO: implementar function saludar

});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {
  function externa() {
    contador++;
    function interna() {
      console.log(contador);
      console.log('Función interna');
    }
    interna();
  }
  externa();
  


  // TODO: implementar función externa e interna

});
let contador = 0;

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {
  const out = document.getElementById('out-e10');
  const a = document.getElementById('a-e10').value;
  let texto = a;
        console.log(texto.length); // Propiedad length
        console.log(texto.toUpperCase()); // Método toUpperCase
        console.log(texto.trim()); // Método trim
        console.log(texto.indexOf('n')); // Método indexOf
        console.log(Math.random()); // Función Math.random
        console.log(Date.now()); // Función Date.now


  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)

});
