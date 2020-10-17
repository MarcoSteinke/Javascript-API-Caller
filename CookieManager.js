
// This code belongs to: https://howchoo.com/javascript/how-to-manage-cookies-in-javascript

function setCookie(name, value, exdays) {
    var d, expires;
    exdays = exdays || 1;
    d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function getCookie(name) {
    var cookie, c;
    cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
        c = cookies[i].split('=');
        if (c[0] == name) {
            return c[1];
        }
    }
    return "";
}

// Info: To delete a cookie, just use a call such as setCookie(name, value, -1) ! 
// By setting the exdays to -1 your cookie will be removed.
function deleteCookie(name) {
    setCookie(name, "", -1);
}