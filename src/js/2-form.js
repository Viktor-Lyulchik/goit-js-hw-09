const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

// Відновлення даних з localStorage при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      formData = JSON.parse(savedData);
      if (formData.email) form.elements.email.value = formData.email;
      if (formData.message) form.elements.message.value = formData.message;
    } catch (error) {
      console.error('Помилка при парсингу даних з localStorage:', error);
    }
  }
});

// Збереження даних у localStorage при введенні користувача
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Очищення localStorage та форми при відправці
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Дані форми:', formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {};
});
