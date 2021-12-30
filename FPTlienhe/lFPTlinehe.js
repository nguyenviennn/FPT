window.onscroll = function () {
  myFunction()
};
var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $('#click-menu').click(function () {
    $('.list-menu').toggleClass('show-menu');
  });

  $('.btn-submit').click(function () {
    var input_name = $('#name').val();
    if (3 < input_name.length < 50) {
      $('.check-name').css({
        color: 'red'
      }).text('Tối thiểu 3 ký tự và tối đa 50 ký tự');
    }
   
    var input_email = $('#email').val();
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(input_email)) {
      $('.check-email').text('');
    } else {
      $('.check-email').css({
        color: 'red'
      }).text('Email không đúng định dạng');
    }

    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mobile = $('#phone').val();
    if(mobile !==''){
        if (vnf_regex.test(mobile) == false) 
        {
          $('.check-phone').css({
            color: 'red'
          }).text('Số điện thoại không đúng định dạng');
        }else{
           
        }
    }else{
      $('.check-phone').css({
        color: 'red'
      }).text('Chưa điền số điện thoại');
    }
    
    var vnf_regex1 =/(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))/;
    var date = $('#date').val();
    if(vnf_regex1.test(date)){
      $('.check-date').css({
        color: 'red'
      }).text('');
    }
    else{
      $('.check-date').css({
        color: 'red'
      }).text('Không đúng định dạng');
    }

    var input_name = $('#town').val();
    if (3 < input_name.length < 50) {
      $('.check-town').css({
        color: 'red'
      }).text('Tối thiểu 3 ký tự và tối đa 50 ký tự');
    }
    var input_name = $('#school').val();
    if (3 < input_name.length < 50) {
      $('.check-school').css({
        color: 'red'
      }).text('Tối thiểu 3 ký tự và tối đa 50 ký tự');
    }
    });
});


