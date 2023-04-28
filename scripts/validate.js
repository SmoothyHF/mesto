function showError(config, input, errorElement) {
    input.classList.remove(config.inputErrorClass);
    errorElement.classList.add(config.errorClassHidden)
}

function hideError(config, input, errorElement) {
    input.classList.add(config.inputErrorClass);
    errorElement.classList.remove(config.errorClassHidden);
    errorElement.textContent = input.validationMessage;
}

function setButtonDisable(config, button) {
    button.setAttribute('disabled', '');
}

function setButtonActive(config, button) {
    button.removeAttribute('disabled');
}

function checkFormValidity(form) {
    return form.checkValidity();
}

function handleButtonValidity(config, form, submitButton) {
    if (checkFormValidity(form)) {
        setButtonActive(config, submitButton);
    } else {
        setButtonDisable(config, submitButton);
    }
}

function checkInputValidity(config, form, input) {

    const errorElement = form.querySelector(`#error-${input.name}`);

    if (input.checkValidity(input)) {
        showError(config, input, errorElement);
    } else {
        hideError(config, input, errorElement);
    }
}

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        const inputs = form.querySelectorAll(config.inputSelector);
        const submitButton = form.querySelector(config.submitButtonSelector);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkInputValidity(config, form, input);
                handleButtonValidity(config, form, submitButton);
            })
        });
    });
}

const resetInputs = (config, form) => {
    const popupInputs = form.querySelectorAll(config.inputSelector);
    popupInputs.forEach((errorInput) => {
        errorInput.classList.remove(config.inputErrorClass);
    });
}

const resetErrors = (config, form) => {
    const popupErrors = form.querySelectorAll(config.errorSelector);
    popupErrors.forEach((error) => {
        error.classList.add(config.errorClassHidden);
    });
}

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    errorSelector: '.popup__error-message',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-invalid',
    errorClassHidden: 'popup__error-message__hidden'
}

enableValidation(config);
