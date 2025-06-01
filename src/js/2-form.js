const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  const parsed = JSON.parse(saved);
  formData.email = parsed.email || '';
  formData.message = parsed.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', e => {
  const { name, value } = e.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
