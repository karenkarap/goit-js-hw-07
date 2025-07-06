const loginForm = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  const formData = {
    email: loginForm.elements.email.value.trim(),
    password: loginForm.elements.password.value.trim(),
  };

  if (Object.values(formData).includes('')) {
    alert('All form fields must be filled in');
    return;
  }
  console.log(formData);
  loginForm.reset();
};

loginForm.addEventListener('submit', onFormSubmit);
