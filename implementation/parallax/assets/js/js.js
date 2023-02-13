let publicVarPlugin = "Scroll Animation jQuery Plugin";
let publicVarFade = "Scroll Animation Fade In & Out jQuery Plugin";
let publicVarZoom = "Scroll Animation Zoom In & Out jQuery Plugin";
let publicVarRotate = "Scroll Animation Rotate Clockwise & Counterclockwise jQuery Plugin";
let publicVarFlip3D = "Scroll Animation Flip 3D X & Y & Reverse jQuery Plugin";
$(document).ready(function () {
      onload();
      function onload(){
            $("#title").text(publicVarPlugin);
      }
      $(window).resize(function () {
            //alert("Resized");
            onload();
      });
});