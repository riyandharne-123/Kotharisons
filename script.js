function topFunction(){
 document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      $('html, body').animate({scrollTop:0}, '4000');
  }
   //preloader text
 window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded");
  });

