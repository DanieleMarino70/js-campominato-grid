// TRACCIA:


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



//CREO BUTTON
const buttonEl = document.getElementById("start-game");


//SOLUZIONE TEMPORANEA
const containerEl = document.querySelector(".container");
containerEl.style.display = "none";



//AGGIUNGO AL BOTTONE L'EVENTO CLICK DOVE CREERA' LA GRIGLIA IN CONTAINER
buttonEl.addEventListener("click", function(){
    //CONTAINER CON STYLE TEMPORANEO
    containerEl.style.display = "block";
    //CREO UN ELEMENTO DALL'ID ROW
    const selectDifficultyEl = document.getElementById("game-difficulty");
    const gridEl = document.getElementById("grid");
    const difficultyValue = parseInt(selectDifficultyEl.value);
    //RICHIAMO LA FUNZIONE GRIGLIA
    generateGrid(gridEl, difficultyValue);
});







function generateGrid(grid, difficulty){
    grid.innerHTML= "";

    if (difficulty == 1) {
      for (let i = 0; i < 100; i++) {
        const text = i + 1;
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.classList.add("easy");

        squareEl.addEventListener("click", function () {
          console.log("Hai selezionato la casella:", this);
          this.classList.toggle("active");
        });
        grid.append(squareEl);
        squareEl.append(text);
      }
    } else if (difficulty == 2) {
      for (let i = 0; i < 81; i++) {
        const text = i + 1;
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.classList.add("medium");
        squareEl.addEventListener("click", function () {
          console.log("Hai selezionato la casella:", this);
          this.classList.toggle("active");
        });

        grid.append(squareEl);
        squareEl.append(text);
      }
    } else if (difficulty == 3) {
      for (let i = 0; i < 49; i++) {
        const text = i + 1;
        const squareEl = document.createElement("div");
        squareEl.classList.add("square");
        squareEl.classList.add("hard");
        squareEl.addEventListener("click", function () {
          console.log("Hai selezionato la casella:", this);
          this.classList.toggle("active");
        });

        grid.append(squareEl);
        squareEl.append(text);
      }
    }
}


