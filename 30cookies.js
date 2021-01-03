let cookies = document.cookie;
console.log(cookies);

function createCookie(name, value) {

    value = escape(value);

    let now = new Date();
    now.setMonth(now.getMonth() + 1);

    document.cookie = name + "=" + value + ";expires=" + now.toUTCString() + ";";
}

function deleteCookie(name) {

    let now = new Date();
    now.setMonth(now.getMonth() - 1);

    document.cookie = name + "=x;expires=" + now.toUTCString() + ";";
}

function getCookie(name) {

    let cookies = document.cookie;

    let cookieArr = cookies.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        let parArr = cookieArr[i].split("=");
        if (parArr[0] === name) {
            return unescape(parArr[1]);
        }
    }

    return undefined;
}

// createCookie("name", "Daniel");
// createCookie("lastName", "Gil");
// createCookie("email", "dgil@example.com");
// createCookie("", "");

// deleteCookie("name");

let name = getCookie("name");
console.log(name);
