$("#but1").bind("mouseover mouseout",function(){
    $("#but1").toggleClass("mouseout");
});

$("#but2").bind("mouseover mouseout",function(){
    $("#but2").toggleClass("mouseout");
});

$("#input1").bind("click",function(){
   let a=$("#input1").text();
   let b='asarkhaja@gmail.com';

    $("#input1").css({"border":"1px groove grey"});
     $("#span1").show();
   
   });


$("#input2").bind("click",function(){
    $("#input2").css({"border":"1px groove red"});
    $("#span2").show();

});


$("#input3").click(function(){
    $("#input3").css({"border":"1px groove red"});
    $("#span3").show();
});

$("#input4").click(function(){
    $("#input4").css({"border":"1px groove red"});
    $("#span4").show();
});