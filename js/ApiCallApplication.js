class ApiCallApplication {

    constructor() {
        console.log("Application initialized");
        this.eventService = new EventService();
    }


}

let application = new ApiCallApplication();

document.querySelector("#submit").onclick = function(event) {
    event.preventDefault();

}