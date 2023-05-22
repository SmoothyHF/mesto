export const initialCards = [
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

export const config = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    errorSelector: '.popup__error-message',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-invalid',
    errorClassHidden: 'popup__error-message__hidden'
}

export const buttonEdit = document.querySelector('.profile__button-edit');
export const popupEdit = document.querySelector('.popup_type_edit');
export const buttonAdd = document.querySelector('.profile__button-add');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupInputName = popupEdit.querySelector('.popup__input_type_name');
export const popupInputDescription = popupEdit.querySelector('.popup__input_type_description');
export const popupFormEdit = popupEdit.querySelector('.popup__form');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const popupFormAdd = popupAdd.querySelector('.popup__form');
export const popupInputNameAdd = popupAdd.querySelector('.popup__input_type_name');
export const popupInputLinkAdd = popupAdd.querySelector('.popup__input_type_description');
export const cardGrid = document.querySelector('.elements');
export const popups = document.querySelectorAll('.popup');
export const popupModal = document.querySelector('.popup_type_modal');
export const popupModalImage = popupModal.querySelector('.popup__modal-image');
export const popupModalCaption = popupModal.querySelector('.popup__modal-caption');

