$(document).ready(function(){
    $('.icon').click(function(){
        $('.list-menu').toggleClass('show-menu');
    });

    $('#comment').click(function(){
        $('.dang').show();
    });

    $('.commnet-right').click(function(){
        $('.spam').toggle();
    })
});

