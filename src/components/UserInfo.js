export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userDescription = document.querySelector(descriptionSelector); 
    }

    getUserInfo() {
        return {
            name: this._userName.innerText,
            description: this._userDescription.innerText
        }
    }

    setUserInfo({name, description}) {
        this._userName.innerText = name;
        this._userDescription.innerText = description;
    }
}