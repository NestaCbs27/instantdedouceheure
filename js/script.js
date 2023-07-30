$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

function scrollToAncre(value){
    document.getElementById(value).scrollIntoView();
}


/*
 window.onload = function(){
    document.querySelector('#input-color').addEventListener('change', function() {
        var r = document.querySelector(':root');
        Array.from(document.querySelectorAll('.update-fill')).forEach(v => v.style.fill = this.value);
        Array.from(document.querySelectorAll('.update-stroke')).forEach(v => v.style.stroke = this.value);
        r.style.setProperty('--main-color', this.value);
    });


};
*/



/*
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
         document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
    });
}); 
*/
