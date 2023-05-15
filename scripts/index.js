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
const popupModal = document.querySelector('.popup_type_modal');
const popupModalImage = popupModal.querySelector('.popup__modal-image');
const popupModalCaption = popupModal.querySelector('.popup__modal-caption');

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc)
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
};

buttonEdit.addEventListener('click', () => {
  openPopup(popupEdit);

  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDecsription.textContent;

  profileValidator.resetInputErrors()
  profileValidator.handleButtonValidity()
});

buttonAdd.addEventListener('click', () => {

  openPopup(popupAdd);

  popupFormAdd.reset();

  cardValidator.resetInputErrors()
  cardValidator.handleButtonValidity()
});

popupFormEdit.addEventListener('submit', function (event) {
  event.preventDefault();

  closePopup(popupEdit);  

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

  closePopup(popupAdd);
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
  const card = new Card(data, '#card-template', handleOpenModal);
  const cardElement = card.generateCard();
  cardGrid.prepend(cardElement);
};

initialCards.forEach((data) => {
  renderCardElement(data);
});

function handleOpenModal(name, link) {
  openPopup(popupModal);

  popupModalImage.src = link;
  popupModalImage.alt = name;
  popupModalCaption.textContent = name;
}

// закрытие на оверлей

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const config = {
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