switchModes()

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return c;
}
function darkmodeButtonClick() {
    console.log(getCookie("darkmode"))
    
    if (getCookie("darkmode") == "false") {
        document.cookie = "darkmode=true;";
        
    } else {
        document.cookie = "darkmode=false;";
    }
    switchModes()
}

function switchModes(){
    if (getCookie("darkmode") == "true") {
        document.body.classList.add("dark-body")
        document.getElementById("main-div").classList.add("dark-main-div")
        document.getElementById("main-header").classList.add("dark-text")
        document.getElementById("main-description").classList.add("dark-text")
        document.getElementById("homepage-button").classList.add("dark-button")
    } else{
        document.body.classList.remove("dark-body")
        document.getElementById("main-div").classList.remove("dark-main-div")
        document.getElementById("main-header").classList.remove("dark-text")
        document.getElementById("main-description").classList.remove("dark-text")
        document.getElementById("homepage-button").classList.remove("dark-button")
    }
}