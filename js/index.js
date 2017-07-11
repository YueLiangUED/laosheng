(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //立即验证按钮
    $('.button').on('click',function () {
        //手机号码验证
        var flagPhoneNum = 0;
            var $phoneInputVal = $('#phoneInput').val();
            if($phoneInputVal==""){

            }
            //134-139 150-152 158 159 182 187 188
            var $reg = /^1((3[4-9])||(5[0-2])||(5[8-9])||(8[8-9])||(82))\d{8}$/g;
            if(isNaN($phoneInputVal) || $phoneInputVal.length != 11||!($reg.test($phoneInputVal))){
                alert('请输入正确的11位移动手机号码!');
            }else {
                $('.buttonBox').fadeIn();
                $(this).hide();
                $('#message').text('您好，您通过初始验证，可以参加特惠活动。');
                flagPhoneNum = 1;
            }
        });
    //200打一年
    $('.btn200').on('click',function () {
        window.location.href = '';
    });
    $('.btn300').on('click',function () {
        window.location.href = '';
    });
});
