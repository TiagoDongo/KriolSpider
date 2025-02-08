const showcase = document.querySelector('.card')
const timeWait = 3000
const timeDisplay = 15000
const timeTotalCicle = timeWait + timeDisplay

function showinfo(){
    if (window.innerWidth > 768) {
        showcase.classList.add('active')
    }
}

function hideinfo(){
    if (window.innerWidth > 768) {
        showcase.classList.remove('active')
    }
}

function startAnimation(){
    setTimeout(showinfo, timeWait)
    setTimeout(hideinfo, timeTotalCicle)
}

document.addEventListener('DOMContentLoaded', function(){
    if(window.innerWidth > 768){
        startAnimation()
        setInterval(startAnimation, timeTotalCicle)
    }
})

window.addEventListener('resize', function () {
    if (this.window.innerWidth <= 768) {
        showcase.classList.remove('active')
    }
})