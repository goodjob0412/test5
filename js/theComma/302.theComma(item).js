let cateNo = get_info_from_url("cateNo")
let itemNo = get_info_from_url("itemNo") - 1

console.log(cateNo, itemNo)

let item = `
    <div class="img_box">
        <img src="./img/theComma/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src}" alt="">
        <div class="magnifier" style="background-image: url(./img/theComma/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src})"></div>
    </div>
    <div class="info_box">
        <div class="item_title">${ITEM_LIST[cateNo][itemNo].title}</div>

        <table class="item_info">
            <tbody>
                <tr>
                    <td class="tb_title">소비자가</td>
                    <td class="tb_desc"><del>${comma(ITEM_LIST[cateNo][itemNo].o_price)}원</del></td>
                </tr>
                <tr>
                    <td class="tb_title">판매가</td>
                    <td class="tb_desc">${comma(ITEM_LIST[cateNo][itemNo].s_price)}원</td>
                </tr>
                <tr>
                    <td class="tb_title" rowspan="2">배송비</td>
                    <td class="tb_desc">
                        <select class="tb_order_opt">
                            <option value="">주문시 결제(선결제)</option>
                            <option>수령시 결제(착불)</option> 
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="tb_desc">2,500원 (3,000,000원 이상 구매 시 무료)</td>
                </tr>
                <tr>
                    <td class="tb_title">적립금</td>
                    <td class="tb_desc">10,000원(20%)</td>
                </tr>
            </tbody>
        </table> 

        <div class="color_pick">
            <div class="cp_L">색상</div> 
            <div class="cp_R">
                <div class="color_box">
                    <div class="color_opt">
                        <div class="cb_black" data-color="black"></div>
                    </div>
                    <div class="color_opt">
                        <div class="cb_white" data-color="white"></div>
                    </div>
                    <div class="color_opt">
                        <div class="cb_gray" data-color="gray"></div>
                    </div>
                </div>
                <div class="color_desc">[필수] 옵션을 선택해 주세요</div>
            </div>
        </div>

        <div class="selected_opt">
            <div class="so_desc">(최소주문수량 1개 이상)</div>
            <div class="selected_item_box">
                 
            </div>
        </div>

        <div class="total_price_box">
            TOTAL: <span class="final_price">0원</span> (<span class="final_qty">0</span>개)
        </div>

        <div class="btn_item_box">
            <div class="btn_buy">BUY IT NOW</div>
            <div class="btn_addcart">ADD TO CART</div>
            <div class="btn_wishlist">WISH LIST</div>
        </div>
    </div>
    `

$('.detail_box').append(item)

let magnifier = $('.magnifier');
let target = $('.img_box > img');

$(document).on('mouseenter', '.img_box', function(){
    magnifier.fadeIn(0)
});
$(document).on('mouseleave', '.img_box', function(){
    magnifier.fadeOut(0)
});
$(document).on('mousemove', '.img_box', function(e){
    // 부모 기준 위치 잡기
    // let pos_x = $('.img_box').position().left;
    // let pos_y = $('.img_box').position().top;

    // 1 - pageX,Y로 화면 좌상단 기준 마우스 위치 찾고 .img_box의 위치 빼기
    let mouseX = e.pageX - $('.img_box').offset().left;
    let mouseY = e.pageY - $('.img_box').offset().top;

    // 2 - 마우스가 원의 중심에 오게 하기
    let px = mouseX - (magnifier.width() / 2)
    let py = mouseY - (magnifier.height() / 2)

    // 3 - 배경이미지가 원의 가운데 오게 하기
    let rx = -mouseX + (magnifier.width() / 2)
    let ry = -mouseY + (magnifier.height() / 2)


    // 4 - 돋보기 위치 , 배경 이동시키기
    magnifier.css({
        left: px,
        top: py,
        backgroundPosition: rx+"px " + ry+"px",
        backgroundSize: target.width()+"px " + target.height()+"px"
    })

});



$(document).on('click','.color_opt', function(){
    let clicked_color = $(this).children().data('color');
    // black, white, gray

    if(!$('.ttt').hasClass(clicked_color)) {
        
        // 없으면
        $('.selected_item_box').append(`
            <div class="selected_item">
                <div class="si_1">
                    <div>마켓디자인</div>
                    <div class="ttt ${clicked_color}">-${clicked_color.toUpperCase()}</div>
                </div>
                <div class="si_2">
                    <input type="button" value="-" class="btn_qty_minus">
                    <input type="text" class="txt_qty" value="1">
                    <input type="button" value="+" class="btn_qty_plus">
                    <div class="btn_remove_item">X</div>
                </div>
                <div class="si_3">
                    <div class="each_price">${comma(ITEM_LIST[cateNo][itemNo].s_price)}원</div>
                    <div>(적립 10,000원)</div>
                </div> 
            </div>
            `)
            
            total_price()
    }
    else {
        // 있으면
        alert("이미 선택한 옵션입니다.")
    }
});

$(document).on('click', '.btn_remove_item', function(){
    $(this).parents('.selected_item').remove();
    total_price()
});
$(document).on('click', '.btn_qty_minus', function(){

    let tmp = $(this).next('.txt_qty')

    if(+tmp.val() > 1) {
        tmp.val(   +tmp.val()-1    )
        
        $(this).parent().next().children('.each_price').text(comma(tmp.val()*ITEM_LIST[cateNo][itemNo].s_price) + "원")


        total_price()
    }
    else {
        alert("최소 주문수량은 1개 입니다.")
    }

});
$(document).on('click', '.btn_qty_plus', function(){

    let tmp = $(this).prev('.txt_qty')
    tmp.val(   +tmp.val()+1    )
 

    // let tt = $('.txt_qty').val();
    // $('.txt_qty').val(  ++tt  )

    $(this).parent().next().children('.each_price').text(comma(tmp.val()*ITEM_LIST[cateNo][itemNo].s_price) + "원")



    total_price()
});
 
function total_price() {
    let total_price=0;
    let total_qty = 0;

    for(let i=0; i<$('.txt_qty').length; i++) {
        total_price += $('.txt_qty').eq(i).val() * ITEM_LIST[cateNo][itemNo].s_price;

        total_qty += +$('.txt_qty').eq(i).val();
    }
 
    $('.final_price').text(comma(total_price) + "원")

    $('.final_qty').text(total_qty)
}