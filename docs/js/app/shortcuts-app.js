function getAllIdsAudios(){
    const audios = document.getElementsByClassName('audio')
    const arrayAudios = [...audios]

    const idAudios = arrayAudios.map(audios=>audios.id)

    return idAudios
}

function myHotkey(shortcut,audioId){
    return hotkeys(shortcut, function(event, handler){
        event.preventDefault()
        const audio = document.getElementById(audioId)
        playAndPause(audio)
    });
}

const idAudios = getAllIdsAudios()

let shortcuts = new Array(9).fill().map((i,index)=>`tab+${index+1}`)

myHotkey(shortcuts[0],idAudios[0])
myHotkey(shortcuts[1],idAudios[1])
myHotkey(shortcuts[2],idAudios[2])
myHotkey(shortcuts[3],idAudios[3])
myHotkey(shortcuts[4],idAudios[4])
myHotkey(shortcuts[5],idAudios[5])
myHotkey(shortcuts[6],idAudios[6])
myHotkey(shortcuts[7],idAudios[7])
myHotkey(shortcuts[8],idAudios[8])
myHotkey(shortcuts[9],idAudios[9])