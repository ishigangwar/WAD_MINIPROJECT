console.log("Welcome to Spotiy Clone!");


// Declaring Variables to be used
let songIndex    = 0;
let audioElement = new Audio('/songs/1.mp3');
/* The getElementById() method returns the element that has the ID attribute with the specified value.
This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element on your document. */
let masterSongName = document.getElementById('masterSongName');
let masterPlay     = document.getElementById('masterPlay');
let myProgressBar  = document.getElementById('myProgressBar');
let gif            = document.getElementById('gif');

// Declaring an array for songs to be used!
/* Objects use names to access its "members". In this example, person.firstName returns John:
Object:
const person = {firstName:"John", lastName:"Doe", age:46}; */
let songs = [
    {songName: "Jab We Met", filePath: "/songs/1.mp3", coverPath: "/covers/1.jpg" },
    {songName: "Tum Jo Mile", filePath: "/songs/2.mp3", coverPath: "/covers/2.jpg" },
    {songName: "Khairiyat", filePath: "/songs/3.mp3", coverPath: "/covers/3.jpg" },
    {songName: "Kaun Tujhe", filePath: "/songs/4.mp3", coverPath: "/covers/4.jpg" },
    {songName: "Grind", filePath: "/songs/5.mp3", coverPath: "/covers/5.jpg" },
    {songName: "Woh din", filePath: "/songs/6.mp3", coverPath: "/covers/7.jpg" },
    {songName: "Pasoori", filePath: "/songs/7.mp3", coverPath: "/covers/6.jpg" },
]


// Handle Play/Pause clicks in bottom 
masterPlay.addEventListener('click', () => {
    // if audio element is paused or audio element is not yet started then ...
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else { // If audio is already playing
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity =0;
    }
})


// Update time in Progrss Bar
audioElement.addEventListener('timeupdate', () => {
    console.log("Time Update"); // To detect change in progress bar 
    // Update progress Bar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); // This basically is calculating the percentage of song played
    // console.log(progress);
    myProgressBar.value = progress; // This increases progress bar status as song plays 
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})


// To play songs using play button i9n list of songs that

// Make all plays is a function that is made to make all the buttons to play in the songs list button whenever any single play button is paused
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// Array.from lets you create array from the elements you mention 
/* For example
console.log(Array.from('foo'));
expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
expected output: Array [2, 4, 6]*/
// So the line below means basically, it is creating an arrya which it will access baadmain, using className. 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        // The target event property returns the element that triggered the event. 
        // In this case the play button of the song that is being pressed. 
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0; // Since everytime a new song is being played, we will have to start it from the start
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})


// Previous and Next button working
document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=6){
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0; // Since everytime a new song is being played, we will have to start it from the start
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 6;
    } else {
        songIndex -= 1;
    }

    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0; // Since everytime a new song is being played, we will have to start it from the start
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})