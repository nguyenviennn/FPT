$(document).ready(function() {
    $('.btn-login').click(function(){
        var input_phone = $('#phone').val();
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if(vnf_regex.test(input_phone)){
        }
        else{
            $('.check-phone').css({
                color: 'red'
            }).text('Không đúng định dạng ')
        }

        var input_password = $('#password').val();
        if (input_password.length < 6) {
            $('.check-password').css({
                color: 'red'
            }).text('Tối thiểu 6 ký tự ')
        }
    })
});