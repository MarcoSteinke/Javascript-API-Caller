class APIRequestService {

    constructor() {
        console.log("APIRequestService initialized");
        this.textarea = document.querySelector("#api-response");
    }

    requestAPI(url, params) {
        fetch(url)
            .then(result => result.json())
            .then(data => {
                this.textarea.innerHTML = JSON.stringify(data);
            });
    }
}