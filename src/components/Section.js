export default class Section {
    constructor(renderer, container) {
        this._container = container;
        this._renderer = renderer;
    }

    renderItems(items) {
        items.forEach((item) => {
            this._container.after(this._renderer(item))
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }
}