let score = 0;
let gameInterval;
const character = document.getElementById('character');
const block = document.getElementById('block');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    block.style.animation = "block 2s infinite linear"; // Set a fixed duration for the block animation
    block.style.display = 'block';
    gameInterval = setInterval(updateGame, 20);
}

function updateGame() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft < 0) {
        block.style.left = '480px';
        score++;
        scoreDisplay.textContent = score;
    } else {
        block.style.left = (blockLeft - 5) + 'px';
    }

    if (blockLeft < 40 && blockLeft > 0 && characterTop >= -50) {
        endGame();
    }
}

function endGame() {
    clearInterval(gameInterval);
    block.style.display = 'none';
    alert('Game Over! Your score: ' + score);
}

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        jump();
    }
});

function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate');
    }
    setTimeout(function() {
        character.classList.remove('animate');
    }, 300);
}