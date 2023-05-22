import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, onSubmit) {
        super(popupSelector);
        this._onSubmit = onSubmit;
        this._formAdd = document.querySelector('#formAdd');
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');

        return Array.from(this._inputList).reduce((formData, input) => {
            formData[input.name] = input.value;
            return formData;
        }, {})
    }

    closePopup() {
        super.closePopup();
        this._formAdd.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._onSubmit(this._getInputValues());
            this.closePopup();
        })
    }
}