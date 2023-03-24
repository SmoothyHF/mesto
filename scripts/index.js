const buttonEdit = document.querySelector('.profile__button-edit');
const buttonPopupEdit = document.querySelector('.popup');
const buttonCloseEdit = buttonPopupEdit.querySelector('.popup__close');
const popupInputName = buttonPopupEdit.querySelector('.popup__input_type_name');
const popupInputDescription = buttonPopupEdit.querySelector('.popup__input_type_description');
const popupForm = buttonPopupEdit.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDecsription = document.querySelector('.profile__description');


function popupOpen() {
    buttonPopupEdit.classList.add('popup_opened');
};

function popupClose() {
    buttonPopupEdit.classList.remove('popup_opened');
};



buttonEdit.addEventListener('click', popupOpen);

buttonCloseEdit.addEventListener('click', popupClose);

popupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    popupClose();

    profileName.textContent = popupInputName.value;
    profileDecsription.textContent = popupInputDescription.value;
})