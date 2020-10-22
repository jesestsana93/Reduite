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
   --------------------------------------------
    $(window).scroll(function () {

        var windowHeight = $(window).height(); //altura de la ventana

        var nav = $('.encabezado');
        var scroll = $(window).scrollTop();
        if (scroll >= windowHeight) {
            nav.addClass("fondo-menu");
        } else{
            nav.removeClass("fondo-menu");
        }
    });
   */

    /*-----------------------------------------------------------------------
    2. CONFIGURACION DE SLICK PARA LA PARTE DE ALGUNOS DE NUESTROS CLIENTES
    -------------------------------------------------------------------------*/
    $('.servicios').slick({
        dots: false,
        infinite: true,
        speed: 800,
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

    /*------------------------------------------------------------
    3. INICIANDO WOW.js para las animaciones en la página
    --------------------------------------------------------------*/
    new WOW().init();

});