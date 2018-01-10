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



  $("#form-bt").click(function(event){
    var filmname = $("input#filmname").val();
    var director = $("input#director").val();
    var actor1 = $("input#actor1").val();
    var actor2 = $("input#actor2").val();
    var firstname = $("input#firstname").val();
    // var list = $document.getElementbyId("#film-into-list");

    // $("#film-into-list").appendChild(filmname, director, actor1, actor2, firstname);
    $("#target").html("<li>" + filmname + "</li>" + "<li>" + director + "</li>" + "<li>" + actor1 + "</li>" + "<li>" + actor2 + "</li>" + "<li>" + firstname + "</li>");
    console.log(filmname, director, actor1, actor2, firstname);
    event.preventDefault();
    });
});
