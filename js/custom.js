$(function () {

    $('.main_container').fullpage({
        // anchors: ['intro', 'service', 'center', 'news', 'video', 'customer'],
        anchors: ['intro', 'service', 'center', 'news',],
        scrollOverflow: false,
        afterLoad: function (o, ds) {
            let idx = ds.index;

            $('.section').removeClass('on');
            $('.section').eq(idx).addClass('on');

            $('.menu_lnk ul li').removeClass('on');
            $('.menu_lnk ul li').eq(idx).addClass('on');

            if (idx == 2 || idx == 3) {
                $('.header').addClass('on')
                $('.menu_lnk').addClass('on')
            } else {
                $('.header').removeClass('on')
                $('.menu_lnk').removeClass('on')

            }
        }
    });

});


$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
});

$(function () {
    const mcs1 = new Swiper('.main_center_slide01', {
        loop: true,
        on: {
            slideChangeTransitionStart: function () {
                $('.main_center .tabcon_wrap .tabcon .arrows').removeClass('on')
            },
            slideChangeTransitionEnd: function () {
                // console.log(this.realIndex);
                $('.main_center .tabcon_menu01 a').removeClass('on');
                $('.main_center .tabcon_menu01 li').eq(this.realIndex).find('a').addClass('on')

                $('.main_center .tabcon_wrap .tabcon .arrows').addClass('on')

            }
        }
    });
    const mcs2 = new Swiper('.main_center_slide02', {
        loop: true,
        on: {
            slideChangeTransitionStart: function () {
                $('.main_center .tabcon_wrap .tabcon .arrows').removeClass('on')
            },

            slideChangeTransitionEnd: function () {
                // console.log(this.realIndex);
                $('.main_center .tabcon_menu02 a').removeClass('on');
                $('.main_center .tabcon_menu02 li').eq(this.realIndex).find('a').addClass('on')

                $('.main_center .tabcon_wrap .tabcon .arrows').addClass('on')
            }
        }
    });


    $('.main_center_tabcon01 .arrows .prev').on('click', function () {
        mcs1.slidePrev();
    })
    $('.main_center_tabcon01 .arrows .next').on('click', function () {
        mcs1.slideNext();
    })
    $('.main_center_tabcon02 .arrows .prev').on('click', function () {
        mcs2.slidePrev();
    })
    $('.main_center_tabcon02 .arrows .next').on('click', function () {
        mcs2.slideNext();
    })

    $('.main_center .tabcon_all_menu a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();

        $('.main_center .tabcon_all_menu a').removeClass('on')
        $(this).addClass('on')

        $('.main_center .tabcon_wrap .tabcon').removeClass('on');
        $('.main_center .tabcon_wrap .tabcon').eq(idx).addClass('on');
    })


    $('.main_center .tabcon_menu01 a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();


        // $('.main_center .tabcon_menu01 a').removeClass('on')
        // $(this).addClass('on');

        mcs1.slideToLoop(idx)
    })
    $('.main_center .tabcon_menu02 a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();

        // $('.main_center .tabcon_menu02 a').removeClass('on')
        // $(this).addClass('on');

        mcs2.slideToLoop(idx)
    })
})