const div = document.querySelector("div");
const body = document.querySelector("body");
const ul = document.querySelector("ul");

let color = [
  "Amin",
  "Khalid",
  "Jamil",
  "Sami",
  "Yusuf",
  "Bilal",
  "Ibrahim",
  "Karim",
  "Hassan",
  "Ahmed",
  "Rashid",
  "Tariq",
  "Sultan",
  "Amir",
  "Nasir",
  "Zayd",
  "Hamza",
  "Ali",
  "Musa",
  "Omar",
];

for (let i = 0; i < color.length; i++) {
  div.innerHTML += `<button onclick = "changeColor(${i})">${color[i]}</button>`;
}

function changeColor(i) {
  ul.innerHTML += `<li>${color[i]}</li>`;
}
