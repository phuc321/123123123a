window.onload = function() {
    const video = document.getElementById('intro-video');
    const videoContainer = document.getElementById('video-container');
    const contentContainer = document.getElementById('content-container');
    
    video.oncanplay = function() {
        console.log("Video is ready to play.");
    };
    
    video.onended = function() {
        console.log("Video ended.");
        videoContainer.style.opacity = '0';
        setTimeout(function() {
            videoContainer.style.visibility = 'hidden';
            contentContainer.style.opacity = '1';
            contentContainer.style.visibility = 'visible'; 
        }, 1000);
    };
    function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 
};



$(document).ready(function(){
    $('.html').mouseover(function(){
      $('.desc-html').css('display','block');
    $('.html').mouseout(function(){
      $('.desc-html').css('display','none');
        });
    });
    
    $('.css').mouseover(function(){
      $('.desc-css').css('display','block');
    $('.css').mouseout(function(){
      $('.desc-css').css('display','none');
        });
    });
    
    $('.js').mouseover(function(){
      $('.desc-js').css('display','block');
    $('.js').mouseout(function(){
      $('.desc-js').css('display','none');
        });
    });
    
    $('.jquery').mouseover(function(){
      $('.desc-jquery').css('display','block');
    $('.jquery').mouseout(function(){
      $('.desc-jquery').css('display','none');
        });
    });
    
    $('.php').mouseover(function(){
      $('.desc-php').css('display','block');
    $('.php').mouseout(function(){
      $('.desc-php').css('display','none');
        });
    });
  });