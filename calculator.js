document.querySelector(".bmi-btn").addEventListener("click", () => {
  let mass = document.querySelector("#mass-number").value;
  let height = document.querySelector("#height-number").value;

  let bmi = Math.trunc(mass / (height * height));
  if (bmi < 18.5) {
    console.log(`${bmi}. you're underweight`);
    document.querySelector(
      ".bmi-score"
    ).innerHTML = `Hi! Body Mass Index is ${bmi}. you're underweight`;
  } else if ((bmi > 18.5) & (bmi < 24.9)) {
    console.log(`${bmi}. you're normal`);
    document.querySelector(
      ".bmi-score"
    ).innerHTML = `Hi! Body Mass Index is ${bmi}. you're normal`;
  } else {
    console.log(`${bmi} you're overweight`);
    document.querySelector(
      ".bmi-score"
    ).innerHTML = `Hi! Body Mass Index is ${bmi}. you're overweight`;
  }
});
