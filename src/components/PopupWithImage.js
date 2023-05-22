import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, data) {
        super(popupSelector);
        this._image = document.querySelector('.popup__modal-image');
        this._caption = document.querySelector('.popup__modal-caption');
        this._data = data;
    }

    openPopup() {
        super.openPopup();

        this._image.src = this._data.link;
        this._image.alt = this._data.name;
        this._caption.textContent = this._data.name;
    }
}