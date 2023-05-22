export default class Popup {
    constructor(popupSelector) {
        this._popups = document.querySelectorAll('.popup');
        this._openedPopup = document.querySelector('.popup_opened');
        this._popupSelector = popupSelector;
    }

    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.closePopup(this._openedPopup);
        }
    }
    
    setEventListeners() {
        this._popups.forEach((popup) => {
            popup.addEventListener('mousedown', (evt) => {
                if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
                    this.closePopup(popup);
                }
            })
        })
    }
}