import { popupOpen } from "./index.js";

export class Card {

    constructor(data) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._popupModal = document.querySelector('.popup_type_modal');
        this._popupModalImage = this._popupModal.querySelector('.popup__modal-image');
        this._popupModalCaption = this._popupModal.querySelector('.popup__modal-caption');
        this._cardTemplate = document.querySelector('#card-template');
        this._cardElement = this._cardTemplate.content.querySelector('.elements__card').cloneNode(true);
        this._cardPhoto = this._cardElement.querySelector('.elements__photo');
        this._cardName = this._cardElement.querySelector('.elements__text');
        this._deleteButton = this._cardElement.querySelector('.elements__delete');
        this._likeButton = this._cardElement.querySelector('.elements__like');
        this._buttonImage = this._cardElement.querySelector('.elements__photo-button');

    }

    createCardElement() {
        this._cardName.textContent = this._name;
        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;

        this._deleteButton.addEventListener('click', this._handleDelete);
        this._likeButton.addEventListener('click', this._handleLike);

        this._buttonImage.addEventListener('click', () => {
            popupOpen(this._popupModal);
        
            this._popupModalImage.src = this._link;
            this._popupModalCaption.textContent = this._name;
          });

        return this._cardElement;
    }

    _handleDelete = () => {
        this._cardElement.remove();
      };
    
    _handleLike = () => {
        this._likeButton.classList.toggle('elements__like-active')
      };

};
