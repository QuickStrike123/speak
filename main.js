var prediction_1, prediction_2;

Webcam.set({

    width: 350,

    height: 300,

    image_format: "png",

    png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function TakeSnapshot() {

    Webcam.snap(function (data_uri) {

        document.getElementById("result").innerHTML = "<img id='snapshot' src='" + data_uri + "'>"

    })

}

console.log("Ml5 Version", ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/u2twyH4uk/model.json", modelloaded)

function modelloaded() {

    console.log("modelloaded");

}

function Speak() {

    Synth = window.speechSynthesis;

    speak_1 = "The first prediction is " + prediction_1;

    speak_2 = "The secong prediction is " + prediction_2;

    utterthis = new SpeechSynthesisUtterance(speak_1 + speak_2);

    Synth.speak(utterthis);

}

function Check() {

    img = document.getElementById("snapshot");

    Classifier.classify(img,Gotresults);
    
}

function Gotresults(error,results) {

    if(error){

        console.log(error);

    }
    else{

        console.log(results);

        document.getElementById("result_emotion_name").innerHTML = results[0].label;

        document.getElementById("result_emotion_name2").innerHTML = results[1].label;

        prediction_1 = results[0].label;

        prediction_2 = results[1].label;

        Speak();

        if(results[0].label == "Happy"){

            document.getElementById("emoji_1").innerHTML = "&#128512;"

        }

        if(results[1].label == "Happy"){

            document.getElementById("emoji_2").innerHTML = "&#128512;"

        }

        if(results[0].label == "Sad"){

            document.getElementById("emoji_1").innerHTML = "&#128546;"

        }

        if(results[1].label == "Sad"){

            document.getElementById("emoji_2").innerHTML = "&#128546;"

        }

        if(results[0].label == "Angry"){

            document.getElementById("emoji_1").innerHTML = "&#128545;"

        }

        if(results[1].label == "Angry"){

            document.getElementById("emoji_2").innerHTML = "&#128545;"

        }

    }
    
}