class APIRequestService {

    constructor() {
        console.log("APIRequestService initialized");
    }
}

function requestAPI(url, params) {

    let textarea = document.querySelector("#api-response");

    fetch(url)
        .then(result => result.json())
        .then(data => {
            textarea.innerHTML = JSON.stringify(data);
        });

    if (textarea.innerHTML.length == 0) {
        textarea.innerHTML = "The API request on " + url + " did not work."
    }
}