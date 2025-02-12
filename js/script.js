document.addEventListener("DOMContentLoaded", function () {
  // Audio
  const bgm = new Audio("./assets/sounds/say-yes.mp3");
  const clickSound = new Audio("./assets/sounds/meow.mp3");
  const angrySound = new Audio("./assets/sounds/meow-angry.mp3");

  angrySound.volume = 0.5;
  bgm.loop = true;
  bgm.volume = 0.5;

  // Pages
  const pages = document.querySelectorAll(".page");
  let currentPageIndex = 0;

  // Hide all pages except the first one
  function showPage(index) {
    pages.forEach((page, i) => {
      page.style.display = i === index ? "flex" : "none";
    });
  }

  showPage(currentPageIndex);

  // Function to go to next page
  function nextPage() {
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex++;
      showPage(currentPageIndex);
    }
  }

  // Find all buttons and add event listeners
  document.querySelectorAll(".next").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      clickSound.play();
      nextPage();
    });
  });

  // Special Valentine's Page Logic
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const startButton = document.getElementById("start-button");
  const valentineCatHappy = document.querySelector("img[alt='cat-dance']");
  const valentineCatAngry = document.querySelector("img[alt='cat-angry']");
  const valentinesText = document.getElementById("valentines-text");
  const valentinesTextAngry = document.getElementById("valentines-text-angry");

  if (startButton) {
    startButton.addEventListener("click", function () {
      bgm.play();
    });
  }

  if (noButton) {
    noButton.addEventListener("click", function () {
      bgm.pause();
      angrySound.play();
      // Change title
      valentinesText.style.display = "none";
      valentinesTextAngry.style.display = "block";
      // Show angry cat
      valentineCatHappy.style.display = "none";
      valentineCatAngry.style.display = "block";
      // Remove "No" button
      noButton.style.display = "none";
    });
  }

  if (yesButton) {
    yesButton.addEventListener("click", function () {
      bgm.play();
      nextPage(); // Move to the next page when "Yes" is clicked
    });
  }
});
