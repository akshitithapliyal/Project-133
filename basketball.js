img="";
object=[];
status="";

function preload(){
    img = loadImage('basketball.jpeg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("model is loaded and starting");
    status=true;
    objectDetector.detect(img, gotresults);
}

function gotresults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status!=""){
for(i=0;i<object.length;i++){
    document.getElementById("status").innerHTML = "Status : Detected Objects";
    fill(130, 200, 40);
    percent=floor(object[i].confidence*100);
    text(object[i].label+" "+percent+" %",object[i].x+15,object[i].y+15);
    noFill();
    stroke(230, 99, 100);
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}