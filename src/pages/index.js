import '../pages/index.css'
import { Card } from "../components/card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

import {
  initialCards, buttonEdit, buttonAdd, popupAddSelector,
  profileName, profileDescription, popupModalSelector, 
  popupEditSelector, config, popupFormEdit, 
  popupFormAdd, cardGridSelector
} from "../utils/constants.js";
 
const userInfo = new UserInfo({ nameSelector: profileName, descriptionSelector: profileDescription });

buttonEdit.addEventListener('click', () => {
  editWithForm.open();

  editWithForm.setInputValues(userInfo.getUserInfo())

  profileValidator.resetInputErrors()
  profileValidator.handleButtonValidity()
});

buttonAdd.addEventListener('click', () => {
  addWithForm.open();

  cardValidator.resetInputErrors()
  cardValidator.handleButtonValidity()
});

const handleEditProfile = (userData) => {
  userInfo.setUserInfo(userData);
}

const editWithForm = new PopupWithForm(popupEditSelector, handleEditProfile)
editWithForm.setEventListeners();

const handleAddCard = (card) => {
  handleGenerateCard(card);
};

const addWithForm = new PopupWithForm(popupAddSelector, handleAddCard)
addWithForm.setEventListeners()

const cardList = new Section({
  items: initialCards,
  renderer: handleGenerateCard,
}, cardGridSelector);

cardList.renderItems();

const modalWithImage = new PopupWithImage(popupModalSelector);

modalWithImage.setEventListeners();

function handleGenerateCard(cardData) {
  const card = new Card(cardData, '#card-template', handleCardClick);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);

  function handleCardClick(name, link) { 
    modalWithImage.open(name, link); 
  }
}

const profileValidator = new FormValidator(config, popupFormEdit);
const cardValidator = new FormValidator(config, popupFormAdd);

profileValidator.enableValidation();
cardValidator.enableValidation();