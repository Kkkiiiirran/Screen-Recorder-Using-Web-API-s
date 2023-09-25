//make function first for rendering selectors easily

//selector function

function $(selector) {  // $ is a function name
  return document.querySelector(selector);
}


//initialise all variables

let format = $('#format');  //selects the format selector
let downloadR = $("#downloadR");
let startR = $("#startR");
let stopR = $("#stopR");
let videoRecording = $("#videoRecording");
let showing = $("#showing");
let mediaRecorder;
let mediaChunks = [];
let selectedFormat = "video/webm";

//define all functions
async function startVideoRecording() {  
    console.log("Start Recording button clicked");
    let options = {video: true, audio: true, mediaSource: 'screen'};

    try { 

        let stream = await navigator.mediaDevices.getDisplayMedia();
        mediaRecorder = new MediaRecorder(stream, options); //create a new mediaRecorder object 

        mediaRecorder.ondataavailable = (event) => { //event handler for when data is available
            if (event.data.size > 0) { //if the size of the data is greater than 0
                mediaChunks.push(event.data); //push the data to the mediaChunks array 
            }
        }

        mediaRecorder.onstop = () => {  //event handler for when the recording is stopped
            let blob = new Blob(mediaChunks, {type: selectedFormat});  //create a new blob object 
            videoRecording.classList.remove("d-none"); 
            showing.classList.add("d-none"); 
            videoRecording.src = window.URL.createObjectURL(blob); //set the source of the videoRecording element to the blob object //what is the createObjectURL method? //The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.
            downloadR.classList.remove("dissabled"); 
            startR.classList.remove("dissabled"); 
            stopR.classList.add("dissabled");
            format.classList.remove("dissabled"); 
        }

        mediaRecorder.start();
        videoRecording.classList.add("d-none");
        showing.classList.remove("d-none");
        downloadR.classList.add("dissabled");
        startR.classList.add("dissabled");
        stopR.classList.remove("dissabled");
        format.classList.remove("dissabled");


    } 
    
    catch(e) {  //catch any errors
        console.log("You are not recording");
    }
}

//change format function

async function changeFormat(e) {
    selectedFormat = e.target.value;
}

//stop recording function

async function stopVideoRecording() {

    if(mediaRecorder && mediaRecorder.state !== "inactive") { //is there a error 
        mediaRecorder.stop();
        videoRecording.classList.remove("d-none");
        showing.classList.add("d-none");
        downloadR.classList.remove("dissabled");
        startR.classList.remove("dissabled");
        stopR.classList.add("dissabled");
        format.classList.remove("dissabled");


        var tracks = mediaRecorder.stream.getTracks();

        tracks.forEach(track => {
        track.stop();
        });
    }

    mediaChunks = [];

}

//download recording function

async function downloadVideoRecording() {
    let blob = new Blob(mediaChunks, {type: selectedFormat});
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "VideoRecording" + new Date().getTime() + "." + selectedFormat.split("/")[1];
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}

//initialise eventlisteners
startR.addEventListener("click", startVideoRecording); //function not working // 
format.addEventListener("change", changeFormat);
downloadR.addEventListener("click", downloadVideoRecording);
stopR.addEventListener("click", stopVideoRecording);

