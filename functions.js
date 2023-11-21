document.getElementById("ideal").setAttribute("href",localStorage.getItem('css'));
function run() {
    if(localStorage.getItem("css") === null){
        localStorage.setItem("css", "style.css");
    }
    document.getElementById("ideal").setAttribute("href",localStorage.getItem('style'));
    
    if(localStorage.getItem("css") == "style.css"){
        localStorage.setItem("css", "style2.css");
    }
    else if(localStorage.getItem("css") == "style2.css"){
        localStorage.setItem("css", "basic.css");
    }
    else{
        localStorage.setItem("css", "style.css");
    }
    document.getElementById("ideal").setAttribute("href",localStorage.getItem('css'));
}

