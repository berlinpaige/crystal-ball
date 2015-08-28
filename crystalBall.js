$(document).ready(function(){
var hiddenFortunes = {
  0: 'When do you want to?',
  1: "Don't even think about it!",
  2: 'Do you really think I know the answer?',
  3: "I don't think so!",
  4: 'Maybe you should ask Siri',
  5: 'Yes! And be proud of it',
  6: 'When pigs fly!',
  7: 'Go for a run, then come back and ask.',
  8: 'Do you really place your confidence in me?',
  9: "You won't be happy with my answer.",
  10: "Of course!",
  11: 'Absolutely not!',
  12: 'Did you ask your mom?',
  13: 'Are you sure?',
  14: 'Maybe you should wait a couple years',
  15: 'Is that what you really want?',
  16: 'How long have you been waiting to ask that?',   
  17: 'Of course!! It was meant to be'
}
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
    var messageToShow = hiddenFortunes[findRandomFortune];
    $(this).append('<h3>' + messageToShow + '</h3>'); 
  });
});