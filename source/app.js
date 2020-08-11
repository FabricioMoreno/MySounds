

/* var music = document.getElementById("uno");
var btnPlay = document.getElementById("btnPlay");

  function playAudio() {
    if (music.paused) {
      music.play();
      play_music_button.className = 'pause';
    } else {
      music.pause();
      play_music_button.className = 'play';
    }
    music.addEventListener('ended',function() {
      play_music_button.className = 'play';
    });
  }
  hotkeys('space+1',function(event,handler){
    if(music.paused){
      music.play()
    }
    else{
      music.pause()
    }
  }) */
hotkeys('space+1', function(event, handler){
  console.log('sd')
    // Prevent the default refresh event under WINDOWS system
    event.preventDefault() 
    alert('you pressed F5!') 
  });

  console.log('aqui')
 /*  Ur.n6xT6ryRz@k! */