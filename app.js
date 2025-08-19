//variable que almacenará los nombres de los amigos ingresados.
let amigos = [];

// Función para agregar amigos
    function agregarAmigo() {
      let input = document.getElementById("amigo");
      let nombre = input.value.trim();

      if (nombre === "") {
        alert("Por favor, inserte un nombre.");
      } else {
        amigos.push(nombre);
        input.value = ""; // limpiar campo de entrada
        mostrarAmigos();  // actualizar la lista en pantalla
      }
    }

    // Función para mostrar los amigos en la lista
    function mostrarAmigos() {
      let lista = document.getElementById("listaAmigos");

      // Limpiar lista antes de agregar nuevos elementos
      lista.innerHTML = "";

      // Recorrer el arreglo amigos
      for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo <li> para cada amigo
        let li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(li);
      }
    }

    // Función para seleccionar un amigo al azar
    function sortearAmigo() {
      let resultado = document.getElementById("resultado");

       // Validar que el array no esté vacío
      if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos para sortear.";
        return;
      }

       // Generar índice aleatorio
      let indiceAleatorio = Math.floor(Math.random() * amigos.length);

      // Obtener nombre sorteado
      let amigoSorteado = amigos[indiceAleatorio];

      // Mostrar resultado en el <p>
      resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
      
      // Actualizar la lista visual en pantalla
      mostrarAmigos();
    }