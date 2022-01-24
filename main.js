song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song=loadSound("music.mp3");
}
score_left_wrist=0;
score_right_wrist=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
    image(video,0,0,600,500);
     fill('#ff0000');
     stroke('#ff0000');
     if (score_right_wrist>0.2) {
         circle(leftWrist,rightWrist,20);
         if (rightWristY>0 && rightWristY<=100) {
             document.getElementById("")
         }
     }
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function gotPoses(){
    if(results.length>0){
        console.log(results);
        score_left_wrist=results[0].pose.keypoints[10].score;
        score_right_wrist=results[0].pose.keypoints[9].score;
        

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY)

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY)
    }
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}