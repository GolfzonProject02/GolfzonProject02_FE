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

// 예약상태
$('.reservationStatus').ready(function(){
    const reservationStatus = document.getElementsByClassName('reservationStatus');
    for (let i = 0; i < reservationStatus.length; i++) {
        let p = document.createElement("p");
        console.log(reservationStatus[i].innerText)
        let text = reservationStatus[i].innerText
        if(text == "예약완료") {
            reservationStatus[i].setAttribute('style','background-color:rgb(159, 221, 143); color:white');
        } else if(text == "이용완료") {
            reservationStatus[i].setAttribute('style','background-color:rgb(143, 177, 221); color:white');
        } else if(text == "예약취소") {
            reservationStatus[i].setAttribute('style','background-color:red; color:white');
        }
        if(text == "예약완료") {
            p.setAttribute("class","reservationCancel");
            p.innerHTML = "예약취소";
            console.log(p);
            reservationStatus[i].after(p);
        } else if(text == "이용완료") {
            p.setAttribute("class","reviewInsert");
            p.innerHTML = "후기작성";
            console.log(p);
            reservationStatus[i].after(p);
        }
    }
})

// 예약취소
$('.reservation').on('click', '.reservationCancel', function(){
    const selectThis = $(this).parent().children('.reservationStatus');
    if(confirm('정말 취소하시겠습니까?')) {
        $.ajax({
            type : "get",
            // url : '경로'
            success : function(data) {
                data = {"r_num":16,"name":"사용자","room_num":280,"space_num":4,"amount":60000,"r_start":"2022-11-02 09:11:00","r_end":"2022-11-02 03:11:00","status":"Approved","p_status":0,"r_date":"2022-10-31 12:10:00"};
                selectThis.text("예약취소");
                selectThis.css({'background-color':'red', 'color':'white'});
            }
        })
    }
})