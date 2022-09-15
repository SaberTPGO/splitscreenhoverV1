const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

//When we enter the left/right side add/remove class of left/right to initate hover effect on that side
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});
