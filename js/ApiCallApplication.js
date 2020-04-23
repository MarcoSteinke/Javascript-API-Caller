class ApiCallApplication {

    constructor() {
        console.log("Application initialized");
        this.eventService = new EventService();
        this.apiRequestService = new APIRequestService();
    }
}

let application = new ApiCallApplication();