class EventService {

    constructor(apiRequestService) {
        this.apiRequestService = apiRequestService;
        console.log(this.apiRequestService);

        document.querySelector("#submit").onclick = function(event) {
            event.preventDefault();
            submitForm(this.apiRequestService);
        }

        console.log("EventService initialized");
    }
}

function submitForm(apiRequestService) {

    let url = document.querySelector("#my-input").value;
    console.log(url);
    requestAPI(url);
}