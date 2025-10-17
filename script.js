const ideas = [
  "Convierte tu idea en un juego interactivo.",
  "Adáptala para resolver un problema cotidiano.",
  "Combínala con inteligencia artificial.",
  "Transforma el concepto en una experiencia sensorial.",
  "Haz una versión accesible para niños o adultos mayores.",
  "Agrega una capa de comunidad o colaboración.",
  "Imagina cómo sería si fuera completamente automatizada.",
  "Aplica el principio de simplicidad: ¿qué eliminarías?",
  "Llévala al entorno físico con materiales reciclados.",
  "Explora cómo se vería dentro de 10 años."
];

document.getElementById("generate").addEventListener("click", () => {
  const topic = document.getElementById("topic").value.trim();
  const out = document.getElementById("output");

  if (!topic) {
    out.innerHTML = "<p>Por favor escribe un tema.</p>";
    return;
  }

  const randomIdeas = [];
  while (randomIdeas.length < 3) {
    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    if (!randomIdeas.includes(idea)) randomIdeas.push(idea);
  }

  out.innerHTML = `
    <h3>Ideas para: ${topic}</h3>
    <ul>${randomIdeas.map(i => `<li>${i}</li>`).join("")}</ul>
  `;
});