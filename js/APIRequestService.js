class APIRequestService {

    constructor() {
        console.log("APIRequestService initialized");
        this.responseCount = 0;
    }
}

let responses = [];
const checkBox = document.querySelector("#history");

window.onload = function() {
    if(checkBox.checked) {
        responses = JSON.parse(getCookie("responses"));

        responses.forEach(response => {
            document.getElementById("response-list").insertAdjacentHTML(
                "afterbegin", 
                "<textarea id=\"api-response-" + this.responseCount + "\" class=\"form-control\" name=\"response\" rows=\"10\"\></textarea>");
    
            document.getElementById("api-response-" + this.responseCount).innerHTML = response;
        });      
    }
};

function requestAPI(url, params) {

    let textarea = document.querySelector("#api-response");

    let newTextArea = document.createElement("textarea");

    newTextArea.className = "form-control";
    newTextArea.name = "response";
    newTextArea.rows = 10;

    if(this.responseCount < 1) {
        fetch(url)
        .then(result => result.json())
        .then(data => {
            textarea.innerHTML = JSON.stringify(data);
            responses.push(JSON.stringify(data));

            setCookie("responses", JSON.stringify(responses), 2147483647);
        });

        this.responseCount++;
    } else {
        fetch(url)
        .then(result => result.json())
        .then(data => {
            document.getElementById("response-list").insertAdjacentHTML("afterbegin", "<textarea id=\"api-response-" + this.responseCount + "\" class=\"form-control\" name=\"response\" rows=\"10\"\></textarea>");
            document.getElementById("api-response-" + this.responseCount).innerHTML = JSON.stringify(data);
            responses.push(JSON.stringify(data));

            setCookie("responses", JSON.stringify(responses), 2147483647);
        });

        this.responseCount++;
    }

    if (textarea.innerHTML.length == 0) {
        textarea.innerHTML = "The API request on " + url + " did not work."
    }
}