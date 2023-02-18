const leftQuery = document.querySelector('.left')
const rightQuery = document.querySelector('.right')
const containerQuery = document.querySelector('.container')


leftQuery.addEventListener('mouseenter',() => containerQuery.classList.add('hover-left'))
leftQuery.addEventListener('mouseleave', () =>{containerQuery.classList.remove('hover-left')})


rightQuery.addEventListener('mouseenter',() => containerQuery.classList.add('hover-right'))
rightQuery.addEventListener('mouseleave', () =>{containerQuery.classList.remove('hover-right')})

