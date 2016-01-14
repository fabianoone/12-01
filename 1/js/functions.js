var showMenu = 0,
    scrollContent,
    scrollNav,
    currID=0,
    currPage=1,
    max_Frame=1,
    transition=0,
    currPageCat,
    numdoigts =0,
    lastTimeZoom = 0,
    blockSwipe = false;

var env_Browse_Directory = "" ;
var separator = "_"; //Ca sera le séparateur à changer

function fileListNouveautes(){
    fctBrowseDirectory("novidades") ;
    var html = "";
    if (env_Browse_Directory == 'Arquivo não encontrado'){
    }
    else{
        var jsonRetour = decodeURI(env_Browse_Directory) ;
        var jsArray = JSON.parse(jsonRetour);
        for(var i = 0 ; i < jsArray.FILES.length ; i++){
            var fileName = jsArray.FILES[i].FILE;
            var fileNameSplitted = fileName.split(separator);
            html += "<li onClick=\"showDoc('novidades/"+encodeURI(fileName)+"')\"><span class=\"title\">"+fileNameSplitted[0]+"</span>&nbsp;&nbsp;<span class=\"subtitle\">"+fileNameSplitted[1].replace(".pdf","")+"</span></li>";
            //listing.push(new File(fileNameSplitted[0],fileNameSplitted[1]),fileName);
        }
    }
    
    $("#nouveautes-list").html(html);
}

function fileListProduits(){
    fctBrowseDirectory("produtos_lancamento") ;
    var html = "";
    if (env_Browse_Directory == 'Arquivo não encontrado'){
    }
    else{
        var jsonRetour = decodeURI(env_Browse_Directory) ;
        var jsArray = JSON.parse(jsonRetour);
        for(var i = 0 ; i < jsArray.FILES.length ; i++){
            var fileName = jsArray.FILES[i].FILE;
            var fileNameSplitted = fileName.split(separator);
            html += "<li onClick=\"showDoc('produtos_lancamento/"+encodeURI(fileName)+"')\"><span class=\"title\">"+fileNameSplitted[0]+"</span>&nbsp;&nbsp;<span class=\"subtitle\">"+fileNameSplitted[1].replace(".pdf","")+"</span></li>";
            //listing.push(new File(fileNameSplitted[0],fileNameSplitted[1]),fileName);
        }
    }

    $("#produits-list").html(html);
}
function showDoc(path){
    fctOpenDocument(path);
}
    
preventDefaultScroll = function(evt){
                                        numdoigts = evt.touches.length;
                                        if(evt.touches.length==1){
                                            //evt.preventDefault();
                                            return false;
                                        }
                                        else{
                                            return true;
                                        }
                                    };

window.document.addEventListener('touchmove', preventDefaultScroll, false);

window.document.addEventListener('touchend',
                                 function(e){
                                             zoomHandler();
                                            },
                                 false);
//document.addEventListener('DOMContentLoaded', loaded, false);

function isZooming(){
    //alert(document.width/window.innerWidth);
    if(document.width/window.innerWidth == 1) return false;
    
    else return true;
    }




function zoomHandler(){
    isZoomingVar = isZooming();
    if(!blockSwipe && isZoomingVar){
        blockSwipe = true;
        //alert("blocSwipe=true");
    }
    if(blockSwipe && !isZoomingVar)
        setTimeout("blockSwipe=false;",200);
}





function clientSideInclude(id, url){
    var req = false;
    // For Safari, Firefox, and other non-MS browsers
    if (window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch (e) {
            req = false;
        }
    } else if (window.ActiveXObject) {
        // For Internet Explorer on Windows
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                req = false;
            }
        }
    }
    var element = document.getElementById(id);
    if (!element) {
        alert("Bad id " + id + 
        "passed to clientSideInclude." +
        "You need a div or span element " +
        "with this id in your page.");
        return;
    }
    if (req) {
        // Synchronous request, wait till we have it all
        req.open('GET', url, false);
        req.send(null);
        element.innerHTML = req.responseText;
    } else {
        element.innerHTML =
        "Sorry, your browser does not support " +
        "XMLHTTPRequest objects. This page requires " +
        "Internet Explorer 5 or better for Windows, " +
        "or Firefox for any system, or Safari. Other " +
        "compatible browsers may also exist.";
    }
    
}

function changeSlide(newFrame){
    if(!blockSwipe && !isZooming() && numdoigts==1){
        var ref = newFrame;
        loadSlide(ref, newFrame);
        animateSlide("cat");
        removeSlide();
        currPage = newFrame;
        currID++;
        }
}


function loadSlide(ref, newFrame)
{
    //alert("load");
    var slide = document.getElementById("slide");
    var currSlide = document.getElementById(currID);
    var newSlide = document.createElement('div');
    newSlide.id = parseInt(currID+1);
    newSlide.className = "slide";
    newSlide.style.cssText = "position:absolute";
    slide.insertBefore(newSlide,currSlide);
    clientSideInclude(parseInt(currID+1),ref+".html");
    //alert("end load");
}

function animateSlide(move){
    //alert("animate");
    if(move == "next"){
        setTimeout('document.getElementById("'+currID+'").style.webkitTransform="translate(-1024px)";',200);
    }
    else if(move == "prev"){
        setTimeout('document.getElementById("'+currID+'").style.webkitTransform="translate(1024px)";',200);
    }
    else if(move == "cat"){
        setTimeout('document.getElementById("'+currID+'").style.opacity=0;',200);
    }
    //alert("end animate");
    
}

function removeSlide(){
    //alert("remove");
    setTimeout('document.getElementById("slide").removeChild(document.getElementById("'+currID+'"));',1300);
    //alert("end remove");
}

function laterSwipe(move){
    setTimeout("swipe_event('"+move+"')",50);
}


function swipe_event(move){
    if(!blockSwipe && !isZooming() && numdoigts==1)
    {
        
        if(move == "next" && currPage < max_Frame)
        {
            //alert(move);
            var currPageTemp = currPage;
            currPage++;
            var ref = parseInt(currPageTemp+1);
            loadSlide(ref,parseInt(currPageTemp+1));
            animateSlide(move);
            removeSlide();
            currID++;
        }
        else if(move == "prev" && currPage > 1)
        {
            //alert(move);
            var currPageTemp = currPage;
            currPage--;
            var ref = parseInt(currPageTemp-1);
            loadSlide(ref,parseInt(currPageTemp-1));
            animateSlide(move);
            removeSlide();
            currID++;
        }
    }
}


function init_body(){
     $('#slide').append('<div id="'+currID+'" class="slide" style="position:absolute;"></div>');
    clientSideInclude(currID,"1.html");
    $('.main').doubletap(
                          function(event){
                            //alert("doubletap");
                            if(blockSwipe){
                            setTimeout('blockSwipe = false',200);
                         }
                          },
                          function(event){
                          }, 
                          250
                          );
    appMenu();
}
function fctSwipeRtoL()
{
    laterSwipe("next");
}
function fctSwipeLtoR()
{
    laterSwipe("prev");
}
function Menu(){
    if(currPage>2 && currPage<41){
        var menuImg = document.getElementById("menu-img");
        var menubar = document.getElementById("menubar");
        var menu = document.getElementById("menu");
        if(showMenu == 0){
            menubar.style.bottom = '0px';
            showMenu=1;
            menu.style.height = '768px';
        }
        else{
            menu.style.height = '100px';
            menubar.style.bottom = '-53px';
            showMenu=0;
        }
    }
}

function launch_popup(popup,type,nb_graph,nb_items,height,width){
    //alert(popup);
    clientSideInclude("popup",popup);
    document.getElementById("popup").style.visibility = "visible";
    document.getElementById("popup").style.opacity = "1";
    if(type != "simple"){
        if(type == "courbe"){
            setTimeout("document.getElementById('courbe').style.width = '"+width+"px';",500);
            if(nb_items != 0){
                if(nb_items ==1)
                    setTimeout("document.getElementById('bloc').style.opacity='1';",2500);
                else{
                    setTimeout("document.getElementById('bloc-1').style.opacity='1';",1500);
                    setTimeout("document.getElementById('bloc-2').style.opacity='1';",2500);
                }
            }
        }
        else if(type == 'batonnet-v'){
            for(i = 1 ; i <= nb_items ; i++){
                var batonnet_timeout = 500;
                var bloc_timeout = 2000;
                //alert("batonnet_timeout = "+batonnet_timeout+" | bloc_timeout"+bloc_timeout);
                setTimeout("document.getElementById('batonnet-v-"+i+"').style.height = '"+height+"px';",batonnet_timeout);
                setTimeout("var bloc = document.getElementById('bloc-"+i+"').style.opacity='1';",bloc_timeout);
            }
        }
        else if(type == 'batonnet-h'){
            for(i = 1 ; i <= nb_items ; i++){
                var batonnet_timeout = 500;
                var bloc_timeout = 2000;
                //alert("batonnet_timeout = "+batonnet_timeout+" | bloc_timeout"+bloc_timeout);
                setTimeout("document.getElementById('batonnet-h-"+i+"').style.width = '"+width+"px';",batonnet_timeout);
                setTimeout("var bloc = document.getElementById('bloc-"+i+"').style.opacity='1';",bloc_timeout);
            }
        }
    }
}

function close_popup(){
    document.getElementById("popup").style.opacity = "0";
    video = document.getElementById('video');
    if(video !=null){
        video.style.visibility = 'hidden';
        clientSideInclude('video','none.html');
        }
    setTimeout("document.getElementById('popup').style.visibility = 'hidden';clientSideInclude('popup','none.html')",500);
}