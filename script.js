let gradient = document.getElementById("gradient");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let css = document.getElementById("clipboard-css");
let randomBtn = document.getElementById("random-btn");

setLinearGradient();

function setLinearGradient() {
    gradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = gradient.style.background;
}

function randomColor() {
    let randomColor = "#000000".replace(/0/g,function() {
        return (~~(Math.random()*16)).toString(16);
    });
    return randomColor;

    // let randomBetween = (min, max) => {
    //     return min + Math.floor(Math.random() *  (max - min + 1));
    // }
    // let n1 = randomBetween(0, 255);
    // let n2 = randomBetween(0, 255);
    // let n3 = randomBetween(0, 255);
    // let rgb = `rgb(${n1}, ${n2}, ${n3})`;
    // return rgb;
}

function generateRandomGradient() {
    let colorFrom = randomColor();
    let colorTo = randomColor();

    color1.value = colorFrom;
    color2.value = colorTo;

    gradient.style.background = `linear-gradient(to right, ${colorFrom}, ${colorTo})`;
    css.textContent = gradient.style.background;
}

color1.addEventListener("input", setLinearGradient);
color2.addEventListener("input", setLinearGradient);
randomBtn.addEventListener("click", generateRandomGradient);
