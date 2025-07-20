// init Isotope
var $products = $('.all-products').isotope({
originLeft: false
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $products.isotope({ filter: filterValue });
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      },
});




  const products__p = document.querySelectorAll('.all-products__p .product__p');

  document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const filter = radio.value;  // مثلاً ".female" أو "*"
      products__p.forEach(prod => {
        // إظهار الكل أو مطابقة الصنف
        if (filter === '*' || prod.matches(filter)) {
          prod.style.display = '';
        } else {
          prod.style.display = 'none';
        }
      });
    });
  });


 
  document.addEventListener('DOMContentLoaded', () => {
    // اختيار كل بطاقات الشوكولاتة
    const cards = document.querySelectorAll('.all-products__ch .product__ch');
    // اختيار جميع الراديوات
    const radios = document.querySelectorAll('input[name="category"]');

    // لكل راديو حدث تغير
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        const filter = radio.value; // '*' أو '.price-50' أو '.price-51'

        cards.forEach(card => {
          // إذا اخترنا الكل أو الصنف يطابق البطاقة نعرضها وإلا نخفيها
          if (filter === '*' || card.matches(filter)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
