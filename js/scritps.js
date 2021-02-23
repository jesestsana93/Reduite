$(function () {
    /*-----------------------------------------------------------
        1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/
    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {
        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /*-----------------------------------------
    2. CABECERA ANIMADA QUE CAMBIA DE COLOR
   --------------------------------------------*/
    $(function (){
        $(window).scroll(function () {
            var nav = $('.encabezado');
            var logotipo = $('.logo');

            if ($(this).scrollTop() > $("#que-es-reduite").offset().top) {
                nav.addClass("encabezado-color");
                $('.navbar-light .navbar-nav .nav-link').css('background','#1E1E1E');
                $('.navbar-light .navbar-nav .nav-link').css('color','#8DFFF4');
                $('.navbar-light .navbar-nav .nav-link.active').css('color','#ACB3DF');
                logotipo.addClass("logo-color");
                $('.fab').css('color','#8DFFF4');
                $('.boton-menu').css('color','#8DFFF4');
            } else {
                nav.removeClass("encabezado-color");
                $('.navbar-light .navbar-nav .nav-link').css('background','#8DFFF4');
                $('.navbar-light .navbar-nav .nav-link').css('color','#848484');
                $('.navbar-light .navbar-nav .nav-link.active').css('color','#242D63');
                logotipo.removeClass("logo-color");
                $('.fab').css('color','#242D63');
                $('.boton-menu').css('color','#000');
            }
        });
    });
   

    /*-----------------------------------------------------------------------
    3. CONFIGURACION DE SLICK PARA LA PARTE DE ALGUNOS DE NUESTROS CLIENTES
    -------------------------------------------------------------------------*/
    $('.servicios').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [{
                //Vista lg >=992px
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                //Vista md >=768px
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                //Vista sm >=576px
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-prev"></button>',
                    nextArrow: '<button type="button" class="slick-next"></button>',
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

    /*-----------------------------------------------------
    4. INICIANDO "page-scroll-to-id"
    -------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 0,
        highlightClass: 'active'
    });

    /*------------------------------------------------------------
    5. INICIANDO WOW.js para las animaciones en la página
    --------------------------------------------------------------*/
    new WOW().init();

});