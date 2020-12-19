$(document).ready(function(){
  $('.nav_btn').click(function(){
    $('.mobile_nav_items').toggleClass('active');
  });
  $( "#home" ).fadeIn();
  $( ".homebtn" ).css('color',' #4ed4f0')
    $( ".infobtn" ).css('color',' white')
    $( ".educbtn" ).css('color',' white')
    $( ".expbtn" ).css('color',' white')
  $( ".homebtn" ).click(function() {
    $( "#home" ).fadeIn();
    $( "#basic" ).css('display','none')
    $( "#educ" ).css('display','none')
    $( "#exp" ).css('display','none')
    $( ".homebtn" ).css('color',' #4ed4f0')
    $( ".infobtn" ).css('color',' white')
    $( ".educbtn" ).css('color',' white')
    $( ".expbtn" ).css('color',' white')
  });
  $( ".infobtn" ).click(function() {
    $( "#home" ).css('display','none')
    $( "#basic" ).fadeIn();
    $( "#educ" ).css('display','none')
    $( "#exp" ).css('display','none')
    $( ".infobtn" ).css('color',' #4ed4f0')
    $( ".homebtn" ).css('color',' white')
    $( ".educbtn" ).css('color',' white')
    $( ".expbtn" ).css('color',' white')
  });
  $( ".educbtn" ).click(function() {
    $( ".educbtn" ).css('color',' #4ed4f0')
    $( "#home" ).css('display','none')
    $( "#basic" ).css('display','none')
    $( "#educ" ).fadeIn();
    $( "#exp" ).css('display','none')
    $( ".educbtn" ).css('color',' #4ed4f0')
    $( ".infobtn" ).css('color',' white')
    $( ".homebtn" ).css('color',' white')
    $( ".expbtn" ).css('color',' white')
  });
  $( ".expbtn" ).click(function() {
    $( "#home" ).css('display','none')
    $( "#basic" ).css('display','none')
    $( "#exp" ).fadeIn();
    $( "#educ" ).css('display','none')
    $( ".expbtn" ).css('color',' #4ed4f0')
    $( ".infobtn" ).css('color',' white')
    $( ".educbtn" ).css('color',' white')
    $( ".homebtn" ).css('color',' white')

  });
});

