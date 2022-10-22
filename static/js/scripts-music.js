let msc = document.createElement('audio')
msc.src = "https://www.pythonanywhere.com/user/Studify/files/home/Studify/mysite/static/music/music-page.mp3"
msc.loop = true

function startWeb(){
    msc.play()
    document.getElementById('motiv-quote').innerHTML = ''
    motivQuotes = ["You're doing great! Keep going!!"]
    document.getElementById('motiv-quote').innerHTML = motivQuotes[Math.floor(Math.random()*motivQuotes.length)]
    document.getElementById('motiv-quote').style.left = '38.5%'
}

function timee(){
    today = new Date();

    time = today.getHours()

    if (today.getHours() > 12){
        bruh = time % 12
        if (bruh <= 9){
            hours = '0' + bruh
        } else {
            hours = bruh
        }
        ampm = 'P.M'
    } else {
        if (time <= 9){
            hours = '0' + time
        } else {
            hours = time
        }
        ampm = 'A.M'
    }

    tmie = today.getMinutes()

    if (tmie <= 9){
        minutes = '0' + tmie
    } else {
        minutes = tmie
    }

    bruh = hours + ':' + minutes + ' ' + ampm

    document.getElementById('current-time').innerHTML = bruh
}

bruh = setInterval(timee, 1000)

