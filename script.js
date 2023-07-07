// async function fetchJSON(request) {
//     try {
//       const response = await fetch(request);
//       const contentType = response.headers.get("content-type");
//       if (!contentType || !contentType.includes("application/json")) {
//         throw new TypeError("Oops, we haven't got JSON!");
//       }
//       const jsonData = await response.json();
//       // process your data further
//       console.log(jsonData)
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   fetchJSON("data.json")

const scoreNumber = document.querySelector(".score-number");
const scoreLevel = document.querySelector(".score-level");
const summaryIcons = document.querySelectorAll(".icon");
const summaryCategories = document.querySelectorAll(".summary-category");
const summaryScores = document.querySelectorAll(".summary-score span");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    scoreNumber.textContent = data[0].score;
    if (data[0].score == 100) {
      scoreLevel.textContent = data[0].level[0];
    } else if (data[0].score >= 75) {
      scoreLevel.textContent = data[0].level[1];
    } else if (data[0].score >= 45) {
      scoreLevel.textContent = data[0].level[2];
    } else {
      scoreLevel.textContent = data[0].level[3];
    }
    const icons = data.map((data) => data.icon);
    const categories = data.map((category) => category.category);
    const scores = data.map((data) => data.score);
    console.log(scores);
    summaryIcons.forEach((icon, i) => (icon.src = icons[i + 1]));
    summaryCategories.forEach(
      (category, i) => (category.textContent = categories[i + 1])
    );
    summaryScores.forEach((score, i) => (score.textContent = scores[i + 1]));
  });
