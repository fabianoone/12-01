 $(document).ready(function(){
            $(".slidingDiv").hide();
            $(".show_hide").show();

            $('.show_hide').click(function(){
            $(".slidingDiv").slideToggle();
            });
        });

         $(document).ready(function(){
            $("#pesquisa").focus(function(){
                $(".dropdown-menu").css("display", "inline");
            });

        
        // Pdf Link 
            $('.pdflink').click(function(){
                    //$('#iframe').attr('src','');
                    var pdf_doc = $(this).attr('title');
                    $('#iframe').attr('src',pdf_doc);
            })

            $('.close, #myModal').click(function(){
                    $('#iframe').attr('src','');
                })
            })
        
    
        
        /*-- Toggle Menu --*/
        $(function(){

            $('#slide-submenu').on('click',function() {			        
                $(this).closest('.list-group').fadeOut('slide',function(){
                    $('.mini-submenu').fadeIn();	
                });

              });

            $('.mini-submenu').on('click',function(){
                $('#boxxx').toggle('slide');
                $('.mini-submenu').hide();
            });
            $('#catalago').on('click',function(){		
                $('#boxxx').toggle('slide');
                $('.mini-submenu').hide();
            });
        });
        /*-- Fim Toggle Menu --*/


