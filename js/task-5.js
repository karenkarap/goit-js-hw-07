function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const data = {
  button: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
};

const onButtonClick = event => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  data.text.textContent = color;
};

data.button.addEventListener('click', onButtonClick);
