export class FormValidator {

    constructor(config, form) {
        this._form = form;
        this._config = config;

        this._inputs = this._form.querySelectorAll(this._config.inputSelector);
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);
        this._inputErrorClass = this._form.querySelector(this._config.inputErrorClass);
    }

    enableValidation() {
        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this.handleButtonValidity();
            });
        });
    }

    _checkInputValidity(input) {
        if (input.checkValidity(input)) {
            this._hideError(input, this._config.errorElement);
        } else {
            this._showError(input, this._config.errorElement);
        }
    }

    _hideError(input) {
        const errorElement = this._form.querySelector(`#error-${input.name}`);

        input.classList.remove(this._config.inputErrorClass);
        errorElement.classList.add(this._config.errorClassHidden);
    }

    _showError(input) {
        const errorElement = this._form.querySelector(`#error-${input.name}`);

        input.classList.add(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClassHidden);
        errorElement.textContent = input.validationMessage;
    }

    _setButtonDisable(button) {
        button.setAttribute('disabled', '');
    }

    _setButtonActive(button) {
        button.removeAttribute('disabled');
    }

    _checkFormValidity() {
        return this._form.checkValidity();
    }

    handleButtonValidity() {
        if (this._checkFormValidity()) {
            this._setButtonActive(this._submitButton);
        } else {
            this._setButtonDisable(this._submitButton);
        }
    }

    resetInputs = () => {
        const popupInputs = this._form.querySelectorAll(this._config.inputSelector);
        popupInputs.forEach((errorInput) => {
            errorInput.classList.remove(this._config.inputErrorClass);
        });
    }

    resetErrors = () => {
        const popupErrors = this._form.querySelectorAll(this._config.errorSelector);
        popupErrors.forEach((error) => {
            error.classList.add(this._config.errorClassHidden);
        });
    }
}