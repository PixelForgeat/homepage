function loaded(){
    setTimeout(function(){
        document.getElementById("loadingscreen").style.animation = "fadeout 1s ease"
        setTimeout(function(){document.getElementById("loadingscreen").style.display = "none";},1000);
        document.getElementById("hidden-while-loading").style.display = "block";
    },500)
    Start();
}

class cgh
{
    constructor()
    {
        let menuAnimationSpeed = 20;
        let menuFullSize = false;
        let menuElement = document.getElementById("menu");
        let menuAnimator;
    }
}

const HomepageSettings = new cgh();
HomepageSettings.menuAnimationSpeed = 5;

const checkMenu = () =>
{
    if( window.scrollY > 35 && !HomepageSettings.menuFullSize)
    {
        HomepageSettings.menuElement.style.position = "fixed";
        HomepageSettings.menuFullSize = true;
        convertMenuToFullSize();
    }
    else if ( window.scrollY <= 35 && HomepageSettings.menuFullSize)
    {
        HomepageSettings.menuFullSize = false;
        reverseMenuFromFullSize();
    }
}

function convertMenuToFullSize()
{
    clearInterval(HomepageSettings.menuAnimator);
    let menuWidth = 80;
    let menuTop;
    if(window.scrollY > 55 )
    {
        HomepageSettings.menuElement.style.top = "15px";
        menuTop = 15;
    }
    else
    {
        menuTop = 70 - window.scrollY;
    }
    let topScrollSpeed = menuTop/20;
    HomepageSettings.menuElement.style.left = "50%";
    HomepageSettings.menuElement.style.transform = "translate( -50%, 0 )";
    HomepageSettings.menuElement.style.top = menuTop.toString() + "px";
    HomepageSettings.menuElement.style.margin = "0";
    
    HomepageSettings.menuAnimator = setInterval(() => {
        

        HomepageSettings.menuElement.style.width = menuWidth.toString() + "%";
        HomepageSettings.menuElement.style.top = menuTop.toString() + "px";
        menuTop-=topScrollSpeed;
        menuWidth++;
        if(menuWidth > 100)
        {
            HomepageSettings.menuElement.style.top = "0";
            HomepageSettings.menuElement.style.left = "";
            HomepageSettings.menuElement.style.transform = "";
            clearInterval(HomepageSettings.menuAnimator);  
        }
    },HomepageSettings.menuAnimationSpeed);
}

function reverseMenuFromFullSize()
{
    clearInterval(HomepageSettings.menuAnimator);
    HomepageSettings.menuElement.style.display = "";
    HomepageSettings.menuElement.style.top = "";
    HomepageSettings.menuElement.style.left = "50%";
    HomepageSettings.menuElement.style.transform = "translate( -50%, 0 )";
    let menuTop = window.scrollY;
    let topScrollSpeed = (70 - window.scrollY) /20;

    let menuWidth = 100;
        HomepageSettings.menuAnimator = setInterval(() => {
        HomepageSettings.menuElement.style.width = menuWidth.toString() + "%";
        HomepageSettings.menuElement.style.marginTop = menuTop.toString() + "px";
        menuWidth--;
        menuTop += topScrollSpeed;
        if(menuWidth < 80)
        {
            HomepageSettings.menuElement.style.left = "";
        HomepageSettings.menuElement.style.transform = "";
            HomepageSettings.menuElement.style.marginTop = "";
            HomepageSettings.menuElement.style.width = "";
            HomepageSettings.menuElement.style.width = "";
            HomepageSettings.menuElement.style.left = "";
            HomepageSettings.menuElement.style.position = "";
            HomepageSettings.menuElement.style.margin = "";
            HomepageSettings.menuElement.style.transform = "";  
            clearInterval(HomepageSettings.menuAnimator);
        }
    },HomepageSettings.menuAnimationSpeed);
}

window.addEventListener('scroll',checkMenu);

function Sleep(ms){
    return new Promise( resolve => { setTimeout( () => { resolve(ms); } , ms ) } );
}

function Start()
{
    HomepageSettings.menuElement = document.getElementById("menu");
    document.getElementById("grid-container").style.height = 500;
}