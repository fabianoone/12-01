function abreMenu() {		
    $('#boxxx').toggle('slide');
    $('.mini-submenu').hide();

} 

function fechaMenu(){
    $('#boxxx').hide();
    $('.mini-submenu').fadeIn();	
}
function goBack() {
    window.history.back();
}
function goHome(){
    window.location = '../diapositive1.html';
}


function appMenu(){

    var myContentMenu = '<nav class="navbar row"><div class="row"><div id="back-link" class="col-sm-1"><a class="back-link-btn" onclick="goBack()" style="display: block;cursor: pointer;float: left;"> <span class="back-link-btn fa fa-arrow-circle-o-left"></span></a> </div> <div class="col-sm-4 col-md-3 sidebar"> <div class="mini-submenu" onclick="abreMenu()"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </div> <div id="boxxx" class="list-group menu-box"> <span class="list-group-item active">Título da aba <span onclick="fechaMenu()" class="pull-right" id="slide-submenu"> <i class="fa fa-times"></i> </span> </span> <div id="header_menu" class="produtos"> </div> </div> </div> </div></nav>';
    document.getElementById("appMenu").innerHTML = myContentMenu;
    appMenuList();
}

function appMenuList(){
    fctBrowseDirectory("produtos") ;
    var html1 = "";
    if (env_Browse_Directory == 'Arquivo não encontrado'){
    }
    else{
        var jsonRetour = decodeURI(env_Browse_Directory) ;
        var jsArray = JSON.parse(jsonRetour);
        for(var i = 0 ; i < jsArray.FILES.length ; i++){
            var fileName = jsArray.FILES[i].FILE;
            var fileNameSplitted = fileName.split(separator);
            html1 += '<a href="produtos/'+encodeURI(fileName)+'" class="list-group-item"><i class="fa fa-caret-right"></i> '+fileNameSplitted[1].replace(".pdf","")+'</a>';
            //listing.push(new File(fileNameSplitted[0],fileNameSplitted[1]),fileName);
        }
    }

    $("#header_menu").html(html1);
}