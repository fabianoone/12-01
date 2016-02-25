/*
 Copyright (c) 2013, MASAO, All rights reserved.
 
 Redistribution and use in source and binary forms, with or without 
 modification, are permitted provided that the following conditions 
 are met:
 
 * Redistributions of source code must retain the above copyright 
 notice, this list of conditions and the following disclaimer.
 
 * Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in the 
 documentation and/or other materials provided with the distribution.
 
 * Neither the name of the author nor the names of its 
 contributors may be used to endorse or promote products derived from 
 this software without specific prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" 
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
 ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 POSSIBILITY OF SUCH DAMAGE.
 */

function fctGET(pstrVarName)
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "js-frame:fctGET:"+pstrVarName+"::");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

function fctSET(pstrVarName, pstrVarValue)
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "js-frame:fctSET:"+pstrVarName+":"+pstrVarValue+":");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

function fctNextPage()
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "js-frame:fctNextPage:::");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

function fctPrevPage()
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "js-frame:fctPrevPage:::");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

function fctBrowseDirectory(pstrPath)
{
	var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "js-frame:fctBrowseDirectory:"+pstrPath+"::");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}

function fctOpenDocument(pstrPath)
{
	var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "js-frame:fctOpenDocument:"+pstrPath+"::");
    document.documentElement.appendChild(iframe);
    iframe.parentNode.removeChild(iframe);
    iframe = null;
}	

function fctSwipeRtoL()
{
    //alert('Fonction Swipe, à surcharger');
}

function fctSwipeLtoR()
{
   // alert('Fonction Swipe, à surcharger');
}

function setVar(pstrVarName, pstrVarValue)
{
    eval(pstrVarName + "=\"" + pstrVarValue+"\";");
}
