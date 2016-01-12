
function circleTouchMove( e ) {
    e.preventDefault();
    e.stopPropagation();
        var targetEvent =  e.touches.item(0);
        var circle = document.getElementById("circle");
        var newX = targetEvent.clientX;
        var newY = targetEvent.clientY;
        
        circle.style.left = parseInt(newX-50) + "px";
        circle.style.top = parseInt(newY-50) + "px";
        //$("#circle").css("left", parseInt(newX-25) + "px");
        //$("#circle").css("top", parseInt(newY-25) + "px");
    return false;
}

function circleTouchStart(e){
    blockSwipe = true;
    console.log("circleTouchStart");
    e.stopPropagation();

}

function circleTouchEnd(e){
    setTimeout("blockSwipe = false",100);
}