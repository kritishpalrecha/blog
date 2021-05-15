
let div = document.querySelectorAll(".myclass")
$(document).ready(function () {
    $('.card-body').hover(function () {
        $(this).children('.paras').fadeIn(600)
    }


        , function () {


            $(this).children('.paras').hide(1)

        })





    function con() {

        $('.container').removeClass('container').addClass('newcontainer');


    }

    function con2() {

        $('.newcontainer').removeClass('newcontainer').addClass('container');


    }
    $(window).scroll(function () {
        if ($(document).scrollTop() > 305) {
            con()


        }
        else if ($(document).scrollTop() < 290) {
            con2()

        }
    })



    $('#data').hide()

    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            $('.about').animate({ width: '60vw' }, 2000)
            $('#data').fadeIn(3000)


        }




    })
    $('#abt').click(function(){
        $('#data').hide()
    
        $('#data').fadeIn(2000)
         


    })

})

