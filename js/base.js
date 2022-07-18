$(document).ready(function(){

  //open window on button click

  $(".about").click(function(){
    if($(".aboutwindow").css("display") == 'none'){
      $(".aboutwindow").show();
      $("button.about").addClass("clicked");
    } else {
      $(".aboutwindow").hide();
      $("button.about").removeClass("clicked");
    }
  });

  $(".contact").click(function(){
    if($(".contactwindow").css("display") == 'none'){
      $(".contactwindow").show();
      $("button.contact").addClass("clicked");
    } else {
      $(".contactwindow").hide();
      $("button.contact").removeClass("clicked");
    }
  });


// close window on outside click

  $(".outsideframe").click(function(){
    $(".aboutwindow").hide();
    $("button.about").removeClass("clicked");
    $(".contactwindow").hide();
    $("button.contact").removeClass("clicked");
  });

  $(".workwrapper").click(function(){
    $(".aboutwindow").hide();
    $("button.about").removeClass("clicked");
    $(".contactwindow").hide();
    $("button.contact").removeClass("clicked");
  });


});
