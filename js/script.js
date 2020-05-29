
function tabFn(evt, cityName) {
  var i, servicecontent, servicelinks;
  servicecontent = document.getElementsByClassName("servicecontent");
  for (i = 0; i < servicecontent.length; i++) {
    servicecontent[i].style.display = "none";
  }
  servicelinks = document.getElementsByClassName("servicelinks");
  for (i = 0; i < servicelinks.length; i++) {
    servicelinks[i].className = servicelinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it

$(document).ready(function() {
  var header = $('.navbar_head');
  
  $(window).scroll(function(e){
    if(header.offset().top !== 0){
      if(!header.hasClass('shadow')){
        header.addClass('shadow');
      }
    }else{
      header.removeClass('shadow');
    }
  });
  document.getElementById("defaultOpen").click();
});