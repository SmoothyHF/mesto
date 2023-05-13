import { Card } from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const buttonEdit = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit');
const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add');
const popupInputName = popupEdit.querySelector('.popup__input_type_name');
const popupInputDescription = popupEdit.querySelector('.popup__input_type_description');
const popupFormEdit = popupEdit.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDecsription = document.querySelector('.profile__description');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const popupInputNameAdd = popupAdd.querySelector('.popup__input_type_name');
const popupInputLinkAdd = popupAdd.querySelector('.popup__input_type_description');
const cardGrid = document.querySelector('.elements');
const popups = document.querySelectorAll('.popup');

export function popupOpen(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc)
};

function popupClose(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
};

buttonEdit.addEventListener('click', () => {
  popupOpen(popupEdit);

  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDecsription.textContent;

  profileValidator.enableValidation();

  profileValidator.resetErrors();
  profileValidator.resetInputs();
  profileValidator.handleButtonValidity()
});

buttonAdd.addEventListener('click', () => {

  popupOpen(popupAdd);

  popupFormAdd.reset();

  cardValidator.resetErrors()
  cardValidator.resetInputs()
  cardValidator.handleButtonValidity()
});

popupFormEdit.addEventListener('submit', function (event) {
  event.preventDefault();

  popupClose(popupEdit);  

  profileName.textContent = popupInputName.value;
  profileDecsription.textContent = popupInputDescription.value;
})

const handleAddCard = (event) => {
  event.preventDefault();

  const name = popupInputNameAdd.value;
  const link = popupInputLinkAdd.value;

  const initialCardsData = {
    name,
    link,
  };
  
  renderCardElement(initialCardsData)

  popupClose(popupAdd);
};

popupFormAdd.addEventListener('submit', handleAddCard);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.reverse();

function renderCardElement(data) {
  const card = new Card(data);
  const cardElement = card.createCardElement();
  cardGrid.prepend(cardElement);
};

initialCards.forEach((data) => {
  renderCardElement(data);
});

// закрытие на оверлей

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      popupClose(popup);
    }
  })
})

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    popupClose(openedPopup);
  }
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  errorSelector: '.popup__error-message',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-invalid',
  errorClassHidden: 'popup__error-message__hidden'
}

const profileValidator = new FormValidator(config, popupFormEdit);
const cardValidator = new FormValidator(config, popupFormAdd);

profileValidator.enableValidation();
cardValidator.enableValidation();