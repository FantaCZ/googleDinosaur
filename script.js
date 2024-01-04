var character = document.getElementById("character");
var block = document.getElementById("block");
var isJumping = false;

function jump() {
    if (!isJumping) {
        isJumping = true;
        if (character.classList != "animate") {
            character.classList.add("animate");
        }
        setTimeout(function() {
            isJumping = false;
            character.classList.remove("animate");
        }, 500);
    }
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterBottom = characterTop + parseInt(window.getComputedStyle(character).getPropertyValue("height"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockRight = blockLeft + parseInt(window.getComputedStyle(block).getPropertyValue("width"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    var blockBottom = blockTop + parseInt(window.getComputedStyle(block).getPropertyValue("height"));

    if (
        characterBottom >= blockTop &&
        characterTop <= blockBottom &&
        blockLeft <= 20 &&
        blockRight >= 0 &&
        !isJumping 
    ) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("prohral jsi");
        clearInterval(checkDead); 
    }
}, 10);