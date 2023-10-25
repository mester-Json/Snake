"use strict";

let movementKeys = {
    top: "z",
    bottom: "s",
    left: "q",
    right: "d"
}

const gameStart = () => {
    let mainMenu = document.querySelector(".main-menu");
    let gameWindow = document.querySelector(".game");
    mainMenu.classList.toggle("hidden");
    gameWindow.classList.toggle("hidden");
}

const displayDifficultyPopup = () => {
    const popup = document.querySelector(".difficulty-popup");
    popup.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".menu-content .difficulty-btn").addEventListener("click", displayDifficultyPopup)
    /* window.addEventListener("keydown", (event) => {
        let key = event.key;
        key == movementKeys.top ? console.log("top") :
        key == movementKeys.bottom ? console.log("bottom") :
        key == movementKeys.left ? console.log("left") :
        key == movementKeys.right && console.log("right")
    }) */
<<<<<<< HEAD
})



// Sélectionnez le bouton "Start" par son ID
const startButton = document.getElementById("start-button");

// Sélectionnez la section de jeu par sa classe
const gameSection = document.querySelector(".game");

// Sélectionnez le menu "Start" par sa classe
const mainMenu = document.querySelector(".main-menu");

// Ajoutez un gestionnaire d'événement pour le clic sur le bouton "Start"
startButton.addEventListener("click", () => {
    // Supprimez la classe "hidden" de la section de jeu pour l'afficher
    gameSection.classList.remove("hidden");

    // Ajoutez la classe "hidden" au menu "Start" pour le masquer
    mainMenu.classList.add("hidden");
});
=======

    document.querySelector(".start-btn").addEventListener("click", gameStart);
})
>>>>>>> 66cb0b416782821ef8c59223da6f15cb730aec1d
