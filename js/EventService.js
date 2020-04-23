class EventService {

    constructor() {
        this.registerEvents();
        console.log("EventService initialized");
    }

    registerEvents() {

        // form submit
        document.querySelector("#submit").onclick = function(event) {
            event.preventDefault();

        }
    }
}