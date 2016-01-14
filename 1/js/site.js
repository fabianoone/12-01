var caminho,
    cam,
    subLink,
    contaLink;

function startApp ()
{
    init_body();
    subDir();
}


function subDir ()
{

    caminho =  window.location.pathname.split('/');
    cam =caminho.length;

    contaLink=cam-2;
    if(caminho[contaLink] == "produtos"){
        subLink = '';
    }  else {
        subLink = 'produtos/';
    }


   $('#dataHrefLinks a').click(function(){
       var thislink = this.id;
       var pegalink = $('#'+thislink).attr("data-href");
       window.location.href=subLink+pegalink;
   })
}

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

    var myContentMenu = '<nav class="navbar col-sm-6"><div class=""><div id="back-link" class="col-sm-1"><a class="back-link-btn" onclick="goBack()" style="display: block;cursor: pointer;float: left;"> <span class="back-link-btn fa fa-arrow-circle-o-left"></span></a> </div> <div class="col-sm-6 sidebar"> <div class="mini-submenu" onclick="abreMenu()"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </div> <div id="boxxx" class="list-group menu-box"> <span class="list-group-item active">Título da aba <span onclick="fechaMenu()" class="pull-right" id="slide-submenu"> <i class="fa fa-times"></i> </span> </span> <div id="header_menu" class="produtos"> </div> </div> </div> </div></nav>';

    document.getElementById("appMenu").innerHTML = myContentMenu;
    //appMenuList();

    clientSideInclude("header_menu","navegacao.html");

}
function menuInterna(){

    var myContentMenu = '<nav class="navbar col-sm-6"><div class=""><div id="back-link" class="col-sm-1"><a class="back-link-btn" onclick="goBack()" style="display: block;cursor: pointer;float: left;"> <span class="back-link-btn fa fa-arrow-circle-o-left"></span></a> </div> <div class="col-sm-6 sidebar"> <div class="mini-submenu" onclick="abreMenu()"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </div> <div id="boxxx" class="list-group menu-box"> <span class="list-group-item active">Título da aba <span onclick="fechaMenu()" class="pull-right" id="slide-submenu"> <i class="fa fa-times"></i> </span> </span> <div id="header_menu" class="produtos"> </div> </div> </div> </div></nav>';

    document.getElementById("appMenu").innerHTML = myContentMenu;
    //appMenuList();

    clientSideInclude("header_menu","../navegacao.html");

    subDir();
}

function fctBrowseDirectory(pstrPath)
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "js-frame:fctBrowseDirectory:"+pstrPath+"::");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}


function listarAnuncios(){
    fctBrowseDirectory("anuncios") ;
    var html = "";
    if (env_Browse_Directory == 'Arquivo não encontrado'){
    }
    else{
        var jsonRetour = decodeURI(env_Browse_Directory) ;
        var jsArray = JSON.parse(jsonRetour);
        for(var i = 0 ; i < jsArray.FILES.length ; i++){
            var fileName = jsArray.FILES[i].FILE;
            var fileNameSplitted = fileName.split(separator);
            html += "<li onClick=\"showDoc('anuncios/"+encodeURI(fileName)+"')\"><span class=\"title\">"+fileNameSplitted[0]+"</span>&nbsp;&nbsp;<span class=\"subtitle\">"+fileNameSplitted[1].replace(".pdf","")+"</span></li>";
            //listing.push(new File(fileNameSplitted[0],fileNameSplitted[1]),fileName);
        }
    }

    $("#produits-list").html(html);
}


function linkAnuncios()
{
    window.location.assign("anuncios.html");
    listarAnuncios();
}
//
//function appMenuList(){
//    fctBrowseDirectory("anuncios") ;
//    var html1 = "";
//    if (env_Browse_Directory == 'Arquivo não encontrado'){
//    }
//    else{
//
//        var jsonRetour = decodeURI(env_Browse_Directory) ;
//        /* OK */
//        //var jsArray = JSON.parse(jsonRetour);
//        //
//        //for(var i = 0 ; i < jsArray.FILES.length ; i++){
//        //    var fileName = jsArray.FILES[i].FILE;
//        //    var fileNameSplitted = fileName.split(separator);
//        //    html1 += '<a href="produtos/'+encodeURI(fileName)+'" class="list-group-item"><i class="fa fa-caret-right"></i> '+fileNameSplitted[1].replace(".pdf","")+'</a>';
//        //    //listing.push(new File(fileNameSplitted[0],fileNameSplitted[1]),fileName);
//        //}
//
//
//        var arr = JSON.parse(jsonRetour);
//        var i;
//        var out = "<table>";
//
//        for(i = 0; i < arr.length; i++) {
//            out += "<tr><td>" +
//                arr[i].FILE +
//                "</td></tr>";
//        }
//        out += "</table>";
//        document.getElementById("#header_menu").innerHTML = out;
//
//    }
//
//    $("#header_menu").html(html1);
//}