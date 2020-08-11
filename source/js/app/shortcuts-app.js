const audios = document.getElementsByClassName('audio')

hotkeys('tab+1', function(event, handler){
    event.preventDefault() 
    const audio = document.getElementById('audio-one') 
    playAndPause(audios[0])
});

hotkeys('tab+2', function(event, handler){
    event.preventDefault() 
    const audio = document.getElementById('audio-one') 
    playAndPause(audios[1])
});
