
function toggleDarkMode() {
  const body = document.querySelector("body");
  const editor = document.querySelector("#dark-div");
  const section = document.querySelector("#dark-section");
  const editorText = document.querySelector("#text");
  const toggle = document.querySelector(".toggle");

  body.classList.toggle("dark-mode");
  section.classList.toggle("dark-mode");
  editor.classList.toggle("dark-mode");
  editorText.classList.toggle("dark-mode");
  toggle.classList.toggle("active");
}
