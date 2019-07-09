
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {
  SC.stream('/tracks/517722948',function(sound){
  $('#start1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
           $('#stop1').click(function(e) {
                      e.preventDefault();
                      sound.stop();
                    });
});
SC.stream('/tracks/495051222',function(sound){
$('#star2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop2').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/313280467',function(sound){
$('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop3').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/134565638',function(sound){
$('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop4').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/345483871',function(sound){
$('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop5').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/303954855',function(sound){
$('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop6').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/311741004',function(sound){
$('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop7').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/311739188',function(sound){
$('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop8').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/311732162',function(sound){
$('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop9').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/315917630',function(sound){
$('#start10').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop10').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/585952578',function(sound){
$('#start11').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop11').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});
SC.stream('/tracks/572556591',function(sound){
$('#start12').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop12').click(function(e) {
                    e.preventDefault();
                    sound.stop();
                  });
});

});
