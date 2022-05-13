$('.tahdith').click(function() {location.reload();});

$('.getCode').click(function() {
$('.CodeChannle textarea').text("<iframe allowfullscreen='true' style='display: block;border-radius: 5px;border: 1px solid #eee;margin: 0 auto;' height='560' src='"+window.location.href+"' width='100%'></iframe>");

if($('.CodeChannle').css('display') == 'none' ){
    $('.CodeChannle').css('display','block');

}else{$('.CodeChannle').css('display','none');}


});
