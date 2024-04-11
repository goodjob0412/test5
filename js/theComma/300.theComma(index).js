$(document).ready(function(){
    // 배너 초기화 - 0번방꺼 화면에 나타나게 하기
    $('.banner').eq(0).css({left: 0})
    // indi 초기화 - 배너 개수만큼 indi에 line들 넣기
    let bn_length = $('.banner').length;
    for(let i=0; i<bn_length; i++) {
        $('.indi').append(`<div class="line"></div>`);
    }
    $('.line').eq(0).addClass('line_active');


    let bang = 0;
    let bn_timer = 1000
    $('#btn_R').click(function(){
        btn_init() 
        slide('-100%', (bang+1) % bn_length, '100%')
        indi_paging()
    })
    $('#btn_L').click(function(){ 
        btn_init() 
        slide('100%', (bang-1) % bn_length, '-100%')
        indi_paging()
    })
    function btn_init() {
        // 버튼막기
        $('.btn_slide').css({pointerEvents: 'none'})
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents: 'auto'})
        }, bn_timer)
    }
    function slide(o_pos, c_idx, c_pos) { 
        // - 배너 슬라이드 -
        // 나갈판
        $('.banner').eq(bang % bn_length).animate({
            left: o_pos
        }, bn_timer)

        // 들어올판
        $('.banner').eq(c_idx).css({
            left: c_pos
        }).animate({
            left: '0%'
        }, bn_timer)

        bang=c_idx 
    }
    function indi_paging() {
        // 인디케이터 색변경 - slide() 에서 bang값 새로 구한 다음에 실행해야함 
        $('.line').removeClass('line_active')
        $('.line').eq((bang) % bn_length).addClass('line_active')
    } 
    
    // 메인페이지에 best, new 섹션에 각각 기본 8개씩 불러오기
    load_item(0 , 8)
    load_item(1 , 8)

    // 스크롤 위치에 따라 각 섹션의 아이템들 샤샤샥 하기
    let week_o_top = $('#w_raking').offset().top
    let best_o_top = $('#best').offset().top
    let new_o_top = $('#new').offset().top

    console.log("초기 위치: ", best_o_top, new_o_top);

    setTimeout(function(){
        // best_o_top = $('#best').offset().top
        // new_o_top = $('#new').offset().top
        // console.log(best_o_top, new_o_top)
    }, 100)

    // let w_ranking_chk = true;
    // let best_chk = true;
    // let new_chk = true;
    let toChk_arr = new Array($('.toChk').length) ;
    for(let i=0; i<toChk_arr.length; i++) {
        toChk_arr[i]=true
    }
    console.log("toChk: " , toChk_arr)


    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();

        // best_o_top = $('#best').offset().top
        // new_o_top = $('#new').offset().top
        // console.log(best_o_top, new_o_top)

        if(toChk_arr[0] && s_bot - 300 >= week_o_top) {
            item_slideUp($('#w_raking .pos_init'));
            // w_ranking_chk=false; 
            toChk_arr[0]=false;
            best_o_top = $('#best').offset().top
            new_o_top = $('#new').offset().top
        }  
        if(toChk_arr[1] && s_bot - 300 >= best_o_top) {
            item_slideUp($('#best .pos_init'));
            // best_chk=false; 
            toChk_arr[1]=false;
            best_o_top = $('#best').offset().top
            new_o_top = $('#new').offset().top
        }
        if(toChk_arr[2] && s_bot - 300 >= new_o_top) {
            item_slideUp($('#new .pos_init'));
            // new_chk=false; 
            toChk_arr[2]=false;
            best_o_top = $('#best').offset().top
            new_o_top = $('#new').offset().top
        }
    })

    function item_slideUp(el) {
        for(let i=0; i<el.length;i++) {
            setTimeout(function(){
                el.eq(i).toggleClass('pos_init_active')
            }, 100 * i)
        }
    }


    // 레이어팝업 
    // big_img_box에 높이 주기
    let img_box_h = $('.img_box').height();
    $('.big_img_box').css({
        height: img_box_h
    })

    $('.sm_item').mouseenter(function(){
        $('.img_box').fadeOut(200);
        $('.img_box').eq($(this).index()).stop(true).fadeIn(200);
    });


    $('.btn_close, .btn_close_today').click(function(){
        $('.layer_popup').remove();
    })

    // 레이어팝업 끌고 다니끼
    
    $('.layer_popup').mousedown(function(e){
        let m_posx = e.clientX - $('.layer_popup').position().left
        let m_posy = e.clientY - $('.layer_popup').position().top
 
        $(document).on('mousemove', function(e){
            let m_x = e.clientX;
            let m_y = e.clientY;

            // 마우스 위치 - 최초의 클릭했을때의 layer_popup의 왼쪽 모서리 부분으로부터의 마우스 거리
            // 그냥 대놓고 마우스 현재 위치를 layer_popup 한테 주면 그냥 layer_popup의 모서리가 마우스의 현재 위치에 가서 붙어버림 그래서 처음에 m_posX에 layer_popup의 모서리부터 최초 클릭된 마우스 위치간의 간격을 저장해놓고, 이동 될떄마다 현재 마우스 위치에서 그만큼을 뺸 값을 left나 top에 주는거
            $('.layer_popup').css({
                // left: m_x ,
                // top: m_y 
                left: m_x - m_posx,
                top: m_y - m_posy
            })
        })
    }) 

    $('.layer_popup').mouseup(function(){
        $(document).off('mousemove')
    })

});