
  function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }
  function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
  }