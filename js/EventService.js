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

    let prefix = document.querySelector("#prefix").value;
    let input = document.querySelector("#my-input").value;
    let url = prefix + input;
    console.log(url);
    requestAPI(url);
}