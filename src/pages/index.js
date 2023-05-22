import '../pages/index.css'
import { Card } from "../components/card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

import {
  initialCards, buttonEdit, buttonAdd, popupAdd,
  popupFormEdit, profileName, profileDescription,
  popupFormAdd, popupInputNameAdd, popupInputLinkAdd,
  cardGrid, popupModal, popupEdit, config
} from "../utils/constants.js";

const userInfoClass = new UserInfo({ nameSelector: profileName, descriptionSelector: profileDescription });

const editPopup = new Popup(popupEdit);
const addPopup = new Popup(popupAdd);

buttonEdit.addEventListener('click', () => {
  editPopup.openPopup();

  userInfoClass.getUserInfo()

  profileValidator.resetInputErrors()
  profileValidator.handleButtonValidity()
});

buttonAdd.addEventListener('click', () => {
  addPopup.openPopup();

  cardValidator.resetInputErrors()
  cardValidator.handleButtonValidity()
});

const handleEditProfile = () => {
  userInfoClass.setUserInfo();
}

const editWithForm = new PopupWithForm(popupEdit, handleEditProfile)
editWithForm.setEventListeners();

const handleAddCard = () => {
  handleGenerateCard({ name: popupInputNameAdd.value, link: popupInputLinkAdd.value });
};

const addWithForm = new PopupWithForm(popupAdd, handleAddCard)
addWithForm.setEventListeners()

const cardList = new Section({
  items: initialCards,
  renderer: handleGenerateCard,
}, cardGrid);

cardList.renderItems();

function handleGenerateCard(cardData) {
  const card = new Card(cardData, '#card-template', handleCardClick);
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);

  const modalWithImage = new PopupWithImage(popupModal, cardData);

  modalWithImage.setEventListeners();

  function handleCardClick() {
    modalWithImage.openPopup();
  }
}

const profileValidator = new FormValidator(config, popupFormEdit);
const cardValidator = new FormValidator(config, popupFormAdd);

profileValidator.enableValidation();
cardValidator.enableValidation();