const form = document.getElementById('survey-form');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const genderInputs = document.querySelectorAll('.gender-input:checked');
    const gender = Array.from(genderInputs).map(input => input.value).join(', ');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Set values in the popup
    document.getElementById('popup-first-name').textContent = firstName;
    document.getElementById('popup-last-name').textContent = lastName;
    document.getElementById('popup-date-of-birth').textContent = dateOfBirth;
    document.getElementById('popup-country').textContent = country;
    document.getElementById('popup-gender').textContent = gender;
    document.getElementById('popup-profession').textContent = profession;
    document.getElementById('popup-email').textContent = email;
    document.getElementById('popup-mobile').textContent = mobile;

    // Show the popup
    popup.style.display = 'block';
});

popupClose.addEventListener('click', function () {
    // Close the popup and reset the form
    popup.style.display = 'none';
    form.reset();
});

document.getElementById('reset').addEventListener('click', function () {
    // Reset the form
    form.reset();
});