$(document).ready(function(){

  

 /*Scroll to top when arrow up clicked BEGIN*/
 $(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/*Scroll to top when arrow up clicked END*/


  $(".bnt").click(function(){
    $("div.item").toggle(700);
     });



// collapsible for icon dropdown

     var coll = document.getElementsByClassName("collapsible");
     var i;
     
     for (i = 0; i < coll.length; i++) {
       coll[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (content.style.maxHeight){
           content.style.maxHeight = null;
         } else {
           content.style.maxHeight = content.scrollHeight + "px";
         } 
       });
     }


  });

  function myFunction(x) {
    x.classList.toggle("change");
  }
