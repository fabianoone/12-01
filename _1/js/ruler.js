var currentGraphHeight = 300;
function rulerTouchStart(e){
    blockSwipe = true;
    e.stopPropagation();

}

function rulerTouchMove( e ) {
    e.preventDefault();
    e.stopPropagation();

        var targetEvent =  e.touches.item(0);
        var currentPosY = targetEvent.clientY-50;
        $("#ruler").css("top",currentPosY);
        $("#ruler").css("left",targetEvent.clientX-50);
        if(currentPosY >= 248){
            var graphHeight = 300 -(currentPosY-223);
            if(graphHeight >= 5)
                $("#graphe-batonnet").css("height",graphHeight);
        }
    return false;
}

function rulerTouchEnd(e){
    setTimeout("blockSwipe = false",100);
}