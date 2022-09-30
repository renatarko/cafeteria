const btnMobile = document.querySelector('.btn-mobile')

function showMenu() {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('show')

    const links = document.querySelectorAll('nav ul li a')

    for (let link of links) {
        link.addEventListener("click", function () {
            nav.classList.remove("show")
        })
    }
}

btnMobile.addEventListener('click', showMenu)