const listOfAudios = document.getElementById('listOfAudios')

function playAndPause(audio){
  if(audio.paused){
    audio.play()
  }
  else{
    audio.pause()
  }
}

function whatBtnIs(btn,e){
  if(btn === 'play'){
    const audio = e.path[1].children[1]
    playAndPause(audio)
  }
}

function whatIs(e){
  const event = e.target
  const data = event.dataset

  whatBtnIs(data.btn,e)

}

listOfAudios.addEventListener('click',whatIs)