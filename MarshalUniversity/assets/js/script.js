
//new js


$(window).scroll(function(){
    if ($(this).scrollTop() >13){
       // $('.header-background').addClass('dynamic');
        $('.header').addClass('fixed-header');
        $('.contactHeader').addClass('hideElement');
        $('.main_logo').addClass('logoModify');
        $('.main_header').addClass('main_header_padding');
    } else {
       // $('.header-background').removeClass('dynamic');
      $('.header').removeClass('fixed-header');
      $('.contactHeader').removeClass('hideElement');
      $('.main_logo').removeClass('logoModify');
      $('.main_header').removeClass('main_header_padding');
    }
});

     
$(document).ready(function(){
    $('#menu').slicknav({
        prependTo:'.main_header'
    });
    $('.slicknav_menu').on('click', function(){
      $(this).toggleClass('active');
    })
});

// categories scroller
// logo scroller
$(document).ready(function(){
  $('.banner_slider1').slick({
  infinite: true,
  slidesToShow:2,
  slidesToScroll: 1,
  arrows: true,
  autoplay:false,
  autoplaySpeed: 1,
  speed:3000,
  swipeToSlide:true,
  centerMode:false, 
  variableWidth:true, 
     responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
})
});
// tabber

function openCity(btnName) {
  var i;
  var x = document.getElementsByClassName("welcome_right_content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(btnName).style.display = "block";  
  var ele=document.getElementById(btnName);
  ele.classList.add("myStyle");
}
// testimonial_slider
$(document).ready(function(){
  $('.courses_slider').slick({
  centerMode: true,
  slidesToShow: 3,
  swipe: true,
  dots:trsue,
  infinite: true,
  autoplay:true,
  swipeToSlide: true,
  arrows:false,
  variableWidth:true,
})
});

$(document).ready(function(){
  $(".apply_slider").bxSlider({
   infiniteLoop:true,
   hideControlOnEnd: true,
   pager: false,
   controls: false,
   auto: false,
   minSlides: 5,
   maxSlides: 5,
   moveSlides: 1,
   // mode: 'fade',
        });
    });

 $(document).ready(function(){
  $('.alumni_slider').slick({
  centerMode:false,
  slidesToShow: 4,
  swipe: true,
  infinite: true,
  autoplay:false,
  swipeToSlide: true,
  arrows:true,
  variableWidth:true,
})
});


  $(document).ready(function(){
  $('.celebration_slider').slick({
  centerMode:false,
  slidesToShow: 4,
  swipe: true,
  infinite: true,
  autoplay:true,
  swipeToSlide: true,
  arrows:false,
  variableWidth:true,
})
});
$(document).ready(function() {
  // get the anchor link buttons
  const menuBtn = $('.menu-button');
  // when each button is clicked
  menuBtn.click(()=>{   
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
      // call removeHash function after set timeout
      removeHash();
    }, 2); // 5 millisecond timeout in this case
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const acc = document.getElementsByClassName("accordion");
  acc[0].classList.add("active");
  const firstPanel = acc[0].nextElementSibling;
  firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
  for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          // Close all other accordions
          for (let j = 0; j < acc.length; j++) {
              if (j !== i) {
                  acc[j].classList.remove("active");
                  acc[j].nextElementSibling.style.maxHeight = null;
              }
          }

          this.classList.toggle("active");
          const panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }
});



console.log("im  out in function");
document.getElementById('myForm').addEventListener('submit', function(event) { 
    // Clear previous error messages 
    document.getElementById('fnameError').innerText = ''; 
    document.getElementById('lnameError').innerText = ''; 
    document.getElementById('emailError').innerText = ''; 
    document.getElementById('phoneError').innerText='';
    // document.getElementById('companyError').innerText='';
    document.getElementById('dError').innerText='';
    document.getElementById('courseError').innerText='';
    // document.getElementById('sourcingError').innerText'';
 
    let hasErrors = false; 
 
    // Validate Name 
    const fnameInput = document.getElementById('fname').value.trim(); 
    if (fnameInput === '') { 
        document.getElementById('fnameError').innerText = 'First name is required.'; 
        hasErrors = true; 
    } 
    const lnameInput = document.getElementById('lname').value.trim(); 
    if (lnameInput === '') { 
        document.getElementById('lnameError').innerText = 'Last name is required.'; 
        hasErrors = true; 
    } 
 
    // Validate Email 
    const emailInput = document.getElementById('email').value.trim(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex 
    if (emailInput === '') { 
        document.getElementById('emailError').innerText = 'Email is required.'; 
        hasErrors = true; 
    } else if (!emailPattern.test(emailInput)) { 
        document.getElementById('emailError').innerText = 'Invalid email format.'; 
        hasErrors = true; 
    } 
    const phoneInput= document.getElementById('phone').value.trim(); 
      var expr = /^(0|91)?[6-9][0-9]{9}$/;
       if(!expr.test(phoneInput)) {
            phoneError.innerHTML = "Invalid Mobile Number.";
            hasErrors=true;
        }
      const department = document.getElementById("department").value;
         if (department === "") {
            dError.textContent ="Please select Department.";
            hasErrors= true;
      }
      const course = document.getElementById("course").value;
         if (course === "") {
            courseError.textContent ="Please select course.";
            hasErrors= true;
      }
         
    // Prevent form submission if there are errors 
    if (hasErrors) { 
        event.preventDefault(); 
    } 
}); 

//get current year
const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
