export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this._nameSelector = nameSelector;
        this._descriptionSelector = descriptionSelector;
        this._inputName = document.querySelector('.popup__input_type_name');
        this._inputDescription = document.querySelector('.popup__input_type_description');
    }

    getUserInfo() {
        this._inputName.value = this._nameSelector.textContent;
        this._inputDescription.value = this._descriptionSelector.textContent;
    }

    setUserInfo() {
        this._nameSelector.textContent = this._inputName.value;
        this._descriptionSelector.textContent = this._inputDescription.value;
    }
}