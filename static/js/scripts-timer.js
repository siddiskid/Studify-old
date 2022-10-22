/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    /*const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };*/

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Functions
let timer = document.getElementById('timer-numbers').textContent.trim()
let toChannge = document.getElementById('timer-numbers')
let snd1 = document.createElement('audio')
snd1.src = 'https://www.pythonanywhere.com/user/Studify/files/home/Studify/mysite/static/music/sound-2.mp3'
let snd2 = document.createElement('audio')
snd2.src = 'https://www.pythonanywhere.com/user/Studify/files/home/Studify/mysite/static/music/sound-3.mp3'

isBreak = 'false'

//let snd = new Audio('Alarm-clock-bell-ringing-sound-effect.mp3')

bruh = timer.split(':')

let min = parseInt(bruh[0])
let sec = parseInt(bruh[1])

function start(){
    if (min != 0){
        if (sec == 0){
            sec += 59
            min -= 1
        }else{
            sec -= 1
        }
    }

    if (min == 0 && sec != 0){
        sec -= 1
    }

    min = min.toString()
    sec = sec.toString()

    if (sec.length == 1){
        toChannge.innerHTML = min + ':0' + sec
    } else {
        toChannge.innerHTML = min + ':' + sec
    }

    min = parseInt(min)
    sec = parseInt(sec)

    if (min == 0 && sec == 0){
        if (isBreak == 'true'){
            snd1.play()
            alert('Time to get back!')
            isBreak = 'false'
        } else{
            snd2.play()
            alert('You can take a break now :)')
            isBreak = 'true'
        }
        if (isBreak == 'true'){
            toChannge.innerHTML = '5:00'
            min = 5
            sec = 0
        } else if (isBreak == 'false'){
            toChannge.innerHTML = '25:00'
            min = parseInt(bruh[0])
            sec = parseInt(bruh[1])
        }
    }
}

function yes(){
    a = setInterval(start, 1000)
    document.getElementById('start-btn').disabled = true
}

function pause(){
    clearInterval(a)
    document.getElementById('start-btn').disabled = false
}

function reset(){
    clearInterval(a)
    toChannge.innerHTML = timer

    neww = timer.split(':')

    min = parseInt(neww[0])
    sec = parseInt(neww[1])

    document.getElementById('start-btn').disabled = false
}

function addTask(){
    toadd = document.getElementById('add-task-input').value

    db.collection('Bruh').doc().set({
        'gruh': toadd
    })
}