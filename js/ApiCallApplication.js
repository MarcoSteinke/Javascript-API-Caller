class ApiCallApplication {

    constructor() {
        console.log("Application initialized");
    }
}

let application = new ApiCallApplication();

document.querySelector("#submit").onclick = function(event) {
    event.preventDefault();

}