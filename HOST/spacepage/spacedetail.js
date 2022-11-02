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
        console.log(i);
        if(grade[i].getAttribute('value') == '0') {
            console.log(i);
            grade[i].setAttribute('style','width:0px;right:100px;');
        } else if(grade[i].getAttribute('value') == '0.5') {
            console.log(i);
            grade[i].setAttribute('style','width:10px;right:90px;');
        } else if(grade[i].getAttribute('value') == '1') {
            console.log(i);
            grade[i].setAttribute('style','width:20px;right:80px;');
        } else if(grade[i].getAttribute('value') == '1.5') {
            console.log(i);
            grade[i].setAttribute('style','width:30px;right:70px;');
        } else if(grade[i].getAttribute('value') == '2') {
            console.log(i);
            grade[i].setAttribute('style','width:40px;right:60px;');
        } else if(grade[i].getAttribute('value') == '2.5') {
            console.log(i);
            grade[i].setAttribute('style','width:50px;right:50px;');
        } else if(grade[i].getAttribute('value') == '3') {
            console.log(i);
            grade[i].setAttribute('style','width:60px;right:40px;');
        } else if(grade[i].getAttribute('value') == '3.5') {
            console.log(i);
            grade[i].setAttribute('style','width:70px;right:30px;');
        } else if(grade[i].getAttribute('value') == '4') {
            console.log(i);
            grade[i].setAttribute('style','width:80px;right:20px;');
        } else if(grade[i].getAttribute('value') == '4.5') {
            console.log(i);
            grade[i].setAttribute('style','width:90px;right:10px;');
        } else if(grade[i].getAttribute('value') == '5') {
            console.log(i);
            grade[i].setAttribute('style','width:100px;right:0px;');
        }
        total = total + Number(grade[i].getAttribute('value'));
    }
    avg = Math.round(total%grade.length)
    console.log("avg:"+avg);
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
        } else if (roomType[i].getAttribute('value') == '2') {
            roomType[i].innerText = '회의실 4인(2만원/시간)'
        } else if (roomType[i].getAttribute('value') == '6') {
            roomType[i].innerText = '회의실 6인(3만원/시간)'
        } else if (roomType[i].getAttribute('value') == '5') {
            roomType[i].innerText = '회의실 8~10인(5만원/시간)'
        } else {
            roomType[i].innerText = `오피스(${roomType[i].getAttribute('value')}만원/일)`
        }
    }
})

$('#rBox').on("propertychange change paste input", '#reservationDate', function(){
    const reservationDate = $(this).val();
    $('#reservationInfo').val(reservationDate);
    $('#reservationInfo').css("color","black");
})
$('#rBox').on("propertychange change paste input", '#reservationTime', function(){
    const reservationDate = $('#reservationDate').val();
    const reservationTime = $(this).val();
    if(reservationDate == "") {
        $('#reservationInfo').val(`날짜를 먼저 선택해 주세요.`);
        $('#reservationInfo').css("color","red");
    } else {
        $('#reservationInfo').val(`${reservationDate} ${reservationTime}`);
        // 시간에 따른 계산식 고민필요
        $('#price').val(`${reservationTime}`);
    }
})
$('#rBox').on('click', '.reservationRoom', function(){
    $('#reservationBox').detach();
    alert('안녕');
    console.log($(this).parent());
    $(this).parent().parent().append(`
        <div id="reservationBox">
            <form action="예약하기">
            <div>
                <img src="../image/icon/close.png" id="close">
            </div>
            <div id="roomImgBox" class="room_slides_img">
                <div><img class="roomImg" src="../image/space/dummy2.jpg"></div>
                <div><img class="roomImg" src="../image/space/dummy1.jpg"></div>
                <div><img class="roomImg" src="../image/space/dummy3.jpg"></div>
            </div>
            <div class="roomController">
                <button type="button" class="roomPrev" onclick="prev('room');">&lang;</button>
                <button type="button" class="roomNext" onclick="next('room');">&rang;</button>
            </div>
            <div id="roomInfo">
                <p style="float:left">공간유형 : 회의실</p>
                <p style="float: left">예약시간 : 최소 1시간 부터</p>
                <p style="float: left">수용인원 : 최소 1명 ~ 최대 4인</p>
            </div>
            <div>
                <input id="reservationDate" type="date">
            </div>
            <div>
                <input id="reservationTime" type="time">
            </div>
            <div>
                <p style="float:left">예약일</P>
                <input type="text" name="reservationInfo" id="reservationInfo" style="float:left">
                <p style="float:left">가격</P>
                <input type="text" name="price" id="price" style="float:left">
            </div>
            <div>
                <input id="reservationSubmit" type="submit" value="예약하기">
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
