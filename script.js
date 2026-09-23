const boomwhackerLowC = document.getElementById('c-low');
const boomwhackerD = document.getElementById('d');
const boomwhackerE = document.getElementById('e');
const boomwhackerF = document.getElementById('f');
const boomwhackerG = document.getElementById('g');
const boomwhackerA = document.getElementById('a');
const boomwhackerB = document.getElementById('b');
const boomwhackerHighC = document.getElementById('c-high');

const boomwhackers = [
    boomwhackerLowC,
    boomwhackerD,
    boomwhackerE,
    boomwhackerF,
    boomwhackerG,
    boomwhackerA,
    boomwhackerB,
    boomwhackerHighC
]

const boomwhackerSounds = [
    new Audio('sounds/c-low.mp3'),
    new Audio('sounds/d.mp3'),
    new Audio('sounds/e.mp3'),
    new Audio('sounds/f.mp3'),
    new Audio('sounds/g.mp3'),
    new Audio('sounds/a.mp3'),
    new Audio('sounds/b.mp3'),
    new Audio('sounds/c-high.mp3')
]

boomwhackers.forEach((boomwhacker, index) =>
{
    boomwhackerSounds[index].currentTime = 0;
    boomwhacker?.addEventListener('click', () =>
    {
        boomwhackerSounds[index].cloneNode().play();
    });
});