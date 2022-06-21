let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
  menu.classList.toggle('fa-times');
  menu.classList.toggle('active');
}

let section= document.querySelectorAll('section')
let navLinks= document.querySelectorAll('header .navbar a')

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');

    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop;
      let id = sec.getAttribute('id')

      if(top => offset && top < offset +height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          let navLinks= document.querySelector('header .navbar a[href*='+i+']').classList.add('active');

        });
      };

    });

  
  }
  document.querySelector('#search').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
  }

  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  
     loop:true,
  });


  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload = fadeOut;