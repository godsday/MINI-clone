var video=document.getElementById('theme');
var btt=document.getElementById('bt');
function change(){
  if (video.muted == false) {    
    video.muted = true;
    btt.className="bi bi-volume-mute";
  }

else {
 video.muted = false;
 btt.className="bi bi-volume-up";

}

}

  

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
  } else {
    document.getElementById("navbar1").style.top = "-83px";
  }
  prevScrollpos = currentScrollPos;
}




/* 
  var button = document.getElementById('bt');
    button.onclick = function change(){

    if (video.muted === false) {    
           video.muted = true;
    }

    else {
        video.muted = false;
    }

    };
 */