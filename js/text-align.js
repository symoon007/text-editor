const bold = document.getElementById("bold");
bold.addEventListener("click", function () {
  if (bold.classList.contains("clicked")) {
    bold.classList.remove("clicked");
    document.getElementById("text").style.fontWeight = "";
  } else {
    bold.classList.add("clicked");
    document.getElementById("text").style.fontWeight = "bold";
  }
});
const italic = document.getElementById("italic");
italic.addEventListener("click", function () {
  if (italic.classList.contains("clicked")) {
    italic.classList.remove("clicked");
    document.getElementById("text").style.fontStyle = "";
  } else {
    italic.classList.add("clicked");
    document.getElementById("text").style.fontStyle = "italic";
  }
});

const underline = document.getElementById("underline");
underline.addEventListener("click", function () {
  if (underline.classList.contains("clicked")) {
    underline.classList.remove("clicked");
    document.getElementById("text").style.textDecoration = "";
  } else {
    underline.classList.add("clicked");
    document.getElementById("text").style.textDecoration = "underline";
  }
});
const textLeft = document.getElementById("text-left");
textLeft.addEventListener("click", function () {
  if (textLeft.classList.contains("clicked")) {
    textLeft.classList.remove("clicked");
    document.getElementById("text").style.textAlign = "";
  } else {
    textLeft.classList.add("clicked");
    document.getElementById("text").style.textAlign = "left";
  }
});
const textCenter = document.getElementById("text-center");
textCenter.addEventListener("click", function () {
  if (textCenter.classList.contains("clicked")) {
    textCenter.classList.remove("clicked");
    document.getElementById("text").style.textAlign = "";
  } else {
    textCenter.classList.add("clicked");
    document.getElementById("text").style.textAlign = "center";
  }
});

const textRight = document.getElementById("text-right");
textRight.addEventListener("click", function () {
  if (textRight.classList.contains("clicked")) {
    textRight.classList.remove("clicked");
    document.getElementById("text").style.textAlign = "";
  } else {
    textRight.classList.add("clicked");
    document.getElementById("text").style.textAlign = "right";
  }
});
const textJustify = document.getElementById("text-jusify");
textJustify.addEventListener("click", function () {
  if (textJustify.classList.contains("clicked")) {
    textJustify.classList.remove("clicked");
    document.getElementById("text").style.textAlign = "";
  } else {
    textJustify.classList.add("clicked");
    document.getElementById("text").style.textAlign = "justify";
  }
});

const textTransform = document.getElementById("text-transform");
textTransform.addEventListener("click", function () {
  if (textTransform.classList.contains("clicked")) {
    textTransform.classList.remove("clicked");
    document.getElementById("text").style.textTransform = "";
  } else {
    textTransform.classList.add("clicked");
    document.getElementById("text").style.textTransform = "uppercase";
  }
});

const fontSizeField = document.getElementById("font-size");
fontSizeField.addEventListener("change", function () {
  const fontSize = fontSizeField.value + "px";
  document.getElementById("text").style.fontSize = fontSize;
});
const colorField = document.getElementById("color-field");
colorField.addEventListener("change", function () {
  const color = colorField.value;
  document.getElementById("text").style.color = color;
});
