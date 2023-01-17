$(document).ready(()=>{
    $('.menuOpen').click(() => {
        $('.menu-wrapper').addClass('active')
    })

    $('.menuClose').click(()=> {
        $('.menu-wrapper').removeClass('active')
    })

    $(document).scroll(()=>{
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
    })
})

var swiper = new Swiper(".mySwiperHome", {
    sliderPerView: 'auto', //content view automatis
    centeredSlide: true, //agar gambar ke tengah
    speed: 1500,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000
    }
});

var swiper = new Swiper(".mySwiperProduct", {
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 1500,
    navigation: {
      nextEl: ".bx bxs-chevron-right-circle",
      prevEl: ".bx bxs-chevron-left-circle",
    },
    breakpoints: { //untuk mengatur ukuran responsive bisa di cek di web Swiper API> parameters
        350: { 
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: { //bacanya untuk ukuran 1200 keatas
            slidesPerView: 4,
            spaceBetween: 40,
        }
    }
});
var swiper = new Swiper(".mySwiperTesti", {
    spaceBetween: 30,
    speed: 1500,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000
    }
  });