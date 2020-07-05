function changeMode(){
    //get state of switch-mode
    var mode = document.getElementById("switch-mode").checked;
    if (mode === true){
        ChangeModetoNight();    
    }else {
        ChangeModetoDay();      
    }
    
}

function ChangeModetoDay(){
        document.getElementById("switch-mode").checked = false;
        //page color
        document.documentElement.style.setProperty("--page-color", "#f2f2f2");
        //font color
        document.documentElement.style.setProperty("--highlight-color", "#ff7219");
        //main-box
        document.getElementsByClassName("main-box")[0].setAttribute("class","main-box header-box light-box");
        document.getElementsByClassName("main-box")[1].setAttribute("class","main-box seasons-box light-box");

        //buttons
        var buttons = document.getElementsByClassName("btn");

        for(i = 0; i < buttons.length; i++){
            buttons[i].setAttribute("class", "btn light");

        }
        //divisions
        var divisions = document.getElementsByClassName("division");

        for(i = 0; i < divisions.length; i++){
            divisions[i].setAttribute("class", "division light-division");
        }
    }

function ChangeModetoNight(){
        document.getElementById("switch-mode").checked = true;
        //page color
        document.documentElement.style.setProperty("--page-color", "#383838");
        //font color
        document.documentElement.style.setProperty("--highlight-color", "#59d6d6");
        //main-box
        document.getElementsByClassName("main-box")[0].setAttribute("class","main-box header-box dark-box");
        document.getElementsByClassName("main-box")[1].setAttribute("class","main-box seasons-box dark-box");
        
        //buttons
        var buttons = document.getElementsByClassName("btn");

        for(i = 0; i < buttons.length; i++){
            buttons[i].setAttribute("class", "btn dark");

        }
        //divisions
        var divisions = document.getElementsByClassName("division");

        for(i = 0; i < divisions.length; i++){
            divisions[i].setAttribute("class", "division dark-division");

        }
}
    
function openSeasons(){
    document.getElementsByTagName("Header")[0].style.display = "none";
    document.getElementById("mySeasons").style.display = "block";
}

function goHome(){
    document.getElementById("mySeasons").style.display = "none";
    document.getElementsByTagName("Header")[0].style.display = "block";
    
}