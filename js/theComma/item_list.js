const ITEM_LIST = [
    [
        {item_no: 1, src: '1.jpg', title: '얼핏보면 전등같은 빗자루세트', o_price: 90000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 2, src: '2.jpg', title: '하얀 원통', o_price: 20000, s_price: 70000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 3, src: '3.jpg', title: '원피스 같지만 알고보면 앞치마', o_price: 30000, s_price: 20000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 4, src: '4.jpg', title: '검정 핸드백 같은 토트백', o_price: 40000, s_price: 40000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no: 5, src: '5.jpg', title: '상의 같지만 뎅뎅이 하의', o_price: 50000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.'}, 
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:2, src: '2.jpg', title:'여기꺼!!', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, src: '7.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, src: '5.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:1, src: '1.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, src: '4.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, src: '2.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, src: '6.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, src: '3.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, src: '8.jpg', title:'더콤마-베스트', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'}
    ]
    ,
    [ 
        {item_no:1, covered_src: '4.jpg', src: '1.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:2, covered_src: '8.jpg', src: '2.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:3, covered_src: '6.jpg', src: '3.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:4, covered_src: '7.jpg', src: '4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:5, covered_src: '8.jpg', src: '5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:6, covered_src: '2.jpg', src: '6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:7, covered_src: '4.jpg', src: '7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:8, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        
        {item_no:9, covered_src: '7.jpg', src: '4.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:10, covered_src: '8.jpg', src: '5.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:11, covered_src: '2.jpg', src: '6.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:12, covered_src: '4.jpg', src: '7.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
        {item_no:13, covered_src: '1.jpg', src: '8.jpg', title:'더콤마-NEW', o_price:70000, s_price:50000, desc:'상품에 대한 설명이 표시됩니다.'},
         
    ],
    [],
    [],
    [],
    [],
    []
]
const EL_ARR = ['best', 'new','outer', 'top','bottom','acc','bag'];
const PAGENAME_ARR = ['BEST', 'NEW 5%', 'OUTER', 'TOP', 'BOTTOM', 'ACC', 'BAG&SHOES']
    
// 특정 위치에 특정 개수만큼 li(item)들 넣어주기
function load_item (cate, qty){
    let curr_count = $(`#${EL_ARR[cate]} .item_box > li.item`).length;
    let last_no = curr_count+qty;
    
    let limitNo = ITEM_LIST[cate].length; // best-22개
    if(last_no > limitNo) {
        last_no = limitNo;
    }

    for(let i=curr_count; i<last_no; i++) {
        let tmp = ITEM_LIST[cate][i];  
 
        /* 
        let tmp_list = `
                <li class="item">
                    <div class="item_img">
                        <a href="#">
                            <img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.src}" alt=""> `
                            
        // if(cate == 1) {
        if(tmp.covered_src != undefined) {
            tmp_list+=` <img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.covered_src}" alt="" class="covered_img"> `
        }
        
        tmp_list+=`     </a>
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${tmp.title}</div>
                        <div class="o_price">${tmp.o_price}원</div>
                        <div class="s_price">${tmp.s_price}원</div>
                        <div class="item_desc">${tmp.desc}</div>
                    </div>
                </li>
            `
        */

        // tmp_list 내부에 삼항연산자 안쓸거면 여기서 cover에 담아서 그 변수 쓰기
        let cover = "";
        if(tmp.covered_src != undefined) {
            cover +=` <img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.covered_src}" alt="" class="covered_img"> `
        }
        

        let tmp_list = `
                <li class="item pos_init">
                    <div class="item_img">
                        <a href="302.theComma(item).html?cateNo=${cate}&itemNo=${ITEM_LIST[cate][i].item_no}">
                            <img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.src}" alt=""> 
                            
                        ${/*삼항연산자*/
                            //tmp.covered_src!=undefined?'<img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.covered_src}" alt="" class="covered_img">':'' 
                            
                            cover
                        }
 
                         </a>
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${tmp.title}</div>
                        <div class="o_price">${tmp.o_price}원</div>
                        <div class="s_price">${tmp.s_price}원</div>
                        <div class="item_desc">${tmp.desc}</div>
                    </div>
                </li>
            `
        
        $(`#${EL_ARR[cate]} .item_box`).append(tmp_list)
    }
}

// url에서 내가 필요한 정보의 값을 얻어오기
function get_info_from_url(keyword) { // cateNo, itemNo
    let url = location.href; // 302.theComma(item).html?cateNo=0&itemNo=3#with_item
    
    url = url.split("?") // [302.theComma(item).html , cateNo=0&itemNo=3#with_item]
    if(url.length > 1) {

        url = url[1].split("&") // [cateNo=0  , itemNo=3#with_item]

        for(let i=0; i<url.length; i++) {
            let tmp_url = url[i].split("=");// [cateNo  , 0 ]
                                            // [itemNo  , 3#with_item]

            if(tmp_url[0] == keyword) {
                return tmp_url[1].split("#")[0] // 3#with_item
            }
        }
    }
    return null;
}

function comma(num) {
    return num.toLocaleString("KO")
}