var PDFObject=function(e){if(!e||!e.url)return!1;var n="1.2",t=e.id||!1,r=e.width||"100%",i=e.height||"100%",a=e.pdfOpenParams,o,c,u=function(){var e=null;return window.ActiveXObject&&(e=new ActiveXObject("AcroPDF.PDF"),e||(e=new ActiveXObject("PDF.PdfCtrl")),null!==e)?!0:!1},d=function(){var e,n=navigator.plugins,t=n.length,r=/Adobe Reader|Adobe PDF|Acrobat/gi;for(e=0;t>e;e++)if(r.test(n[e].name))return!0;return!1},l=function(){var e=navigator.mimeTypes["application/pdf"];return e&&e.enabledPlugin},f=function(){var e=null;return d()||u()?e="Adobe":l()&&(e="generic"),e},s=function(){var e=document.getElementsByTagName("html");if(!e)return!1;var n=e[0].style,t=document.body.style;n.height="100%",n.overflow="hidden",t.margin="0",t.padding="0",t.height="100%",t.overflow="hidden"},h=function(e){var n="",t;if(!e)return n;for(t in e)e.hasOwnProperty(t)&&(n+=t+"=",n+="search"===t?encodeURI(e[t]):e[t],n+="&");return n.slice(0,n.length-1)},b=function(e){var u=null;switch(e){case"url":u=o;break;case"id":u=t;break;case"width":u=r;break;case"height":u=i;break;case"pdfOpenParams":u=a;break;case"pluginTypeFound":u=c;break;case"pdfobjectversion":u=n}return u},g=function(e){if(!c)return!1;var n=null;if(e){if(n=e.nodeType&&1===e.nodeType?e:document.getElementById(e),!n)return!1}else n=document.body,s(),r="100%",i="100%";return n.innerHTML='<object	data="'+o+'" type="application/pdf" width="'+r+'" height="'+i+'"></object>',n.getElementsByTagName("object")[0]};return o=encodeURI(e.url)+"#"+h(a),c=f(),this.get=function(e){return b(e)},this.embed=function(e){return g(e)},this};