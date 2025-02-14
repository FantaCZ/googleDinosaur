document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const block = document.getElementById('block');
    const startButton = document.getElementById('startButton');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let isJumping = false;
    let isGameOver = false;

    function jump() {
        if (isJumping) return;
        isJumping = true;
        character.classList.add('animate');
        setTimeout(() => {
            character.classList.remove('animate');
            isJumping = false;
        }, 300); // Faster jump
    }

    function startGame() {
        block.style.display = 'block';
        block.style.animation = 'block 3s infinite linear'; // Slower block movement
        score = 0;
        isGameOver = false;
        scoreDisplay.innerText = score;
        startButton.style.display = 'none';

        const gameInterval = setInterval(() => {
            const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
            const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

            if (blockLeft < 40 && blockLeft > 0 && characterTop >= -30) { // Adjusted collision detection
                block.style.animation = 'none';
                block.style.display = 'none';
                isGameOver = true;
                startButton.style.display = 'block';
                clearInterval(gameInterval);
            } else if (!isGameOver && blockLeft < 0) {
                if (characterTop < -30) { // Check if character is above the block
                    score++;
                    scoreDisplay.innerText = score;
                }
            }
        }, 10);
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            jump();
        }
    });

    startButton.addEventListener('click', startGame);
});
