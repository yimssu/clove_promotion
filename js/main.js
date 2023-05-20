var lastScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {
    var scrollTop = $(this).scrollTop();

    setTimeout(() => {
        $('#section01 .title02_01').addClass('on');
        $('#section01 .circle01_01').addClass('on');
        $('#section01 .circle02_01').addClass('on');
        $('#section01 .circle03_01').addClass('on');
    },200)
    setTimeout(() => {
        $('#section01 .title01_01').addClass('on');
    },400)

    $("#container").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 500){
            $('.image02_02').addClass('on');
        }
        if(scrollTop >= 400){
            $('.image03_02').addClass('on');
        }
        if(scrollTop >= 1800){
            $('.image04_02').addClass('on');
        }
        if(scrollTop >= 2000){
            $('.title02_02').addClass('on');
        }
        if(scrollTop >= 2300){
            $('.text_02').addClass('on');
        }
        if(scrollTop >= 3070){
            $('.title02_03').addClass('on');
        }
        if(scrollTop >= 3560){
            $('.image01_03').addClass('on');
        }
        if(scrollTop >= 3580){
            $('.survey02_03').addClass('on');
        }
        if(scrollTop >= 3780){
            $('.image02_03').addClass('on');
        }
        if(scrollTop >= 3800){
            $('.survey04_03').addClass('on');
        }
        if(scrollTop >= 3460){
            $('.interview01_03').addClass('on');
        }
        if(scrollTop >= 3480){
            $('.interview02_03').addClass('on');
        }
        if(scrollTop >= 3640){
            $('.interview03_03').addClass('on');
        }
        if(scrollTop >= 3660){
            $('.interview04_03').addClass('on');
        }
        if(scrollTop >= 4400){
            $('.image03_03').addClass('on');
        }
        if(scrollTop >= 4600){
            $('.problem01_03').addClass('on');
        }
        if(scrollTop >= 4688){
            $('.problem02_03').addClass('on');
        }
        if(scrollTop >= 4920){
            $('.image04_03').addClass('on');
        }
        if(scrollTop >= 5360){
            $('.solution01_03').addClass('on');
        }
        if(scrollTop >= 5470){
            $('.solution02_03').addClass('on');
        }
        if(scrollTop >= 6300){
            $('.text_04').addClass('on');
        }
        if(scrollTop >= 6077){
            $('.image01_04').addClass('on');
        }
        if(scrollTop >= 6077){
            $('.image02_04').addClass('on');
        }
        if(scrollTop >= 7040){
            $('.title02_05').addClass('on');
        }
        if(scrollTop >= 7370){
            $('.typo02_05').addClass('on');
        }
        if(scrollTop >= 7570){
            $('.typo01_05').addClass('on');
        }
        if(scrollTop >= 8050){
            $('.color_05').addClass('on');
        }
        if(scrollTop >= 8850){
            $('.image01_06').addClass('on');
        }
        if(scrollTop >= 9320){
            $('.mockup01_06').addClass('on');
        }
        if(scrollTop >= 9900){
            $('.text01_06').addClass('on');
        }
        if(scrollTop >= 10500){
            $('.mockup02_06').addClass('on');
        }
        if(scrollTop >= 11000){
            $('.text03_06').addClass('on');
        }
        if(scrollTop >= 11500){
            $('.mockup03_06').addClass('on');
        }
        if(scrollTop >= 12000){
            $('.mockup04_06').addClass('on');
        }

        if(scrollTop >= 13380){
            $('.image04_06').addClass('on');
        }
        if(scrollTop >= 13620){
            $('.image03_06').addClass('on');
        }
        if(scrollTop >= 14344){
            $('.title02_07').addClass('on');
        }
        if(scrollTop >= 14560){
            $('.mockup002_07').addClass('on');
        }
        if(scrollTop >= 14560){
            $('.mockup003_07').addClass('on');
        }
        if(scrollTop >= 14560){
            $('.mockup003_07').addClass('on');
        }
        if(scrollTop >= 14560){
            $('.mockup003_07').addClass('on');
        }
        if(scrollTop >= 15390){
            $('.mockup02_07').addClass('on');
        }
        if(scrollTop >= 15990){
            $('.text02_07').addClass('on');
        }
        if(scrollTop >= 16606){
            $('.mockup03_07').addClass('on');
        }
        if(scrollTop >= 17071){
            $('.image01_07').addClass('on');
        }
        if(scrollTop >= 17580){
            $('.image02_07').addClass('on');
        }
        if(scrollTop >= 18565){
            $('.image_08').addClass('on');
        }
        if(scrollTop >= 18565){
            $('.title01_08').addClass('on');
        } 
        if(scrollTop >= 18565){
            $('.title02_08').addClass('on');
        } 
        if(scrollTop >= 18565){
            $('.title03_08').addClass('on');
        }


        if(scrollTop >= 18555){
            $('.line01_08').addClass('on');
        }
        if(scrollTop >= 18565){
            $('.line02_08').addClass('on');
        }
        if(scrollTop >= 18565){
            $('.line03_08').addClass('on');
        }
        if(scrollTop >= 18565){
            $('.line04_08').addClass('on');
        }
        if(scrollTop >= 18565){
            $('.line05_08').addClass('on');
        }


        if(scrollTop >= 19940){
            $('.title01_footer').addClass('on');
        }
        if(scrollTop >= 20000){
            $('.title02_footer').addClass('on');
        }




        if(scrollTop >= 100) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.
            if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { /* &&: AND, 두 값이 모두 참이어야 값이 출력 */
                /* 화면에 나오지 않을 때: top값을 마이너스로 요소가 보이지 않게 사용해야함 */
                $("#header").css("top","-100px");
            } else {
                $("#header").css("top","0px");
            }
    
            lastScrollTop = scrollTop;
        } 
    




    });



    gsap.to(".background_text_06", {
        // 사진 가로 크기
        x: -1295, 
        ease: "none",
        duration: 20,
        repeat: -1,
      });
      




















})


