$("#nieuw").click(function(){
    $(".cat3").hide();
    $(".cat2").show();
    $(".cat4").hide();
});
$("#spurt").click(function(){
    $(".cat2").hide();
    $(".cat3").show();
    $(".cat4").hide();
});
$("#all").click(function(){
    $(".cat2").show();
    $(".cat3").show();
    $(".cat4").show();
});
$("#kultuur").click(function(){
    $(".cat2").hide();
    $(".cat3").hide();
    $(".cat4").show();
});
   
    var iframes = $('.cat2');
    let data = iframes.length;
    document.getElementById('recent').innerHTML = data;
    

    var iframes = $('.all');
    let secondData = iframes.length; 
    document.getElementById('alles').innerHTML= secondData;    
    
    var iframes = $('.cat3');
    let thirdData = iframes.length;
    document.getElementById('sport').innerHTML= thirdData;    
    
    var iframes = $('.cat4');
    let finalData = iframes.length;
    document.getElementById('culture').innerHTML= finalData;   