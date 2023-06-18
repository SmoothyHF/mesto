// import Popup from "./Popup";

// export default class PopupWithConfirm extends Popup {
//     constructor(popupSelector) {
//         super(popupSelector);
//         this._form = this._popup.querySelector('.popup__form');
//     }
//     setEventListeners() {
//         super.setEventListeners();
//         this._form.addEventListener('submit', (evt) => {
//             evt.preventDefault();

//             this.close();
//         })
//     }
// }

import PopupWithForm from "./PopupWithForm";
export default class PopupWithConfirm extends PopupWithForm {
    open(onSubmit) {
        super.open();
        this._onSubmit = onSubmit;
    }
}