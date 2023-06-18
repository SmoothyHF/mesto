import PopupWithForm from "./PopupWithForm";
export default class PopupWithConfirm extends PopupWithForm {
    open(onSubmit) {
        super.open();
        this._onSubmit = onSubmit;
    }
}