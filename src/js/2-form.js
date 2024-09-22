let formData = {
    email: '',
    message: ''
  };
  
  
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  
  
  const STORAGE_KEY = 'feedback-form-state';
  
  
  function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  
  
  function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    saveFormData();
  }
  
  
  form.addEventListener('input', onInputChange);
  
  
  function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
  
    if (savedData) {
      formData = JSON.parse(savedData);
  
      
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  }
  
  
  populateForm();
  
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
   
    if (emailInput.value === '' || messageInput.value === '') {
      alert('Fill please all fields');
      return;
    }
  
    
    console.log(formData);
  
    
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
  });