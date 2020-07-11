// for(var i=0;i<7;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//   this.style.backgroundColor = "red";
// });
// }
for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {
      var buttonElement = this.innerHTML;
      getSounds(buttonElement);
      buttonAnimation(buttonElement);
      // this.classList.add("pressed");
      // setTimeout(function() {
      //   this.classList.add("pressed");
      // }, 100) ;
    });

function getSounds(buttonElement) {
  switch (buttonElement) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
  }
}
document.addEventListener('keydown', function(e) {
  getSounds(e.key);
  buttonAnimation(e.key);
  // console.log(e);
});
function buttonAnimation(buttonElement){
  var active=document.querySelector("."+buttonElement);
  active.classList.add("pressed");
  setTimeout(function() {
    active.classList.remove("pressed");
  }, 100) ;
}
