// ¿ØÖÆÍ¼Æ¬ÏÔÊ¾
var $img = $("article img");
$img.click(function() {
    $(".flayer").show().height(document.body.scrollHeight).width(document.body.scrollWidth);
    var index = $img.index(this);
    $("div.flayer > img").eq(index).show().siblings().hide();
})
$(".flayer").click(function(){
    $(".flayer").hide();
})
