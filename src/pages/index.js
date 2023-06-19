import '../pages/index.css'
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm";

import {
  buttonEdit, buttonAdd, popupAddSelector,
  profileName, profileDescription, popupModalSelector,
  popupEditSelector, config, popupFormEdit,
  popupFormAdd, popupAvatarSelector,
  popupFormAvatar, buttonAvatar,
  avatar, popupConfirmSelector, cardGrid
} from "../utils/constants.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '5e479d65-5855-47a5-9b21-4f46b81367c4',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  nameSelector: profileName,
  descriptionSelector: profileDescription,
  avatarSelector: avatar
});

buttonAvatar.addEventListener('click', () => {
  avatarWithForm.open();

  avatarValidator.resetInputErrors();
  avatarValidator.handleButtonValidity();
  avatarWithForm.resetTextSubmitButton();
})

buttonEdit.addEventListener('click', () => {
  editWithForm.open();

  editWithForm.setInputValues(userInfo.getUserInfo())

  profileValidator.resetInputErrors()
  profileValidator.handleButtonValidity()
  editWithForm.resetTextSubmitButton()
});

const handleEditAvatar = (avatar) => {
  api.changeAvatar(avatar)
    .then((userData) => {
      userInfo.setUserInfo(userData)
    }).catch((err) => {
      console.log(err);
    })
}

const avatarWithForm = new PopupWithForm(popupAvatarSelector, handleEditAvatar)
avatarWithForm.setEventListeners();

const handleEditProfile = (formData) => {
  api.changeUserInfo(formData)
    .then((data) => {
      userInfo.setUserInfo(data);
    }).catch((err) => {
      console.log(err);
    })
}

const editWithForm = new PopupWithForm(popupEditSelector, handleEditProfile)
editWithForm.setEventListeners();

const modalWithImage = new PopupWithImage(popupModalSelector);
modalWithImage.setEventListeners();

const profileValidator = new FormValidator(config, popupFormEdit);
const cardValidator = new FormValidator(config, popupFormAdd);
const avatarValidator = new FormValidator(config, popupFormAvatar);

profileValidator.enableValidation();
cardValidator.enableValidation();
avatarValidator.enableValidation();

const confirmPopup = new PopupWithConfirm(popupConfirmSelector);
confirmPopup.setEventListeners();

function handleDelete(card) {
  confirmPopup.resetTextSubmitButton();
  confirmPopup.open(() => {
    api.deleteCard(card.cardId)
      .then(() => {
        card.handleDelete();
      })
      .catch((err) => {
        console.log(err);
      })
  })
}

function handleLikeClick(card) {
  if (card.isLiked) {
    api.disLikeCard(card.cardId)
      .then((data) => {
        card.updateLikes(data.likes)
      })
      .catch((err) => {
        console.log(err);
      })
  } else {
    api.likeCard(card.cardId)
      .then((data) => {
        card.updateLikes(data.likes)
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

const handleAddCard = (cardData) => {
  api.addCard(cardData)
    .then((card) => {
      handleGenerateCard(card);
    }).catch((err) => {
      console.log(err);
    })
};

const popupAddCard = new PopupWithForm(popupAddSelector, handleAddCard)
popupAddCard.setEventListeners()

buttonAdd.addEventListener('click', () => {
  popupAddCard.open();

  cardValidator.resetInputErrors()
  cardValidator.handleButtonValidity()
  popupAddCard.resetTextSubmitButton();
});

function handleCardClick(name, link) {
  modalWithImage.open(name, link);
}

const cardList = new Section((card) => handleGenerateCard(card), cardGrid)

function handleGenerateCard(cardData) {
  const card = new Card(cardData, '#card-template', handleCardClick,
    handleDelete, handleLikeClick, userId);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}

let userId

api.getAppInfo()
  .then(([cards, user]) => {
    cards.reverse();
    userInfo.setUserInfo(user);
    userId = user._id
    cardList.renderItems(cards);
  }).catch((err) => {
    console.log(err);
  })