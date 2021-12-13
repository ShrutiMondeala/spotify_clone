// console.log("welcome to sportify")

let songIndex = 0;
let audioElement = new Audio(
    './item/1 (5).mp3'
);
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myProgressBar = document.getElementById("myprogressbar");

let songItems= Array.from(document.getElementsByClassName("songItem"));
let songs =[{
    songName : "Manikemage hitte",
    filePath : "./item/1 (1).mp3",
    coverPath : "./item/cover1.jfif"
},
{
    songName : "Jugnuu",
    filePath : "./item/1 (2).mp3",
    coverPath : "./item/cover2.jfif"
},
{
    songName : "Tamil Tune",
    filePath : "./item/1 (3).mp3",
    coverPath : "./item/cover3.jfif"
},
{
    songName : "Tamil Song",
    filePath : "./item/1 (4).mp3",
    coverPath : "./item/cover4.jfif"
},
{
    songName : "Yaadon me mrte ho",
    filePath : "./item/1 (6).mp3",
    coverPath : "./item/cover5.jfif"
},
{
    songName : "love tune",
    filePath : "./item/Wake-Up.mp3",
    coverPath : "./item/cover6.jfif"
}
]

songItems.forEach((elements,i) =>{

    elements.getElementsByTagName("img")[0].src= songs[i].coverPath;
     elements.getElementsByClassName("songname")[0].innerText= songs[i].songName;
})



//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
         audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
         masterPlay.classList.add('fa-play-circle');
         gif.style.opacity=0;
    }
})

//Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); // to get the present value
    console.log(progress);
    myProgressBar.value = progress;
}
)

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100; // to get the forwarded time
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })

}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        element.classList.add('fa-pause-circle');
        element.classList.remove('fa-play-circle');
        audioElement.src = `./item/1 (${songIndex}).mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `./item/1 (${songIndex}).mp3`;
    audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
})

document.getElementById('privious').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=6;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `./item/1 (${songIndex}).mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
})

