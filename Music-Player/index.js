var audioElements = {};

var playButtons = document.querySelectorAll(".play");

for (var i = 0; i < playButtons.length; i++) {
    let currentButton = playButtons[i];
    let playIcon = currentButton.querySelector(".playIcon");
    let pauseIcon = currentButton.querySelector(".pauseIcon");
    let isPlaying = false; // Track the play/pause state for each button

    currentButton.addEventListener("click", function (event) {
        var songDiv = this.parentElement;
        var title = songDiv.querySelector(".song").textContent;
        togglePlay(title);

        // Toggle the visibility of play and pause icons based on the audio's play state
        isPlaying = !isPlaying; // Toggle the play/pause state for this button
        if (isPlaying) {
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline-block";
        } else {
            playIcon.style.display = "inline-block";
            pauseIcon.style.display = "none";
        }
    });
}

function togglePlay(title) {
    if (!audioElements) {
        audioElements = {};
    }

    //functionality of play and pause. if it is playing then click krne pe pause ho jaye and vice versa
    
    if (audioElements[title]) {
        var audio = audioElements[title];
        if (audio.paused) {
            audio.play();
            
        } else {
            audio.pause();
           
        }
    } 
    else {
        switch (title) {
            case "Hamra Kyu Chutiya":
                audioElements[title] = new Audio("audio/audio1.mp3");
                break;

            case "f":
                audioElements[title] = new Audio("audio/audio2.mp3");
                break;

            case "Ohh La La":
                audioElements[title] = new Audio("audio/audio3.mp3");
                break;

            case "Anguri Bhabhi":
                audioElements[title] = new Audio("audio/audio4.mp3");
                break;

            case "Mahesh Dalle":
                audioElements[title] = new Audio("audio/audio5.mp3");
                break;

            case "Malwa Ka Beta":
                audioElements[title] = new Audio("audio/audio6.mp3");
                break;

            case "Salman Khan aya hai":
                audioElements[title] = new Audio("audio/audio7.mp3");
                break;

            case "Hooka Baar":
                audioElements[title] = new Audio("audio/audio8.mp3");
                break;
                
            default:
                console.log(title);
        }

        if (audioElements[title]) {
            audioElements[title].play();
        }


        // This is written so that when the next song plays, the previous song automatically gets paused.
    for (var audioTitle in audioElements) {
        if (audioTitle !== title && !audioElements[audioTitle].paused) {
            audioElements[audioTitle].pause();
        }
    }
    }
}
