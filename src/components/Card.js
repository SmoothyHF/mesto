export class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, userId) {
    this._data = data;
    this._template = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
    this._ownerId = this._data.owner._id;
    this.cardId = data._id;
    this.likes = this._data.likes;

    this._card = this._getTemplate();
    this._cardPhoto = this._card.querySelector('.elements__photo');
    this._cardTitle = this._card.querySelector('.elements__text');
    this._deleteButton = this._card.querySelector('.elements__delete');
    this._likeButton = this._card.querySelector('.elements__like');
    this._imageButton = this._card.querySelector('.elements__photo-button');
    this._likesCount = this._card.querySelector('.elements__like-count');
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
    this._rendererDeleteButton();

    this._cardPhoto.src = this._data.link;
    this._cardPhoto.alt = this._data.name;
    this._cardTitle.textContent = this._data.name;

    this.updateLikes(this.likes);
    return this._card;
  }

  handleDelete = () => {
    this._card.remove();
  };

  updateLikes(likes) {
    this._likes = likes;
    this.isLiked = this._likes.some((like) => like._id === this._userId);
    this._likeButton.classList.toggle('elements__like-active', this.isLiked);
    this._likesCount.textContent = this._likes.length;
  }

  _rendererDeleteButton() {
    if (this._userId === this._ownerId) {
      this._deleteButton.classList.remove('elements__delete-hidden')
    } else {
      this._deleteButton.classList.add('elements__delete-hidden')
    }
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this));
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this));
    this._imageButton.addEventListener('click', () => {
      this._handleCardClick(this._data.name, this._data.link);
    });
  }
};