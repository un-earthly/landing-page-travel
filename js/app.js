const links = document.querySelectorAll('ul li')

function resetLinks() {
    links.forEach((li) => {
        li.classList.remove('active')
    })
}
links.forEach(li => {
    li.addEventListener('click', () => {
        resetLinks();
        li.classList.add('active')
    })
})

