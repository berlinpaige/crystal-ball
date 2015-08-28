$(document).ready(function(){
  $('p').hide();
  $('.input').keypress(function(event){
    event.preventDefault();
    event.stopPropogation();
  })
  $('.hiddenFortunes').click(function(event){
    event.preventDefault();
    $('h3').hide();
    $('h4').hide();
    var findRandomFortune = Math.floor(Math.random() * 17); 
    var info = document.getElementById(findRandomFortune).innerHTML;
  $(this).append('<h3>' + info + '</h3>'); 
  });
});