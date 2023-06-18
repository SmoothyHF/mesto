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
  initialCards, buttonEdit, buttonAdd, popupAddSelector,
  profileName, profileDescription, popupModalSelector,
  popupEditSelector, config, popupFormEdit,
  popupFormAdd, cardGridSelector, popupAvatarSelector,
  popupFormAvatar, buttonAvatar,
  avatar,
  popupConfirmSelector,
  buttonDelete
} from "../utils/constants.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '5e479d65-5855-47a5-9b21-4f46b81367c4',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({ nameSelector: profileName, descriptionSelector: profileDescription, avatarSelector: avatar });

buttonAvatar.addEventListener('click', () => {
  avatarWithForm.open();

  avatarValidator.resetInputErrors();
  avatarValidator.handleButtonValidity();
})

buttonEdit.addEventListener('click', () => {
  editWithForm.open();

  editWithForm.setInputValues(userInfo.getUserInfo())

  profileValidator.resetInputErrors()
  profileValidator.handleButtonValidity()
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

api.getAppInfo()
  .then(([cards, user]) => {
    cards.reverse();
    // cardList.renderItems(cardsPromise);
    userInfo.setUserInfo(user);

    const cardList = new Section({
      // items: initialCards,
      items: cards,
      renderer: handleGenerateCard
    }, cardGridSelector);

    cardList.renderItems()

    function handleDelete(card) {
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

    // function like(card) {
    //   api.likeCard(card.cardId)
    //   .then((data) => {
    //     card.updateLikes(data.likes);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // }

    // function disLike(card) {
    //   api.disLikeCard(card.cardId)
    //   .then((data) => {
    //     card.updateLikes(data.likes)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // }

    // function handleLikeClick(card) {
    //   if(card.isLiked) {
    //     api.disLikeCard(card.cardId)
    //     .then((data) => {
    //       card.updateLikes(data.likes)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //   } else {
    //     api.likeCard(card.cardId)
    //     .then((data) => {
    //       card.updateLikes(data.likes)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //   }
    // }



    function handleGenerateCard(cardData) {
      const card = new Card(cardData, '#card-template', handleCardClick, handleDelete, { userId: user._id });
      const cardElement = card.generateCard();

      cardList.addItem(cardElement);

      function handleCardClick(name, link) {
        modalWithImage.open(name, link);
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

    const addWithForm = new PopupWithForm(popupAddSelector, handleAddCard)
    addWithForm.setEventListeners()

    buttonAdd.addEventListener('click', () => {
      addWithForm.open();

      cardValidator.resetInputErrors()
      cardValidator.handleButtonValidity()
    });
  }).catch((err) => {
    console.log(err);
  })

