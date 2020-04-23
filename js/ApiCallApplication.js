class ApiCallApplication {

    constructor() {
        console.log("Application initialized");
        this.apiRequestService = new APIRequestService();
        this.eventService = new EventService(this.apiRequestService);
    }
}