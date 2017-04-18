$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });

    $('.owl-carousel-1').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    })

    /*header mobile menu*/
    var pull = $('.hamburger'),//блок с кнопкой мобильного меню
        menu = $('.mnu'),//главное меню
        button = pull.find('.hamburger-box');//кнопка показать/скрыть
    menuHeight = menu.height();

    $(pull).on('click', function (e) {//при клике на мобильное меню
        e.preventDefault();//убираем свойство ссылки по умолчанию
        if (button.hasClass('show')) {//при наличии у кнопки активного класса
            button.removeClass('show');//убираем данный класс
            menu.slideUp('fast');//скрываем меню
        } else {//при отсутсвии активного класса
            button.addClass('show');//добовляем его кнопке
            menu.slideDown('fast');//показываем меню
        }
    });
    $(document).on('click', function (e) {//при клике на поле
        if ($(e.target).closest('').length != 1) {//не содержащего навигационную панель
            $('').slideUp('fast');//скрываем меню
            $('.mnu').removeClass('show');//убираем у кнопки активный класс
        }
    });
    /*close header mobile menu*/

    // /*top-form validation*/
    // if (document.getElementById('top-form')) {
    //     var validation = new Validation();
    //     validation.init({
    //         ajax: true,
    //         ajaxUrl: myajax.url,
    //         classItem: "main-form__field",//елемент, который нужно провалидировать
    //         eventElement: '#top-form-submit',//событие по клику кнопки 'Отправить'
    //         items: [//масив объектов
    //             {
    //                 item: 'email', tpl: 'email', tplMsg: 'некорректный e-mail'//объект эл.почта с сообщением о некорректном вводе
    //             },
    //             {
    //                 item: 'name', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
    //             },
    //             {
    //                 item: 'phone', tpl: 'number', tplMsg: 'только цыфры'//объект имя с сообщением о некорректном вводе
    //             },
    //             {
    //                 item: 'obj', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
    //             },
    //             {
    //                 item: 'time', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
    //             }
    //         ],
    //         ajaxSubmitSuccess: function (responseText, err, form) {
    //
    //             var formData = new FormData(form);//объявляем новую FormData
    //             formData.append('action','getmessage');//задаем действие и значение
    //             if (!err) {
    //                 $.ajax({
    //                     url: myajax.url,
    //                     type: "POST",
    //                     data: formData,
    //                     contentType: false,
    //                     processData: false,
    //                     success: function (data) {
    //                         console.log( data );
    //                         if(data.result === 'success'){
    //                             form.reset();
    //                         }else{
    //                             alert('Некорректно заполнено!!')
    //                         }
    //                     }
    //                 });
    //                 return false;
    //             }
    //             return false;
    //         }
    //     });
    // }
    // /*top-form validation*/

});
