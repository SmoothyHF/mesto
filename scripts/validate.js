function showError(config, input, errorElement) {
    input.classList.remove(config.inputErrorClass);
    errorElement.classList.add(config.errorClassHidden)
}

function hideError(config, input, errorElement) {
    input.classList.add(config.inputErrorClass);
    errorElement.classList.remove(config.errorClassHidden);
    errorElement.textContent = input.validationMessage;
}
function checkInputValidity(config, input) {
    const errorElement = document.querySelector(`#error-${input.name}`);

    if (input.checkValidity(input)) {
        showError(config, input, errorElement);
    } else {
        hideError(config, input, errorElement);
    }
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

function handleButtonValidity(config, form) {
    const submitButtons = document.querySelectorAll(config.submitButtonSelector);

    submitButtons.forEach(button => checkFormValidity(form) ?
        setButtonActive(config, button) :
        setButtonDisable(config, button)
    );
}

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', evt => evt.preventDefault())
        const inputs = form.querySelectorAll(config.inputSelector);

        inputs.forEach(input => input.addEventListener('input', () => {
            checkInputValidity(config, input);
            handleButtonValidity(config, form);
        }));
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    errorSelector: '.popup__error-message',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-invalid',
    errorClassHidden: 'popup__error-message__hidden'
});