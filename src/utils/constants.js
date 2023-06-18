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
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const popupFormAvatar = popupAvatar.querySelector('.popup__form');
export const buttonAvatar = document.querySelector('.profile__button-avatar')
export const popupInputName = popupEdit.querySelector('.popup__input_type_name');
export const popupInputDescription = popupEdit.querySelector('.popup__input_type_description');
export const popupFormEdit = popupEdit.querySelector('.popup__form');
export const popupFormAdd = popupAdd.querySelector('.popup__form');
export const popupInputNameAdd = popupAdd.querySelector('.popup__input_type_name');
export const popupInputLinkAdd = popupAdd.querySelector('.popup__input_type_description');
export const cardGridSelector = '.elements';
export const popups = document.querySelectorAll('.popup');
export const popupModal = document.querySelector('.popup_type_modal');
export const popupModalImage = popupModal.querySelector('.popup__modal-image');
export const popupModalCaption = popupModal.querySelector('.popup__modal-caption');
export const buttonDelete = document.querySelector('.elements__delete');
export const buttonSave = document.querySelectorAll('.popup__button-save');
export const popupAddSelector = '.popup_type_add';
export const popupEditSelector = '.popup_type_edit';
export const popupAvatarSelector = '.popup_type_avatar';
export const popupModalSelector = '.popup_type_modal';
export const popupConfirmSelector = '.popup_type_confirm';
export const formAddSelector = '.popup__form';
export const formEditSelector = '.popup__form';
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const popupInputLinkAvatar = '.popup__input';
export const avatar = '.profile__image';