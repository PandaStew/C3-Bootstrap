$("#actueel").click(function(){
    $(".cat2").hide();
    $(".cat1").show();
    $(".cat3").hide();
});
$("#sport").click(function(){
    $(".cat1").hide();
    $(".cat2").show();
    $(".cat3").hide();
});
$("#alles").click(function(){
    $(".cat1").show();
    $(".cat2").show();
    $(".cat3").show();
});
$("#cultuur").click(function(){
    $(".cat1").hide();
    $(".cat2").hide();
    $(".cat3").show();

});