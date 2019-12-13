// Это класс для всплывающего окна
class Popup {
    // Открыть popup
    open(params) {
        this.popup = params['root container'].querySelector(`.${params.popUp}`);
        this.opened = params.open;

        this.popup.classList.add(this.opened);
    }

    // Закрыть popup
    close() {
        this.popup.classList.remove(this.opened);
    }
}