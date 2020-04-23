class EventService {

    constructor() {
        this.registerEvents();
    }

    registerEvents() {

        // form submit
        document.querySelector("#submit").onclick = function(event) {
            event.preventDefault();

        }
    }
}