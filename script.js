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




const tabs = document.querySelectorAll(".tabs a")
const popup = document.getElementById("popup")
const closeBtn = document.querySelector(".fa-xmark")

const popupTitle = document.getElementById("popup-title")
const popupText = document.getElementById("popup-text")
const popupImage = document.getElementById("popup-image")
const popupBtn = document.getElementById("popup-btn")

let tabContents = {}

async function loadPopupData() {
    try {
        const response = await fetch("popup-data.json")
        tabContents = await response.json()
        console.log("JSON carregado:", tabContents)
    } catch (error) {
        console.error("Erro ao carregar JSON:", error)
    }
}

loadPopupData().then(() => {
    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault()
            const tabName = tab.textContent.trim()

            if (tabName === "Get Started") {
                return
            }

            if (tabContents[tabName]) {
                popupTitle.textContent = tabContents[tabName].title || tabName
                popupText.textContent = tabContents[tabName].text

                
                if (tabContents[tabName].image) {
                    popupImage.src = tabContents[tabName].image
                    popupImage.alt = tabContents[tabName].title || tabName
                } else {
                    popupImage.src = "assets/image-0.jpg"
                }

                popupBtn.textContent = tabContents[tabName].buttonText
                popupBtn.href = tabContents[tabName].buttonLink

                popup.classList.remove("magictime", "vanishOut")

                popup.classList.add("magictime", "vanishIn")

                popup.style.display = "flex"
            } else {
                console.warn("Nenhum conteúdo encontrado para:", tabName)
            }
        })
    })
})

// Fechar pop-up
closeBtn.addEventListener("click", function () {
    popup.classList.remove("magictime", "vanishIn")
    popup.classList.add("magictime", "vanishOut")

    setTimeout(() => {
        popup.style.display = "none"
    }, 3000)
})

// Fechar ao clicar fora do pop-up
popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.classList.remove("magictime", "vanishIn")
        popup.classList.add("magictime", "vanishOut")

        setTimeout(() => {
            popup.style.display = "none"
        }, 3000)
    }
})