//Created by katdotexe on 3/2/2021


//carousel function to flip through slides automatically
var myIndex = 0;
carousel();

function carousel() {
  var x = document.getElementsByClassName("slides");
  for (var i = 0; i < x.length; i++) { //loop of slides
    x[i].style.display = "none";  
  }
  myIndex++; //increase my index
  if (myIndex > x.length) {myIndex = 1}  //reset index to 1
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
