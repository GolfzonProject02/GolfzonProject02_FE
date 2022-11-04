let today = new Date();
let year = Number(today.getFullYear());
let month = Number(today.getMonth());
let date = Number(today.getDate());
let hours = Number(today.getHours());
let minutes = Number(today.getMinutes());
month = month + 1;
if (month < 10) {
    month = "0" + month;
    if (date < 10) {date = "0" + date;}
} else {
    if (date < 10) {date = "0" + date;}
}
if (hours < 10) {
    hours = "0" + hours;
    if (minutes < 10) {minutes = "0" + minutes;}
} else {
    if (minutes < 10) {minutes = "0" + minutes;}
}
today = year+"-"+month+"-"+date;
today_time = year+"-"+month+"-"+date+" "+hours+":"+minutes;
console.log("today : "+today);
console.log("today_time : "+today_time);

// menu Open Close 함수
function menutabOpen() {
    const menutab = document.getElementById('menutab');
    menutab.setAttribute('style','display:block');
    }
    function menutabClose(login) {
        const menutab = document.getElementById('menutab');
        menutab.setAttribute('style','display:none');
        if(login != null) {
            pageMove('@login/login.html');
        }
    }

    // menu 로그인/회원가입 출력
    const login = 0;
    const login_tag = document.getElementById('login');
    if(login == 0) {
        login_tag.innerHTML = `<a href="login.do">
        <p>로그인 / 회원가입</p>
        </a>`;
    }else if(login == 1) {
        login_tag.innerHTML = 
            `<a href="프로필페이지">
                <img src="image/icon/profill.png">
                <p>admin</p>
            </a>`;
}

// 이미지 슬라이드
function next(x) {
    let slides = document.querySelector(`.${x}_slides_img`);
    let slides_img = document.querySelectorAll(`.${x}_slides_img div`);
    if(slides_img[slides_img.length-2].style.display == 'none') {
        for(let i = slides_img.length -1; i >= 0; i--){
            slides_img[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < slides_img.length; i++) {
            if(slides_img[i].style.display != 'none') {
                return slides_img[i].style.display = 'none';
            }
        }
    }
}
function prev(x) {
    let slides = document.querySelector(`.${x}_slides_img`);
    let slides_img = document.querySelectorAll(`.${x}_slides_img div`);
    if(slides_img[0].style.display != 'none') {
        for(let i = 0; i < slides_img.length-1; i++){
            slides_img[i].style.display = 'none';
        }
    } else {
        for (let i = 0; i < slides_img.length; i++) {
            if(slides_img[i].style.display != 'none') {
                return slides_img[i-1].style.display = 'block';
            }
        }
    }
}

// 네비게이션바
function nav(x){
    let menuHeight = document.querySelector('#navVar').offsetHeight;
    let location = document.querySelector(`#${x}`).offsetTop;
    window.scrollTo({top:location - menuHeight, behavior:'smooth'});
}

// 평점계산기
$('.reviewGradeColor').ready(function(){
    const grade = document.getElementsByClassName('reviewGradeColor');
    const gradeAvg = document.getElementById('reviewsGradeAvg');
    let total = 0;
    for (let i = 0; i < grade.length; i++) {
        if(grade[i].getAttribute('value') == '0') {
            grade[i].setAttribute('style','width:0px;right:100px;');
        } else if(grade[i].getAttribute('value') == '0.5') {
            grade[i].setAttribute('style','width:10px;right:90px;');
        } else if(grade[i].getAttribute('value') == '1') {
            grade[i].setAttribute('style','width:20px;right:80px;');
        } else if(grade[i].getAttribute('value') == '1.5') {
            grade[i].setAttribute('style','width:30px;right:70px;');
        } else if(grade[i].getAttribute('value') == '2') {
            grade[i].setAttribute('style','width:40px;right:60px;');
        } else if(grade[i].getAttribute('value') == '2.5') {
            grade[i].setAttribute('style','width:50px;right:50px;');
        } else if(grade[i].getAttribute('value') == '3') {
            grade[i].setAttribute('style','width:60px;right:40px;');
        } else if(grade[i].getAttribute('value') == '3.5') {
            grade[i].setAttribute('style','width:70px;right:30px;');
        } else if(grade[i].getAttribute('value') == '4') {
            grade[i].setAttribute('style','width:80px;right:20px;');
        } else if(grade[i].getAttribute('value') == '4.5') {
            grade[i].setAttribute('style','width:90px;right:10px;');
        } else if(grade[i].getAttribute('value') == '5') {
            grade[i].setAttribute('style','width:100px;right:0px;');
        }
        total = total + Number(grade[i].getAttribute('value'));
    }
    avg = Math.round(total%grade.length)
    if(avg == 0 || avg == 1 || avg == 2 || avg == 3) {
        avg = Math.round(total/grade.length)
    } else if(avg == 4 || avg == 5 || avg ==6) {
        avg = Math.round(total/grade.length) + 0.5
    } else if(avg == 7 || avg == 8 || avg == 9) {
        avg = Math.round(total/grade.length) + 1
    }
    gradeAvg.innerText = `(평균평점 : ${avg})`;
})

$(document).ready(function() {
    $('#spaceItro').on( 'keyup', 'textarea', function (e){
      $(this).css('height', 'auto' );
      $(this).height( this.scrollHeight );
    });
    $('#spaceItro').find( 'textarea' ).keyup();
  });

// 룸 타입 가격 출력
$('.roomType').ready(function(){
    let roomType = document.getElementsByClassName('roomType');
    for (let i = 0; i < roomType.length; i++) {
        if (roomType[i].getAttribute('value') == '데스크') {
            roomType[i].innerText = '데스크(1만원/시간)'
        } else if (roomType[i].getAttribute('value') == '회의실(4인)') {
            roomType[i].innerText = '회의실 4인(2만원/시간)'
        } else if (roomType[i].getAttribute('value') == '회의실(6인)') {
            roomType[i].innerText = '회의실 6인(3만원/시간)'
        } else if (roomType[i].getAttribute('value') == '회의실(8~10인)') {
            roomType[i].innerText = '회의실 8~10인(5만원/시간)'
        } else if (roomType[i].getAttribute('value') == '회의실(20인)') {
            roomType[i].innerText = '회의실 20인(10만원/시간)'
        } else {
            roomType[i].innerText = `오피스(${roomType[i].getAttribute('value')}만원/일)`
        }
    }
})
// 날짜 선택
$('#rBox').on("change", '#reservationDate', function(){
    $('#time_table_box').detach();
    $('#submit').detach();
    $('#price').val("");
    const reservationDate = $(this).val();
    $('#reservationInfo').val(reservationDate);
    $('#reservationInfo').css("color","black");
    let year = reservationDate.slice(0,4)
    let month = reservationDate.slice(5,7)
    let day = reservationDate.slice(8,10)
    let r_date = year+"/"+month+"/"+day
    console.log(r_date);
    if (reservationDate == "") {
        $('#time_table_box').detach();
        return false
    }
    // ajax문을 출력하여 시간 막기....
    $.ajax({
        // type : 'post',
        // url : '/user/user/mailCheck?email='+eamil, // GET방식이라 Url 뒤에 email을 뭍힐수있다.
        date : {
            r_date : r_date
        },
        success : function (data) {
            data = [
                {
                    "r_num": 35,
                    "name": "사용자",
                    "room_num": 280,
                    "space_num": 0,
                    "r_start": "2022-11-02 09:11:00",
                    "r_end": "2022-11-02 10:11:00",
                    "amount": 0,
                    "status": "Booked",
                    "paid": 0,
                    "r_date": "2022-11-03 02:11:24",
                    "cancel_reason": null
                },
                {
                    "r_num": 34,
                    "name": "사용자",
                    "room_num": 280,
                    "space_num": 0,
                    "r_start": "2022-11-02 12:11:00",
                    "r_end": "2022-11-02 15:11:00",
                    "amount": 0,
                    "status": "Booked",
                    "paid": 0,
                    "r_date": "2022-11-03 02:11:10",
                    "cancel_reason": null
                }
            ]
            // 시간박스 출력
            let td = '';
            for (let i = 0; i < 10; i++) {
                td += `<td id="${i}" class="time_td unselected">0${i}:00</td>`
            }
            for (let i = 10; i < 25; i++) {
                td += `<td id="${i}" class="time_td unselected">${i}:00</td>`
            }
            console.log(td);
            $('#reservationTime').append(`
                <div id="time_table_box">
                    <table>
                        <tr>
                            ${td}
                        </tr>
                    </table>
                </div>
            `)

            for (let i = 0; i < data.length; i++) {
                let limit_start = Number(data[i].r_start.slice(11,13));
                let limit_size = Number(data[i].r_end.slice(11,13))-Number(data[i].r_start.slice(11,13))+1;
                for (let j = limit_start; j < limit_start+limit_size; j++) {
                    $(`#${j}`).addClass('limit');
                    $(`#${j}`).css('pointer-events','none');
                }
                console.log("limit_start : " + limit_start,"limit_size : "+limit_size);
            }
        }         
    });
})
// 시간선택
$('#rBox').on("click", '.time_td', function(){
    // 선택한 요소의 css, class 수정
    if ($(this).css('background-color') == "rgb(255, 255, 182)") {
        $(this).removeClass('selected');
        $(this).addClass('unselected');
    } else {
        $(this).addClass('selected');
        $(this).removeClass('unselected');
    }
    // 선택, 미선택 class 호출
    let selected = $('#time_table_box').find('.selected');
    let unselected = $('#time_table_box').find('.unselected');
    let min_time = 0;
    let max_time = 0;
    // 빈값일경우 함수종료
    if (unselected.length == 25) {
        $('#reservationInfo').val("");
        return false;
    }
    // 최대시간, 최소시간 계산
    for (let i = 0; i < selected.length; i++) {
        if (max_time <= Number(selected[i].id)) {
            max_time = Number(selected[i].id);
        }
    }
    // 최대시간
    min_time = Number(selected[0].id);
    console.log("min_time : "+min_time);
    console.log("max_time : "+max_time);
    // 사이 시간 css, class 수정
    for (let i = min_time; i < max_time; i++) {
        let limit_check = $(`#${i}`).next().attr('class')
        console.log("limit_check : " + limit_check);
        console.log(limit_check.indexOf('limit'));
        if (limit_check.indexOf('limit') != -1) {
            alert('예약이 불가능한 시간입니다.');
            $(`#${min_time}`).removeClass('selected');
            $(`#${max_time}`).removeClass('selected');
            return false
        } else {
            $(`#${i}`).next().removeClass('unselected');
            $(`#${i}`).next().addClass('selected');
        }
    }
    // 가격계산
    let price = 0;
    let room_type = $('#room_type').val();
    if (room_type == "데스크") {
        price = 10000;
    } else if (room_type == "회의실(4인)") {
        price = 20000;  
    } else if (room_type == "회의실(6인)") {
        price = 30000;
    } else if (room_type == "회의실(8~10인)") {
        price = 50000;
    } else if (room_type == "회의실(20인)") {
        price = 100000;
    } else if (room_type == "오피스") {
        price = 지정;
    }

    // 예약일시, 가격 출력
    let reservationDate = $('#reservationDate').val();
    if (min_time == max_time) {
        $('#price').val("");
        if (min_time < 10) {
            reservationDate = reservationDate+" 0"+min_time+":00";
            $('#reservationInfo').val(reservationDate);
        } else {
            reservationDate = reservationDate+" "+min_time+":00";
            $('#reservationInfo').val(reservationDate);
        }
    } else {
        if (min_time < 10) {
            if (max_time < 10) {
                reservationDate = reservationDate+" 0"+min_time+":00 ~ 0"+max_time+":00";
                $('#reservationInfo').val(reservationDate);
                $('#price').val(price*(max_time-min_time+1)+"원");
                $('#roomInfo').after(`
                    <div id="submit">
                        <input id="reservationSubmit" type="submit" value="예약하기">
                    </div>
                `)
            } else {
                reservationDate = reservationDate+" 0"+min_time+":00 ~ "+max_time+":00";
                $('#reservationInfo').val(reservationDate);
                $('#price').val(price*(max_time-min_time+1)+"원");
                $('#roomInfo').after(`
                    <div id="submit">
                        <input id="reservationSubmit" type="submit" value="예약하기">
                    </div>
                `)
            }
        } else {
            reservationDate = reservationDate+" "+min_time+":00 ~ "+max_time+":00";
            $('#reservationInfo').val(reservationDate);
            $('#price').val(price*(max_time-min_time+1)+"원");
            $('#roomInfo').after(`
                <div id="submit">
                    <input id="reservationSubmit" type="submit" value="예약하기">
                </div>
            `)
        }
    }
})
$('#rBox').on('click', '.reservationRoom', function(){
    $('#reservationBox').detach();
    let roomType = $(this).parent().parent().children('.roomType').attr("value");
    let room_num = $(this).attr("id");
    console.log(roomType);
    $(this).parent().parent().append(`
        <div id="reservationBox" onsubmit="return false">
            <form id="reservationOK">
                <div>
                    <img src="../../resources/css/image/icon/close.png" id="close">
                </div>
                <div id="roomImgBox" class="room_slides_img">
                    <div><img class="roomImg" src="../../resources/css/image/space/dummy2.jpg"></div>
                    <div><img class="roomImg" src="../../resources/css/image/space/dummy1.jpg"></div>
                    <div><img class="roomImg" src="../../resources/css/image/space/dummy3.jpg"></div>
                </div>
                <div class="roomController">
                    <button type="button" class="roomPrev" onclick="prev('room');">&lang;</button>
                    <button type="button" class="roomNext" onclick="next('room');">&rang;</button>
                </div>
                <div id="roomInfo">
                    <p style="float:left">공간유형 : 회의실</p>
                    <p style="float:left">운용시간 : 00:00 ~ 00:00</p>
                    <p style="float:left">수용인원 : 최소 1명 ~ 최대 4인</p>
                    <p style="float:left">예약일</p>
                    <input id="reservationDate" name="r_date" type="date" min=${today}>
                    <p style="float:left" id="reservationTime">예약시간</p>
                    <p style="float:left">예약일시</P>
                    <input type="text" name="reservationInfo" id="reservationInfo" style="float:left">
                    <p style="float:left">가격</P>
                    <input type="text" name="price" id="price" style="float:left">
                    <input type="text" nema="room_type" id="room_type" value="${roomType}" hidden>
                    <input type="text" name="room_num" id="room_num" value="${room_num}" hidden>
                </div>
            </form>
        </div>
    `)
})
$('#rBox').on('click', '#close', function(){
    $('#reservationBox').detach();
})

function reservation(x) {
    console.log(x);
    $.ajax({
        data : {
            'roomName' : x
        },
        // url : 경로,
        success : function(data){
            data = 'success';
            if(data == 'fail') {
                alert('방을 불어오는 중 오류가 발생하였습니다.');
                return
                $(this)
            } else {
                alert('방 불러오기 성공');
            }
        }
    });
}

// 예약 submit(작성중....)
$('#rBox').on('submit','#reservationOK', function(){
    // let name = '<%=(String)session.getAttribute("name")%>';
    let room_num = $("#room_num").val();
    let space_num = $("#space_num").val(); // 공간 넘버 불러오기....
    let reservationInfo = $('#reservationInfo').val()
    let r_start = today+" "+ reservationInfo.slice(11,16);
    let r_end = today+" "+ reservationInfo.slice(11,16);
    let r_date = today_time;
    let priceInfo = $('#price').val();
    let amount = priceInfo.slice(0,-1);
    console.log(
        "room_num : " + room_num,
        "space_num : " + space_num,
        "r_start : " + r_start,
        "r_end : " + r_end,
        "r_date : " + r_date,
        "price : " + amount)

    $.ajax({
        type : 'post',
        // url : '/user/user/mailCheck?email='+eamil, // GET방식이라 Url 뒤에 email을 뭍힐수있다.
        date : {
            name : name,
            room_num : room_num,
            space_num : space_num,
            r_start : r_start,
            r_end : r_end,
            r_date : r_date,
            amount : amount
        },
        success : function (data) {
            console.log(data);
        }         
    });
})




var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};
// 지도 생성
var map = new kakao.maps.Map(mapContainer, mapOption);
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();
// 지도 타입 컨트롤을 지도에 표시합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
function getInfo() {
    // 지도의 현재 중심좌표를 얻어옵니다 
    var center = map.getCenter(); 
    
    // 지도의 현재 레벨을 얻어옵니다
    var level = map.getLevel();
    
    // 지도타입을 얻어옵니다
    var mapTypeId = map.getMapTypeId(); 
    
    // 지도의 현재 영역을 얻어옵니다 
    var bounds = map.getBounds();
    
    // 영역의 남서쪽 좌표를 얻어옵니다 
    var swLatLng = bounds.getSouthWest(); 
    
    // 영역의 북동쪽 좌표를 얻어옵니다 
    var neLatLng = bounds.getNorthEast(); 
    
    // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
    var boundsStr = bounds.toString();
    
    
    var message = '지도 중심좌표는 위도 ' + center.getLat() + ', <br>';
    message += '경도 ' + center.getLng() + ' 이고 <br>';
    message += '지도 레벨은 ' + level + ' 입니다 <br> <br>';
    message += '지도 타입은 ' + mapTypeId + ' 이고 <br> ';
    message += '지도의 남서쪽 좌표는 ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + ' 이고 <br>';
    message += '북동쪽 좌표는 ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + ' 입니다';
    
    // 개발자도구를 통해 직접 message 내용을 확인해 보세요.
    // ex) console.log(message);
}
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
