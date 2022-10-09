function first (){
    document.getElementsByClassName('.work3').innerHTML="html"};


    onmouseover="document.getElementById('work1').outerHTML='hello'"
    onmouseout="document.getElementById('work1').src='img/work1.png'"


    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      }


      // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    3000
  }
  
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 6000);
  }
  


  function modal(){
document.getElementsByClassName('field_input').style.display='block'


  };
    