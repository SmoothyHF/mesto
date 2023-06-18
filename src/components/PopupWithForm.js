import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, onSubmit) {
        super(popupSelector);
        this._onSubmit = onSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._submitButton = this._form.querySelector('.popup__button-save');
        this._submitButtonDefaultText = this._submitButton.textContent;

        this._formConfirm = document.querySelector('#formConfirm');
        this._submitButtonConfirm = this._formConfirm.querySelector('.popup__button-save');
    }

    _getInputValues() {
        return Array.from(this._inputList).reduce((formData, input) => {
            formData[input.name] = input.value;
            return formData;
        }, {})
    }

    setInputValues(inputValues) {
        this._inputList.forEach((input) => {
            input.value = inputValues[input.name];
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    _renderLoading() {
        if (this._submitButton === this._submitButtonConfirm) {
            this._submitButton.textContent = 'Удаление...';
        } else {
            this._submitButton.textContent = 'Сохранение...';
        }
    }

    resetTextSubmitButton() {
        this._submitButton.textContent = this._submitButtonDefaultText;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._renderLoading();

            this._onSubmit(this._getInputValues());
            this.close();
        })
    }
}