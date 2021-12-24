const darkmode = document.getElementById("dark-light-mode")
darkmode.addEventListener('click', () => {
    toggle === 'true' ? toggle = 'false' : toggle = 'true'
    localStorage.toggle = toggle
    const elements = document.querySelectorAll(".element")
    const text = document.querySelectorAll(".text")
    if (toggle === 'true') {
        elements.forEach(element => {
            element.classList.remove("white-bg")
            element.classList.add("dark-blue-bg")
        })
        text.forEach(element => {
            element.classList.remove("very-dark-blue-clr")
            element.classList.add("white-clr")
        })
        body.classList.remove("very-light-gray-bg")
        body.classList.add("very-dark-blue-bg")
    } else {

        elements.forEach(element => {
            element.classList.add("white-bg")
            element.classList.remove("dark-blue-bg")
        })
        text.forEach(element => {
            element.classList.add("very-dark-blue-clr")
            element.classList.remove("white-clr")
        })
        body.classList.add("very-light-gray-bg")
        body.classList.remove("very-dark-blue-bg")
    }
})