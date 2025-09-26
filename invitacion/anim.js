// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
    { text: "Yo', ahora sí que estoy consciente", time: 14 },
  { text: "Que tengo familia, mis amigos, mis motivos", time: 17},
  { text: "Que son más que suficiente", time: 20 },
  { text: "Para hacer lo que más quiero porque soy valiente", time: 23 },
  { text: "Eso ya lo sé, lo sé, ma', lo sé", time: 28 },
  { text: "Que cuando caeré, ellos ahí estarán", time: 31 },
  { text: "Dispuestos, ¿para qué? para levantarme", time: 35 },
  { text: "Cuando estas piernas no me funcionen más", time: 39 },
  { text: "Entonces salgo pa'l frente, me hice más fuerte", time: 41 },
  { text: "No quiero ser un peso para toda mi gente", time: 46 },
  { text: "Bateé de repente los problemas de siempre", time: 50 },
  { text: "Le di con toda la fuerza de este ser viviente", time: 53 },
  { text: "Decidido a mi homerun, ey", time: 55 },
  { text: "Decidido a mi homerun, yo'", time: 58 },
  { text: "Y lo voy a hacer por mi mamá, por mi papá", time: 72 },
  { text: "Por mi hermana, por mis panas, por mis ganas", time: 76 },
  { text: "Por las buenas, por las malas, por la pena", time: 80 },
  { text: "Por más ganas, por miradas, ey", time: 83 },
  { text: "Por la risa, por los llantos", time: 85 },
  { text: "Por mentiras, por encantos", time: 89 },
  { text: "Por heridas, por ayer, por el hoy", time: 83 },
  { text: "Porque sé que ahora voy, que ahora voy", time: 87 },
  { text: "Decidido a mi homerun, ey", time: 92 },
  { text: "Decidido a mi homerun", time: 97 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);