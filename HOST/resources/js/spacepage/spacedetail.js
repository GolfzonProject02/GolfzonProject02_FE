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

// 공간소개 수정
$('#updateSpaceInfo').click(function(){
    let space_detail = $(this).parent().children('#space_detail').val();

    $(this).css('display','none');
    $('#space_detail').css('display','none');
    $(this).parent().children('#space_detail').after(`
        <div id="update_spaceItro">
            <form id="roomAddSubmit" onsubmit="return false">
            <P>공간소개 수정</P>
            <p id="spaceInfo_textCount">0/100자</p>
            <textarea name="space_detail" id="update_space_detail">${space_detail}</textarea>
            <input type="button" id="update_space_detail_close" value="닫기">
            <input type="submit" id="update_space_detail_submit" value="수정">
            </form>
        </div>
    `)
})
$('#spaceItro').on('click','#update_space_detail_close',function(){
    $('#update_spaceItro').detach();
    $('#updateSpaceInfo').css('display','block');
    $('#space_detail').css('display','block');
})
// param값 가져오기
const urlParams = new URL(location.href).searchParams;
const name = urlParams.get('space_name');
console.log(name);

$('#spaceItro').on('keyup','#update_space_detail',function(e){
    console.log('글자수 카운트')
    let content = $(this).val();
    $('#spaceInfo_textCount').css('color','gary');
    if(content.length == 0 || content == "") {
        $('#spaceInfo_textCount').text('0/100자');
    } else {
        $('#spaceInfo_textCount').text(content.length+'/100자');
    }
    if(content.length > 100) {
        $(this).val(content.substring(0, 100));
        $('#spaceInfo_textCount').css('color','red');
    }
})

// 공간소개 수정 submit
$('#spaceItro').on('submit','#roomAddSubmit',function(){
    let space_name = name;
    let space_detail = $('#update_space_detail').val();
    console.log("space_name : "+space_name+" / space_detail : "+space_detail);
    $('#space_detail').val(space_detail)
    // $.ajax({
    //     type : "post",
    //     url : "updateOK",
    //     dataType : "json",
    //     data : {
    //         space_name : space_name,
    //         space_detail : space_detail
    //     },
    //     success : function(data){
    //         console.log('성공')
    //         $('#update_space_detail').attr('placeholder',space_detail);
    //     }
    // })
    $('#updateSpaceInfo').css('display','block');
    $('#space_detail').css('display','block');
    $('#update_spaceItro').detach();
})

// 세부공간 수정

// kakaomap
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
