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
            pageMove('login/login.html');
        }
    }

    // menu 로그인/회원가입 출력
    const login = 0;
    const login_tag = document.getElementById('login');
    if(login == 0) {
        login_tag.innerHTML = `<a href="login.html">
        <p>로그인 / 회원가입</p>
        </a>`;
    }else if(login == 1) {
        login_tag.innerHTML = 
            `<a href="프로필페이지">
                <img src="image/icon/profill.png">
                <p>admin</p>
            </a>`;
}

// insert_box
$('#cc_insert_btn').click(function(){
    $('#update_box').detach();
    $(this).after(`
        <div id="cc_insert">
            <p>문의작성</p>
            <form action="customercenter_insert.do" method="post" enctype="multipart/form-data">
               <input type="text" name="title" id="cc_title" placeholder="문의 제목을 작성해 주세요.">
               <select name="type" id="cc_type">
                    <option value="예약">예약</option>
                    <option value="계정">계정</option>
                    <option value="결제">결제</option>
                </select>
                <textarea name="content" id="cc_content" placeholder="문의내용을 작성해 주세요."></textarea>
                <button id="close">닫기</button>
                <input type="file" name="multipartFile" id="imgname">
                <input type="submit" id="insert_submit" value="제출">
                <input type="text' id="writer" name="writer" value="kim" hidden>
            </form>
        </div>
    `)
})

$('#pageTop').on('click','#close',function(){
    console.log("클릭");
    $('#cc_insert').detach();
    $('#update_box').detach();
})
$('#cc_selectAll').on('click','#update_close',function(){
    console.log("클릭");
    $('#cc_insert').detach();
    $('#update_box').detach();
})

// update
$('.updateBtn').click(function(){
    $('#cc_insert').detach();
    $('#update_box').detach();
    let title = $(this).parent().children('.user_cc_title').text();
    let text = $(this).parent().children('.ccText').text();
    let cc_num = $(this).parent().children('.cc_num').val();
    console.log(title,text,cc_num);
    $(this).after(`
        <div id="update_box">
            <p>문의수정</p>
            <form action="customercenter_update.do" method="post" enctype="multipart/form-data">
                <input type="text" name="title" id="cc_update_title" value="${title}">
                <select name="type" id="cc_update_type">
                    <option value="예약">예약</option>
                    <option value="계정">계정</option>
                    <option value="결제">결제</option>
                </select>
                <textarea name="content" id="cc_update_content">${text}</textarea>
                <button id="update_close">닫기</button>
                <input type="file" name="multipartFile" id="imgname">
                <input type="submit" id="cc_update_submit" value="수정">
                <input type="text" name="cc_num" id="cc_num" value="${cc_num}" hidden>
                <input type="text' id="writer" name="writer" value="kim" hidden>
            </form>
        </div>
    `)
})

// delete
$('.deleteBtn').click(function(){
    let cc_num = $(this).parent().children('.cc_num').val();
    if(confirm('정말 삭제하시겠습니까?')) {
        $.ajax({
            type : "get",
            url : "customercenter_delete.do?cc_num=" + cc_num,
            success : function(data){
                alert("삭제완료");
            }
        })
    }
})

// sort
$('.sort_box').change(function(){
    let val = $(this).val();
    console.log(val);
    let url = "";
    if (val == "reservation") {
        url = "customercenter.do?reservation=" + val;
    } else {
        url = "customercenter.do?andser=" + val;
    }
    $.ajax({
        type : "get",
        url : url,
        success : function(data){
            $(location).attr('href',url);
        }
    })
})