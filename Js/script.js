// async function getData (){
//     const data = await fetch("http://localhost:3000/cities");
//     const jsonData = await data.json();
//     console.log(jsonData)
// }

// getData();


// tips animation

const txtArr = document.querySelector(".txt-anim").children;
const txtLength = txtArr.length;
let index = 0;

function animateTxt () {
    for(let i=0; i<txtLength;i++){
        txtArr[i].classList.remove("txt-view");
    }
txtArr[index].classList.add("txt-view");
 if(index == txtLength-1){
    index = 0;
} else {
    index++;
 }
 setTimeout(animateTxt,3000);

}

window.onload = animateTxt();


//Search btn 

document.getElementById("s-btn").addEventListener("click",async()=>{
    location.href="../Html/precity.html"

    var cityName = document.getElementById("s-box").value;
    sessionStorage.setItem("cityName", cityName);
  
})


var mybutton = document.getElementById("back-to-top-link");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}