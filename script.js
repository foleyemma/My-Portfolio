const div = document.querySelector(".typed")
const text = "Frontend Developer";

function textTypingEffect(element, text, i = 0) {
  element.textContent += text[i];

  // if the string ends
  if (i === text.length - 1) {
    return
  }

  setTimeout (() => textTypingEffect(element, text, i + 1), 300);
}

textTypingEffect(div, text)

const span = document.querySelector(".type")
const word = "I'm a";

function textTypingEffect(element, text, i = 0) {
  element.textContent += text[i];

  // if the string ends
  if (i === text.length - 1) {
    return
  }

  setTimeout (() => textTypingEffect(element, text, i + 1), 100);
}

textTypingEffect(span, word)