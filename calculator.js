
$(".zero").on("click",function(){
  operation(0);
});
$(".one").on("click",function(){
    operation(1);
});
$(".two").on("click",function(){
  operation(2);
});
$(".three").on("click",function(){
  operation(3);
});
$(".four").on("click",function(){
  operation(4);
});
$(".five").on("click",function(){
  operation(5);
});
$(".six").on("click",function(){
  operation(6);
});
$(".seven").on("click",function(){
    operation(7);
});
$(".eight").on("click",function(){
  operation(8);
});
$(".nine").on("click",function(){
  operation(9);
});
$(".plus").on("click",function(){
  operation('+');
});
$(".minus").on("click",function(){
  operation('-');
});
$(".multiple").on("click",function(){
  operation('*');
});
$(".divide").on("click",function(){
  operation('/');
});
$(".dot").on("click",function(){
  operation('.');
});
$(".left-bracket").on("click",function(){
  operation('(');
});
$(".right-bracket").on("click",function(){
  operation(')');
});


$(".percent").on("click",function(){
$("input").val(eval($("input").val())/10);
$("h1").text($("input").val());
});

$(".plus_minus").on("click",function(){
    $("input").val(eval($("input").val())*(-1));
    $("h1").text($("input").val());
});

$(".ac").on("click",function(){
  $("input").val("");
  $("h1").text("calculator");
  $("h1").css("font-size", "80px");
});

$(".factorialize").on("click",function(){
  // alert(factorialize(eval($("input").val())));
$("input").val(factorialize(eval($("input").val())));
  $("h1").text($("input").val());
});

$(".log").on("click",function(){
  $("input").val(Math.log(eval($("input").val())));
    $("h1").text($("input").val());
});

$(".root").on("click",function(){
  $("input").val(Math.sqrt(eval($("input").val())));
    $("h1").text($("input").val());
});

$(".second_power").on("click",function(){
  $("input").val(Math.pow(eval($("input").val()),2));
    $("h1").text($("input").val());
});

$(".cube").on("click",function(){
  $("input").val(Math.pow(eval($("input").val()),3));
    $("h1").text($("input").val());
});

$(".pi").on("click",function(){
  $("input").val(3.14159265359);
    $("h1").text($("input").val());
});

$(".e-number").on("click",function(){
  $("input").val(2.71828);
    $("h1").text($("input").val());
});

$(".sin").on("click",function(){
  $("input").val(Math.sin(eval($("input").val())));
    $("h1").text($("input").val());
});

$(".cos").on("click",function(){
  $("input").val(Math.cos(eval($("input").val())));
    $("h1").text($("input").val());
});

$(".tan").on("click",function(){
  $("input").val(Math.tan(eval($("input").val())));
    $("h1").text($("input").val());
});

$(".ctg").on("click",function(){
  var ctg = 1/Math.tan(eval($("input").val()));
  $("input").val(ctg);
    $("h1").text($("input").val());
});

$(".inverse").on("click",function(){
  var inverse = 1/eval($("input").val());
$("input").val(inverse);
$("h1").text($("input").val());
});

function operation(number){
  $("input").val($("input").val()+number);
}
$("input").on("keydown",function(event){
$("h1").text(eval($("input").val()+event.key));
});

function factorialize(number) {
  if (number<0)
        return -1;
  else if (number==0)
      return 1;
  else return (number*factorialize(number-1));
}

$(document).on("click keydown",function(){
  var evaluation = eval($("input").val());
  var evaluation_length = evaluation.toString().length;
  if(evaluation_length<9)
  $("h1").css("font-size","80px");
  if(evaluation_length>9)
  $("h1").css("font-size","50px");
  if(evaluation_length>14)
  $("h1").css("font-size","30px");
});

$(document).on("keydown",function(e){
var code = e.which || e.keyCode;
if(code!=190&&code!=13&&code!=187&&code!=56&&code!=16&&code!=189&&code!=191&&(code<=47||code>=58))
$("h1").text("invalid");
if(code===8){
$("input").val("");
$("h1").text("calculator");
$("h1").css("font-size", "80px");
}
});

$(document).on("click",function(event){
$("h1").text(eval($("input").val()));
});
$(document).on("click keypress",function(){
  if($("input").val()=="NaN"){
  $("input").val("");
  $("h1").text("Try Again");
}
});
