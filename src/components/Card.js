export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._data = data;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;

    this._card = this._getTemplate();
    this._cardPhoto = this._card.querySelector('.elements__photo');
    this._cardTitle = this._card.querySelector('.elements__text');
    this._deleteButton = this._card.querySelector('.elements__delete');
    this._likeButton = this._card.querySelector('.elements__like');

    this._imageButton = this._card.querySelector('.elements__photo-button');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._setEventListeners();

    this._cardPhoto.src = this._data.link;
    this._cardPhoto.alt = this._data.title;
    this._cardTitle.textContent = this._data.title;

    return this._card;
  }

  _handleDelete = () => {
    this._card.remove();
  };

  _handleLike = () => {
    this._likeButton.classList.toggle('elements__like-active')
  };

  _setEventListeners() {
    this._deleteButton.addEventListener('click', this._handleDelete);
    this._likeButton.addEventListener('click', this._handleLike);
    this._imageButton.addEventListener('click', () => {
      this._handleCardClick(this._data.title, this._data.link);
    });
  }
};
