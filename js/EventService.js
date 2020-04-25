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
    let paramNameObjects = document.querySelectorAll('.param-name');
    let paramValueObjects = document.querySelectorAll('.param-value');

    let paramaterSuffix = "?";
    for (let i = 0; i < paramNameObjects.length; i++) {

        if (i > 0) {
            paramaterSuffix += "&";
        }

        paramaterSuffix += paramNameObjects[i].value + "=" + paramValueObjects[i].value;
    }

    let url = prefix + input + paramaterSuffix;
    console.log(url);
    requestAPI(url);
}