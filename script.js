function hideCat() {
    let cat = document.getElementById("cat");
    cat.style.display = "none";
    cat.style.visibility = "hidden";
}

let showToothless = () => {
    let music = document.getElementById("music");
    music.volume = 0.20;
    music.play();
    hideCat();
    let toothless = document.getElementById("toothless");
    let noButton = document.getElementById("no-button");
    let yesButton = document.getElementById("yes-button");
    let otherYes = document.getElementById("other-yes-button");
    toothless.style.display = "block";
    toothless.style.visibility = "visible";
    noButton.style.display = "none";
    noButton.style.visibility = "hidden";
    yesButton.style.display = "none";
    yesButton.style.visibility = "hidden";
    otherYes.style.display = "none";
    otherYes.style.visibility = "hidden";

};

let noCounter = 0;
function clickedNo() {
    let noButton = document.getElementById("no-button");
    let otherYes = document.getElementById("other-yes-button");
    let yesButton = document.getElementById("yes-button");
    noCounter += 1;
    console.log(noCounter);
    switch (noCounter) {
        case 1:
            noButton.innerText = "Are you sure?";
            break;
        case 2:
            noButton.innerText = "Are you really sure?";
            break;
        case 3:
            noButton.innerText = "Are you really really sure??";
        default:
            noButton.style.display = "none";
            noButton.style.visibility = "hidden";
            otherYes.style.display = "inline";
            otherYes.style.visibility = "visible";
            break;



    }

}

