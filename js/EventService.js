class EventService {

    constructor(apiRequestService) {
        this.apiRequestService = apiRequestService;
        this.registerEvents();
        this.url = document.querySelector("#my-input").value;
        console.log("EventService initialized");
    }

    registerEvents() {

        // form submit
        document.querySelector("#submit").onclick = function(event) {
            event.preventDefault();
            this.apiRequestService.requestAPI(this.url);
        }
    }
}