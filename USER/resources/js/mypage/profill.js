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

// 이미지 반응형으로 수정...스크립트 구상중....
$("#profill_img_update").change(function(){
    alert("프로필수정");
    let img_name = document.getElementById('profill_img_update').files;
    console.log(img_name);
    console.log(img_name[0].name);
    let img_url = "../../resources/css/image/icon/" + img_name[0].name
    $('#profill').attr('src',img_url);
})

// 닉네임 변경
$('#memeber_name_btn').click(function(){
    $('#member_name').css('display','none');
    $('#memeber_name_btn').css('pointer-events','none');
    $(this).after(`
        <div id="member_name_update" class="update_contain">
            <form class="update_box" id="member_name_update_form" onsubmit="return false">
                <input type="text" name="member_name" class="updateVal member_name" style="width:170px;">
                <input type="text" class="member_name_check" value="중복체크">
                <img src="../../resources/css/image/icon/close.png" class="update_close">
                <span id="name-check-warn"></span>
            </form>
        </div>
    `)
})
$('#member_name_all').on('click','.update_close',function(){
    $('#member_name_update').detach();
    $('#member_name').css('display','block');
    $('#memeber_name_btn').css('pointer-events','all');
})
$('#member_name_all').on('keyup','.member_name',function () {
    $('#name-check-warn').html('');
    $('#nameCheck').show();
    $('#nameBox').attr("check_result", "fail");
    $('.update_name_submit').after(`
        <input type="text" class="member_name_check" value="중복체크">
    `)
    $('.update_name_submit').detach();
  })
$('#member_name_all').on('click','.member_name_check',function(){
    const msg = $('#name-check-warn');
    $.ajax({
        data : {
            'name' : $('#nameBox').val(),
        },
        // url : 경로,
        success : function(data){
            data = 'success';
            if(data == 'fail') {
                console.log('1');
                msg.html('사용중');
                msg.css('color','red');
            } else {
                console.log('2');
                $('#name-check-warn').html('사용가능');
                console.log(msg.val());
                msg.css('color','green');
                $('.member_name_check').after(`
                    <input type="submit" class="update_name_submit" value="수정">
                `)
                $('.member_name_check').detach();
                $('#nameBox').attr('check_result','success');
                $('#nameCheck').hide();
            }
        }
    });
})
$('#member_name_all').on('submit','#member_name_update_form',function(){
    console.log("여기");
    let memeber_name = $(this).children('.updateVal').val();
    let member_email = $('#member_email').text();
    let member_num = $('#member_num').val();
    console.log(memeber_name);
    console.log(member_email);
    console.log(member_num);
    // $.ajax({
    //     type : "post",
    //     url : "updateOK",
    //     dataType : "json",
    //     data : {
    //         member_num : member_num,
    //         member_name : memeber_name,
    //         member_email : member_email
    //     },
    //     success : function(data){
    //     }
    // })
    // 성공시
    $('#member_name').text(memeber_name);
    $('#member_name').css('display','block');
    $('#memeber_name_btn').css('pointer-events','all');
    $(this).parent().detach();
})

// 이메일 변경
$('#member_email_btn').click(function(){
    $('#member_email').css('display','none');
    $('#member_email_btn').css('pointer-events','none');
    $(this).after(`
        <div id="member_email_update" class="update_contain">
            <form class="update_box" id="member_email_update_form" onsubmit="return false">
                <input type="text" name="emailID" class="updateVal emailID">@
                <select name="emailAdress" id="emailAdress" class="updateVal emailAdress">
                    <option>naver.com</option>
                    <option>daum.net</option>
                    <option>gmail.com</option>
                    <option>hanmail.com</option>
                    <option>yahoo.co.kr</option>
                </select>
                <input type="text" class="member_email_check" value="메일인증" readonly>
                <img src="../../resources/css/image/icon/close.png" class="update_close"><br>
                </form>
            <div>
                <input class="mail-check-input inputBox" id="mailCheckInput" placeholder="인증번호 6자리를 입력해주세요!" maxlength="6" check_result="fail" hidden>
                <span id="mail-check-warn"></span>
            </div>
        </div>
    `)
})
$('#member_email_all').on('click','.update_close',function(){
    $('#member_email_update').detach();
    $('#member_email').css('display','block');
    $('#member_email_btn').css('pointer-events','all');
})
$('#member_email_all').on('click','.member_email_check',function() {
    if($('.emailID').val() == '') {
        return alert('메일을 작성해 주세요');
    }
    const email = $('.emailID').val()+'@'+$('#emailAdress').val();
    const checkInput = $('.mail-check-input');
    console.log('완성된 이메일 : ' + email);
    console.log($("#user_email").val());
    $.ajax({
        type : 'get',
        // url : '/user/user/mailCheck?email='+eamil, // GET방식이라 Url 뒤에 email을 뭍힐수있다.
        success : function (data) {
            data = $('.emailID').val();
            console.log("data : " +  data);
            checkInput.attr('hidden',false);
            code = data;
            alert('작성하신 메일로 인증번호가 전송되었습니다.')
        }         
    });
});
$('#member_email_all').on('keyup','.emailID',function () {
    const checkInput = $('.mail-check-input');
    $('#mail-check-warn').html('');
    checkInput.attr('hidden',true);
    $('.update_email_submit').after(`
        <input type="text" class="member_email_check" value="메일인증">
    `)
    $('.update_email_submit').detach();
})
$('#member_email_all').on('blur','#mailCheckInput',function () {
    console.log("여기");
    const inputCode = $(this).val();
    console.log("this : " + inputCode);
    const $resultMsg = $('#mail-check-warn');
    if(inputCode === code){
        $resultMsg.html('인증완료');
        $resultMsg.css('color','green');
        $('#mailCheck').css('pointer-events','none');
        $('#mailCheck').attr('check_result','success');
        $('#emailID').attr('readonly',true);
        $('#emailAdress').attr('readonly',true);
        $('#emailAdress').attr('onFocus', 'this.initialSelect = this.selectedIndex');
        $('#emailAdress').attr('onChange', 'this.selectedIndex = this.initialSelect');
        $('#mailCheckInput').attr('check_result','success');
        $('.member_email_check').after(`
            <input type="submit" class="update_email_submit" value="수정"></input>        
        `);
        $('.member_email_check').detach();
    }else{
        $resultMsg.html('인증번호 불일치');
        $resultMsg.css('color','red');
    }
});
$('#member_email_all').on('submit','#member_email_update_form',function(){
    let memeber_emailID = $(this).children('.emailID').val();
    let member_emailAdress = $(this).children('.emailAdress').val();
    let member_email = memeber_emailID+"@"+member_emailAdress;
    let member_num = $('#member_num').val();
    console.log(memeber_emailID);
    console.log(member_emailAdress);
    console.log(member_email);
    console.log(member_num);
    // $.ajax({
    //     type : "post",
    //     url : "updateOK",
    //     dataType : "json",
    //     data : {
    //         member_name : memeber_name,
    //         member_email : member_email
    //     },
    //     success : function(data){
    //     }
    // })
    // 성공시
    $('#member_email').text(member_email);
    $('#member_email').css('display','block');
    $(this).parent().detach();
    $('#member_email_btn').css('pointer-events','all');
})

// 연락처
// 이메일 변경
$('#member_tel_btn').click(function(){
    $('#member_tel').css('display','none');
    $('#member_tel_btn').css('pointer-events','none');
    $(this).after(`
        <div id="member_tel_update" class="update_contain">
            <form class="update_box" id="member_tel_update_form" onsubmit="return false">
                <select class="telBox" id="telFirst">
                    <option>010</option>
                    <option>020</option>
                </select>
                -
                <input class="telBox" type='number' id="tel_1" check_result="fail" oninput='handleOnInput(this, 4)'/>
                -
                <input class="telBox" type='number' id="tel_2" check_result="fail" oninput='handleOnInput(this, 4)'/>
                <input type="submit" class="member_tel_check" value="수정">
                <img src="../../resources/css/image/icon/close.png" class="update_close"><br>
            </form>
        </div>
    `)
})
function handleOnInput(el, maxlength) {
    if(el.value.length > maxlength)  {
        el.value 
        = el.value.substr(0, maxlength);
    }
}
$('#member_tel_all').on('click','.update_close',function(){
    $('#member_tel_update').detach();
    $('#member_tel').css('display','block');
    $('#member_tel_btn').css('pointer-events','all');
})
$('#member_tel_all').on('submit','#member_tel_update_form',function(){
    console.log("여기");
    let telFirst = $('#telFirst').val();
    let tel_1 = $('#tel_1').val();
    let tel_2 = $('#tel_2').val();
    let originTel = $('#member_tel').text();
    let member_tel
    if ($('#tel_1').val() == '' || $('#tel_2').val() == '') {
        member_tel = originTel;
    } else {
        member_tel = telFirst+"-"+tel_1+"-"+tel_2;
    }
    console.log(tel_1);
    console.log(tel_2);
    console.log(originTel);
    console.log(member_tel);
    // $.ajax({
    //     type : "post",
    //     url : "updateOK",
    //     dataType : "json",
    //     data : {
    //         member_name : memeber_name,
    //         member_email : member_email
    //     },
    //     success : function(data){
    //     }
    // })
    // 성공시
    $('#member_tel').text(member_tel);
    $('#member_tel').css('display','block');
    $(this).parent().detach();
    $('#member_tel_btn').css('pointer-events','all');
})