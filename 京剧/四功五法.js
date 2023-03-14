const left = document.querySelector('.box5 .left')
const right = document.querySelector('.box5 .right')
const container = document.querySelector('.box5 .container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))