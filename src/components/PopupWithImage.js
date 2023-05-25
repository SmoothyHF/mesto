import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__modal-image');
        this._caption = this._popup.querySelector('.popup__modal-caption');
    }

    open(name, link) {
        super.open();

        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;
    }
}