export default class UserInfo {
    constructor({ nameSelector, descriptionSelector, avatarSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userDescription = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.innerText,
            about: this._userDescription.innerText
        }
    }

    setUserInfo({ name, about, avatar }) {
        this._userName.innerText = name;
        this._userDescription.innerText = about;
        this._avatar.src = avatar;
        // this._id = _id;
    }
}