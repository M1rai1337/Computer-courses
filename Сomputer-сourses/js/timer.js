const dateFinish = new Date('Oct 25 2023 00:00:00') 


function timer(dateFinish){
    let dateNow = new Date()
    let dateDifference = dateFinish - dateNow

    let days = Math.floor(dateDifference / 1000 / 60 / 60 / 24)
    let hours = Math.floor(dateDifference / 1000 / 60 / 60) % 24
    let minutes = Math.floor(dateDifference / 1000 / 60) % 60
    let seconds = Math.floor(dateDifference / 1000) % 60

    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = hours
    document.getElementById('minutes').innerText = minutes
    document.getElementById('seconds').innerText = seconds
}

timer(dateFinish)

setInterval(() => {
    timer(dateFinish)
}, 1000)
   

