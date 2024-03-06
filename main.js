//https://teachablemachine.withgoogle.com/models/rEQrXeNaQ/

var prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'">';
    });
}
console.log("The ml5 version is - ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rEQrXeNaQ/',modelLoaded);

function modelLoaded()
{
    console.log("The Model is ready Sir!!!!!!!!!!!!!!!!");
}

function speak()
{
    var synth = window.speechSynthesis;
    speakdata = "the first prediction is"+ prediction;
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
}