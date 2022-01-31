function preload(){
    Moustache= loadImage=("https://postimg.cc/BLjq165y");
}

function setup(){
 canvas=createCanvas(400,500);
 canvas.center();
 canvas.position(550,180);
 video= createCapture(VIDEO);
 video.size(400,500);
 video.hide()
 poseNet= ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses)
 
}

function gotPoses(results){
    if ( results.length > 0){
        console.log(results);
        console.log("lipsX="+ results[0].pose.lips.x);
        console.log("lipsY="+ results[0].pose.lips.y);
    }


}

function modelLoaded(){
    console.log("modelLoaded");
}

function draw(){
    image(video, 0,0 , 600,500);
    image( Moustache,lipsX-15,lipsY,30,40);


}


function takeSnapshot(){
    save("myMoustache.jpg");
}

