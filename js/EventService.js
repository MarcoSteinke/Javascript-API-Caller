class EventService {

    constructor(apiRequestService) {
        this.apiRequestService = apiRequestService;
        this.responses = [];
        console.log(this.apiRequestService);

        let checkBox = document.querySelector("#history");

        if(getCookie("allowHistory") == "1") {
            checkBox.click();
        }

        checkBox.onchange = function() {
            if(checkBox.checked) {
                setCookie("allowHistory", 1, 234792374);
            } else {
                deleteCookie("allowHistory");
            }
        }

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