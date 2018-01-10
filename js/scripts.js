$(function(){
  $("#wings").change(function(event){
    var wingType = $("#wings").val();
    event.preventDefault();
    console.log(wingType);
  });

  $(".radio").change(function(event) {
    var type = $("input:radio[name=type]:checked").val();;
    event.preventDefault();
    console.log(type);
  });

// $(".btn").click(function(){
//
//
// });



});
