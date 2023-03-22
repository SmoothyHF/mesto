const editButton = document.querySelector('.profile__edit-button');
const editButtonPopup = document.querySelector('.popup__edit');
const editButtonClose = editButtonPopup.querySelector('.popup__close');
const popupInputName = editButtonPopup.querySelector('.popup__input_type_name');
const popupInputDescription = editButtonPopup.querySelector('.popup__input_type_description')
const popupSaveButton = editButtonPopup.querySelector('.popup__save');
const popupForm = editButtonPopup.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDecsription = document.querySelector('.profile__description');

editButton.addEventListener('click', function() {
    editButtonPopup.classList.add('popup__open');

    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDecsription.textContent;
});

editButtonClose.addEventListener('click', function() {
    editButtonPopup.classList.remove('popup__open');
});

popupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    editButtonPopup.classList.remove('popup__open');

    const name = popupInputName.value;
    const description = popupInputDescription.value;

    profileName.textContent = name;
    profileDecsription.textContent = description;
});


