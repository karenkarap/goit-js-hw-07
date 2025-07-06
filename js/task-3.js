const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', event => {
  const value = event.currentTarget.value.trim();
  if (value.length > 0) {
    refs.nameOutput.textContent = value;
  } else {
    refs.nameOutput.textContent = 'Anonymous';
  }
});
