
let div = document.querySelectorAll(".myclass")
$(document).ready(function () {
    $('.box').hover(function () {
        $(this).addClass("shadoww")
        $(this).click(function(){

        
        })


    }


        , function () {


            $(this).removeClass("shadoww")
            
          
            

        })




   $('.box').click(function () {
    
       
     
            $(this).toggleClass('goo')
           

        })
        $('.card-body').click(function () {
            $(this).children('.paras').fadeIn(600)
        })

        $('.box').mouseleave(function () {
            $('.card-body').mouseleave(function () {
                $(this).children('.paras').hide(1)
            })
       
     
            $(this).removeClass('goo')

        })

      
    
    
           
             
                




    function con() {

        $('.container').removeClass('container').addClass('newcontainer');


    }

    function con2() {

        $('.newcontainer').removeClass('newcontainer').addClass('container');


    }
    $(window).scroll(function () {
        if ($(document).scrollTop() > 345) {
            con()


        }
        else if ($(document).scrollTop() < 170) {
            con2()

        }
    })



    $('#data').hide()

    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            $('.about').addClass("abo")
            $('#data').fadeIn(3000)


        }




    })
    $('#abt').click(function(){
        $('#data').hide()
    
        $('#data').fadeIn(3000)
         


    })

})

