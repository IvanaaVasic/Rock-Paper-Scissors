const rulesBtn = document.querySelector(".rules-btn");
const modal = document.querySelector(".modal-rules");
const closeBtns = document.querySelectorAll(".close");

rulesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

//uzimam razlicite izbore krugova (uzeti sva tri odvojeno)
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");

//ceeo container odabira
const choosingContainer = document.querySelector(".picking-sign-container");
//container bitke
const battleContainer = document.querySelector(".battle-container");

//uzimam krugove koje prikazujem u borbi
const battlePaper = document.querySelector(".my-paper-picked");
const battleScissors = document.querySelector(".my-scissors-picked");
const battleRock = document.querySelector(".my-rock-picked");

//u zavisnosti koji sam pritisla, stavljam ceo container u display none,
//i pustam display od drugog kontejnera, prikazujem dugme koje sam odabrala
//uzimam random odabir na math random iz areja dugmica, i display njih takodje

const housePaper = document.querySelector(".house-paper-picked");
const houseScissors = document.querySelector(".house-scissors-picked");
const houseRock = document.querySelector(".house-rock-picked");

//waiting circle
const waitingCircle = document.querySelector(".waiting-circle");

const houseSigns = [housePaper, houseScissors, houseRock];
let randomNum;

paper.addEventListener("click", () => {
  displayChoosedSign(battlePaper);
  setTimeout(() => calculateResult("house-scissors-picked", "house-rock-picked"), 1500);
  // calculateResult("house-scissors-picked", "house-rock-picked");
});
scissors.addEventListener("click", () => {
  displayChoosedSign(battleScissors);
  setTimeout(() => calculateResult("house-rock-picked", "house-paper-picked"), 1500);

  //   calculateResult("house-rock-picked", "house-paper-picked");
});
rock.addEventListener("click", () => {
  displayChoosedSign(battleRock);
  setTimeout(() => calculateResult("house-paper-picked", "house-scissors-picked"), 1500);

  //   calculateResult("house-paper-picked", "house-scissors-picked");
});

function displayChoosedSign(choosedSign) {
  waitingCircle.style.display = "flex";
  choosingContainer.style.display = "none";
  battleContainer.style.display = "flex";
  choosedSign.style.display = "flex";
  win.style.display = "none";
  lose.style.display = "none";
  draw.style.display = "none";
  randomNum = Math.floor(Math.random() * 3);
  displayHouseChosse();
}
function displayHouseChosse() {
  setTimeout(function () {
    waitingCircle.style.display = "none";
    houseSigns[randomNum].style.display = "flex";
  }, 1000);
}

//menjnam score

const win = document.querySelector(".win-result");
const lose = document.querySelector(".lose-result");
const draw = document.querySelector(".draw-result");

function calculateResult(loseResult, winResult) {
  //score
  const scoreElement = document.querySelector(".score-value");
  let score = parseInt(scoreElement.innerText);

  if (houseSigns[randomNum].classList.contains(loseResult)) {
    lose.style.display = "flex";
    win.style.display = "none";
    draw.style.display = "none";
    score--;
  } else if (houseSigns[randomNum].classList.contains(winResult)) {
    win.style.display = "flex";
    // battleContainer.style.width = "65vw";
    lose.style.display = "none";
    draw.style.display = "none";
    score++;
  } else {
    draw.style.display = "flex";
    // battleContainer.style.width = "65vw";
    win.style.display = "none";
    lose.style.display = "none";
  }

  scoreElement.innerHTML = score;
}

const playAgain = document.querySelectorAll(".play-again-btn");

playAgain.forEach((btn) => {
  btn.addEventListener("click", () => {
    battleContainer.style.display = "none";
    choosingContainer.style.display = "flex";
    battlePaper.style.display = "none";
    battleScissors.style.display = "none";
    battleRock.style.display = "none";
    houseSigns[randomNum].style.display = "none";
  });
});
