function startButtonListener() {
    const startButton = document.addEventListener("click", () => {
        console.log("Le Jeu commence !");
    });
};

export function startEventListeners() {
    startButtonListener();
};