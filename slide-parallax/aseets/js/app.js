

$(function () {

    $(".decoration-button-1").hover(function () {
        $(".decoration-button-1-left-line").stop().css({ 'top': '', 'bottom': '0' });
        $(".decoration-button-1-left-line").stop().animate({ 'height': '0%' }, 300, function () {
            $(".decoration-button-1-bottom-line").stop().css({ 'left': '', 'right': '0' });
            $(".decoration-button-1-bottom-line").stop().animate({ 'width': '0%' }, 300, function () {
                $(".decoration-button-1-right-line").stop().css({ 'top': '0', 'bottom': '' });
                $(".decoration-button-1-right-line").stop().animate({ 'height': '0%' }, 300, function () {
                    $(".decoration-button-1-top-line").stop().css({ 'left': '0', 'right': '' });
                    $(".decoration-button-1-top-line").stop().animate({ 'width': '0%' }, 300);
                });
            });
        });
    }, function () {
        $(".decoration-button-1-top-line").stop().animate({ 'width': '100%' }, 300, function () {
            $(".decoration-button-1-right-line").stop().animate({ 'height': '100%' }, 300, function () {
                $(".decoration-button-1-bottom-line").stop().animate({ 'width': '100%' }, 300, function () {
                    $(".decoration-button-1-left-line").stop().animate({ 'height': '100%' }, 300)
                });
            });
        });
    });

})


$(function () {

    boxLineAnime();
    function boxLine() {
        setInterval(function () {
            boxLineAnime();
        }, 4000);
    }
    boxLine();


    function boxLineAnime() {
        $(".box-line-top").css({ 'left': '0', 'right': '' });
        $(".box-line-top").animate({ 'width': '100%' }, 1000, function () {
            $(".box-line-top").css({ 'left': '', 'right': '0' });
            $(".box-line-top").animate({ 'width': '0%' }, 1000)
            $(".box-line-right").css({ 'top': '0' });
            $(".box-line-right").animate({ 'height': '100%' }, 1000, function () {
                $(".box-line-right").css({ 'top': '', 'bottom': '0' });
                $(".box-line-right").animate({ 'height': '0%' }, 1000);
                $(".box-line-bottom").css({ 'left': '', 'right': '0' });
                $(".box-line-bottom").animate({ 'width': '100%' }, 1000, function () {
                    $(".box-line-bottom").css({ 'left': '0' });
                    $(".box-line-bottom").animate({ 'width': '0%' }, 1000);
                    $(".box-line-left").css({ 'top': '', 'bottom': '0' });
                    $(".box-line-left").animate({ 'height': '100%' }, 1000, function () {
                        $(".box-line-left").css({ 'top': '0' });
                        $(".box-line-left").animate({ 'height': '0%' }, 1000)
                    })
                })
            });
        });
    }



})


$(function () {

    waveLine();
    function waveLine() {
        let length = $(".wave-line").length;
        for (let i = 0; i < length; i++) {
            $(".wave-line").eq(i).delay(i * 100).animate({ 'height': i * 10 + 'px' }, 100)
        }
    }

    $(".wave-button").click(function () {
        $(".wave-line").css({ 'height': '0px' })
        waveLine();
    })

})





$(window).scroll(function () {
    sss();
});

function sss() {
    let windowHeight = $(window).height();
    let scrollNow = $(window).scrollTop();
    let contentOffset = $(".content").offset().top;
    let test = contentOffset - windowHeight

    if (scrollNow >= test) {
        let eventTest = scrollNow - test;
        $(".decoration-1-1").css({
            'top': - eventTest * 5 / 10 + 400 + 'px'
        })
        $(".decoration-1-2").css({
            'top': - eventTest * 3 / 10 + 350 + 'px'
        })
        $(".decoration-2-1").css({
            'bottom': eventTest * 3 / 10 - 200 + 'px'
        })
        $(".decoration-2-2").css({
            'bottom': eventTest * 5 / 10 - 250 + 'px'
        })
    }
}

$(function () {

    $(".container").css({
        'width': $(window).width() + 'px',
        'height': $(window).height() + 'px'
    })

    $(".container").mousemove(function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let width = $(window).width();
        let pointWidth = width / 2;
        let height = $(window).height();
        let pointHeight = height / 2;
        console.log(pointWidth - x)
        console.log(pointHeight - y)
        let moovX = pointWidth - x;
        let moovY = pointHeight - y;

        console.log('x軸:' + x);
        console.log('y軸' + y);

        let left = $(".container").width() * 5 / 10;
        let top = $(".container").height() * 5 / 10;

        $(".output-1").css({
            'top': moovY / 10 + top + 'px',
            'left': moovX / 10 + left + 'px'
        });
        $(".output-2").css({
            'top': moovY / 20 + top + 'px',
            'left': moovX / 20 + left + 'px'
        });
        $(".output-3").css({
            'top': moovY / 30 + top + 'px',
            'left': moovX / 30 + left + 'px'
        });
    })


})

$(".count-up").click(function () {
    countUp();
})

function countUp() {

    let num = 0;
    let tgt = 100;
    let speed = 10;
    setInterval(function () {
        if (num <= tgt) {
            $(".count-up-text").html(num);
            num++;
        }
    }, speed)

}
countUp();





$(function () {

    function size() {
        let width = $(window).width();
        let height = $(window).height();
        $(".mouse-moov-parallax").css({
            'width': width,
            'height': height,
        })
        $(".mouse-moov-parallax-img-container").css({
            'width': width * 3 / 10,
            'height': height * 3 / 10
        })
        $(".mouse-moov-parallax-img-container-2").css({
            'width': width * 2 / 10,
            'height': height * 2 / 10
        })
        $(".mouse-moov-parallax-img-container-3").css({
            'width': width * 2.5 / 10,
            'height': height * 2.5 / 10
        })
        $(".mouse-moov-parallax-text-container").eq(0).css({
            'position':'absolute',
            'top':'20%',
            'left':'80%'
        })
        $(".mouse-moov-parallax-text-container").eq(1).css({
            'position':'absolute',
            'top':'80%',
            'left':'0%'
        })
    }
    size();

    function moov() {
        $(".mouse-moov-parallax").mousemove(function (e) {
            let width = $(window).width();
            let height = $(window).height();
            let centerWidth = width / 2;
            let centerHeight = height / 2;
            let x = e.clientX;
            let y = e.clientY;
            let moovX = centerWidth - x;
            let moovY = centerHeight - y;
            let top = $(".mouse-moov-parallax").height() * 1 / 2;
            let left = $(".mouse-moov-parallax").width() * 1 / 2;
            $(".mouse-moov-parallax-img-container").eq(0).animate({
                'top': moovY * 1 / 20 + top + 'px',
                'left': moovX * 1 / 20 + left + 'px',
            },10);
            let top2 = $(".mouse-moov-parallax").height() * 1 / 3;
            let left2 = $(".mouse-moov-parallax").width() * 1 / 3;
            $(".mouse-moov-parallax-img-container-2").eq(0).animate({
                'top': moovY * 1 / 40 + top2 + 'px',
                'left': moovX * 1 / 40 + left2 +  'px'
            },10);
            let top3 = $(".mouse-moov-parallax").height() * 7 / 10;
            let left3 = $(".mouse-moov-parallax").width() * 7 / 10;
            $(".mouse-moov-parallax-img-container-3").eq(0).animate({
                'top': -moovY * 1 / 10 + top3 + 'px',
                'left': -moovX * 1 / 10 + left3 +  'px'
            },10);
            let textTop1 = $(".mouse-moov-parallax").height() * 2/10;
            let textLeft1 = $(".mouse-moov-parallax").width() *  8/10
            $(".mouse-moov-parallax-text-container").eq(0).css({
                'top':moovY * 1/5 + textTop1 + 'px',
                'left':moovX * 1/5 + textLeft1 + 'px'
            });
            let textTop2 = $(".mouse-moov-parallax").height() * 8/10;
            let textLeft2 = $(".mouse-moov-parallax").width() *  0/10
            $(".mouse-moov-parallax-text-container").eq(1).css({
                'top':-moovY * 1/5 + textTop2 + 'px',
                'left':-moovX * 1/5 + textLeft2 + 'px'
            });
        });
    };
    moov();



})