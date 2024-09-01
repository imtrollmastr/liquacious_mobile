function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
if (getCookie("accessGranted") == "true") {

} else {
    let password = prompt("Enter four-digit passcode:");
    if (password == "6784") {
        document.cookie = "accessGranted = true"
    } else {
        setTimeout(() => {
            document.body.innerHTML = ""
            document.cookie = "accessGranted = false"
        }, 100);
    }
}