    const bookingForm = document.getElementById('bookingForm');
const formErrors = document.getElementById('formErrors');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const notesInput = document.getElementById('notes');

function showErrors(errors) {
  if (!errors.length) {
    formErrors.classList.add('hidden');
    formErrors.innerHTML = '';
    return;
  }

  formErrors.innerHTML = `
    <p class="font-semibold">Please correct the following details:</p>
    <ul class="mt-2 list-disc pl-5">
      ${errors.map(error => `<li>${error}</li>`).join('')}
    </ul>
  `;
  formErrors.classList.remove('hidden');
}

function validateEmail(value) {
  return /^\S+@\S+\.\S+$/.test(value);
}

function validatePhone(value) {
  return /^\+?[0-9\s().-]{7,20}$/.test(value);
}

function isFutureDate(value) {
  const selectedDate = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
}

if (bookingForm) {
  bookingForm.addEventListener('submit', event => {
    event.preventDefault();

    const errors = [];
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const notes = notesInput.value.trim();

    if (!fullName) {
      errors.push('Full name is required.');
    } else if (fullName.length < 2) {
      errors.push('Full name must be at least 2 characters long.');
    }

    if (!email) {
      errors.push('Email address is required.');
    } else if (!validateEmail(email)) {
      errors.push('Please enter a valid email address.');
    }

    if (!phone) {
      errors.push('Phone number is required.');
    } else if (!validatePhone(phone)) {
      errors.push('Please enter a valid phone number.');
    }

    if (notes && notes.length < 10) {
      errors.push('Style notes must be at least 10 characters if provided.');
    }

    if (errors.length) {
      showErrors(errors);
      return;
    }

    showErrors([]);
    alert('Thank you! Your booking request has been submitted. Our team will contact you soon.');
    bookingForm.reset();
    window.location.href = 'user.html';
  });
}
  