const notesDiv = document.getElementById("all_notes");
const modal = document.getElementById("modal");
const textArea = document.getElementById("note-text");

let i = 0;

function typeNote() {
  modal.setAttribute("style", "display: block");
}

function closeNote() {
  modal.setAttribute("style", "display: none");
}

function createNote() {
  const userInputValue = textArea.value;
  if (textArea.value == "") return;
  const newNoteDiv = document.createElement("div");
  const newH1 = document.createElement("h1");
  newH1.textContent = userInputValue;
  newH1.setAttribute(
    "style",
    "width: 100%; height: 100%; font-size: 26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)"
  );
  newNoteDiv.setAttribute("style", "width: 250px; height: 250px");
  newH1.style.margin = margin();
  newNoteDiv.style.transform = rotate();
  newH1.style.backgroundColor = colors();
  newNoteDiv.appendChild(newH1);
  notesDiv.appendChild(newNoteDiv);

  newNoteDiv.addEventListener("mouseenter", () => {
    newNoteDiv.style.transform = "scale(1.1)";
  });

  newNoteDiv.addEventListener("mouseleave", () => {
    newNoteDiv.style.transform = "scale(1)";
  });

  newNoteDiv.addEventListener("dblclick", () => {
    newNoteDiv.remove();
  });

  textArea.value = "";
}

function margin() {
  let random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  let random_rotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-8deg)",
  ];

  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function colors() {
  let random_color = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];
  if (i > random_color.length + 1) i = 0;

  return random_color[i++];
}
