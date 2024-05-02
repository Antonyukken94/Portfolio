const myBox = document.getElementById("myBox");

const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", keyPress => {
    myBox.textContent="😮";
    myBox.style.backgroundColor="Tomato";

});
document.addEventListener("keyup", keyPress => {
    myBox.textContent="😀";
    myBox.style.backgroundColor="lightblue";
});
document.addEventListener("keydown", keyPress => {
    if (keyPress.key.startsWith("Arrow")) {
        switch (keyPress.key) {
            case "ArrowUp":
            y -= moveAmount;
                break;
            case "ArrowDown":
            y += moveAmount;
                break;
            case "ArrowLeft":
            x -= moveAmount;
                break;
            case "ArrowRight":
            x += moveAmount;
                break;
                }
                myBox.style.top = (`${y}px`);
                myBox.style.left = (`${x}px`);
                yBox.style.down = (`${y}px`);
                yBox.style.right = (`${x}px`);
        }
    });
