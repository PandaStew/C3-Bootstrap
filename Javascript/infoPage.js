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
   
    var iframes = $('.cat2');
    let data = iframes.length;
    console.log("iframes recent:" + data);
    document.getElementById('recent').innerHTML = data;
    

    var iframes = $('.all');
    let secondData = iframes.length;
    console.log("alle iframes:" + secondData) 
    document.getElementById('alles').innerHTML= secondData;    
    
    var iframes = $('.cat3');
    let thirdData = iframes.length;
    console.log("sport iframes:" + thirdData); 
    document.getElementById('sport').innerHTML= thirdData;    
    
    var iframes = $('.cat4');
    let finalData = iframes.length;
    console.log("kultuur iframes:" + finalData); 
    document.getElementById('culture').innerHTML= finalData;   