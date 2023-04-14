const buttonEdit = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit');
const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add');
const buttonCloseEdit = popupEdit.querySelector('.popup__close');
const popupInputName = popupEdit.querySelector('.popup__input_type_name');
const popupInputDescription = popupEdit.querySelector('.popup__input_type_description');
const popupFormEdit = popupEdit.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDecsription = document.querySelector('.profile__description');
const buttonCloseAdd = popupAdd.querySelector('.popup__close');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const popupInputNameAdd = popupAdd.querySelector('.popup__input_type_name');
const popupInputLinkAdd = popupAdd.querySelector('.popup__input_type_description');
const cardTemplate = document.querySelector('#card-template');
const cardGrid = document.querySelector('.elements');
const popupModal = document.querySelector('.popup_type_modal');
const popupModalImage = popupModal.querySelector('.popup__modal-image');
const popupModalCaption = popupModal.querySelector('.popup__modal-caption');
const buttonCloseModal = popupModal.querySelector('.popup__close');
const popupContainerModal = popupModal.querySelector('.popup__container_type_modal');

function popupOpen(popup) {
  popup.classList.add('popup_opened');
};

function popupClose(popup) {
  popup.classList.remove('popup_opened');
};

buttonEdit.addEventListener('click', () => {
  popupOpen(popupEdit);

  popupInputName.value = profileName.textContent;
  popupInputDescription.value = profileDecsription.textContent;
});

buttonAdd.addEventListener('click', () => {
  popupOpen(popupAdd);
});

buttonCloseEdit.addEventListener('click', () => {
  popupClose(popupEdit);
});

buttonCloseAdd.addEventListener('click', () => {
  popupClose(popupAdd);
});

popupFormEdit.addEventListener('submit', function(event) {
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

  renderCardElement(createCardElement(initialCardsData));

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

  // создание карточки

const createCardElement = (initialCardsData) => {
    const cardElement = cardTemplate.content.querySelector('.elements__card').cloneNode(true);

    const cardPhoto = cardElement.querySelector('.elements__photo');
    const cardName = cardElement.querySelector('.elements__text');
    const buttonImage = cardElement.querySelector('.elements__photo-button');

    cardName.textContent = initialCardsData.name;
    cardPhoto.src = initialCardsData.link;
    cardPhoto.alt = initialCardsData.name;

    const deleteButton = cardElement.querySelector('.elements__delete');
    const likeButton = cardElement.querySelector('.elements__like');

    const handleDelete = () => {
      cardElement.remove();
    };

    const handleLike = () => {
      likeButton.classList.toggle('elements__like-active')
    };

    deleteButton.addEventListener('click', handleDelete);
    likeButton.addEventListener('click', handleLike);

    buttonImage.addEventListener('click', () => {
      popupOpen(popupModal);
    
      popupModalImage.src = initialCardsData.link;
      popupModalCaption.textContent = initialCardsData.name;
    });

    buttonCloseModal.addEventListener('click', () => {
      popupClose(popupModal);
    })

    return cardElement;
};

const renderCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
};

initialCards.forEach((initialCardsData) => {
  renderCardElement(createCardElement(initialCardsData));
});