let formData = { email: '', message: '' };

const formFeedBack = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const loadedObj = localStorage.getItem(localStorageKey);

if (loadedObj !== null) {
  const parsedObj = JSON.parse(loadedObj);
  formData = { ...formData, ...parsedObj };

  formFeedBack.elements.email.value = formData.email;
  formFeedBack.elements.message.value = formData.message;
}

formFeedBack.addEventListener('input', event => {
  if (event.target.nodeName === 'INPUT') {
    formData.email = event.target.value.trim();
  }
  if (event.target.nodeName === 'TEXTAREA') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formFeedBack.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
  }
  localStorage.removeItem(localStorageKey);

  formData.email = '';
  formData.message = '';

  form.reset();
}
