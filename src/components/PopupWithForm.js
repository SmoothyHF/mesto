import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, onSubmit) {
        super(popupSelector);
        this._onSubmit = onSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
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

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._onSubmit(this._getInputValues());
            this.close();
        })
    }
}