class ApiCallApplication {

    constructor() {
        console.log("Application initialized");
        this.eventService = new EventService();
    }


}

let application = new ApiCallApplication();