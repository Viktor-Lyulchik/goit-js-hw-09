'use strict';

let formData = { email: '', message: '' };

const formFeedBack = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    if (formData.email) formFeedBack.elements.email.value = formData.email;
    if (formData.message)
      formFeedBack.elements.message.value = formData.message;
  } catch (error) {
    console.error('Помилка при парсингу даних з localStorage:', error);
  }
}

formFeedBack.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

formFeedBack.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log('Дані форми:', formData);
  }
  localStorage.removeItem(STORAGE_KEY);

  formData = { email: '', message: '' };

  formFeedBack.reset();
});
