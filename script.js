const h2 = document.createElement("h2")
h2.textContent = ""
document.querySelector("body").appendChild(h2)


function myFunction() {
    document.getElementById("myP").style.visibility = "hidden";
    
  }
  function myFunction2() {
    document.getElementById("myP").style.visibility="visible";
    
  }

 
 const h1 = document.querySelector("h1");

 const theImage = document.getElementById("#theImage")
 

 function clickAlert() {
  alert('I was clicked!');
}

h1.addEventListener('click', clickAlert);
theImage.addEventListener('click', clickAlert);