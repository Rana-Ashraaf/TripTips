// Search function 
var cityName = sessionStorage.getItem("cityName");
document.querySelector(".city-name").innerHTML = cityName;


// get data from api
async function getData (){
const data = await fetch("http://localhost:3000/cities");
const jsonData = await data.json();
// call function that display data
displayData(jsonData)
}

function displayData (cityArr){
    cityArr.map ((item)=>{
        if(cityName == [item.name]){

            let captionArr = item.places;
            let textNode = document.querySelectorAll(".text");
            let textArr = Array.from(textNode)
        

            let placeImg = item.placesimg;
            let imgs = document.querySelectorAll(".placeImg")

            let food = item.foodimg;
            let foodImg = document.querySelectorAll(".img-food")

            let foodText = item.food
            let foodCap = document.querySelectorAll(".dish")

            let tips = item.tips
            let tipText = document.querySelectorAll(".tip")

            for(let i=0 ; i<textArr.length;i++){
                
                textArr[i].textContent = captionArr[i]
         }

         for(let i =0; i<imgs.length; i++){
             imgs[i].src = placeImg[i]
         }


         for(let i =0; i<foodImg.length; i++){
            foodImg[i].src = food[i]
        }

        for(let i =0; i<foodCap.length; i++){
            foodCap[i].textContent = foodText[i]
        }

        for(let i =0; i<tipText.length; i++){
            tipText[i].textContent = tips[i]
        }
        }

    })
}

 getData()


// Weather



var slideIndex = 1;
            showSlides(slideIndex);

            // Next/previous controls
            function plusSlides(n) {
            showSlides(slideIndex += n);
            }

            // Thumbnail image controls
            function currentSlide(n) {
            showSlides(slideIndex = n);
            }

            function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
            }


            var mybutton = document.getElementById("home");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}