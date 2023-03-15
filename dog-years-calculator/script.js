// input age calculation
function ageInDogYears() {
  let myAge = document.getElementById("years").value;
  let dogAge = myAge / 7;

  // if under 1 year, convert to months
  if (dogAge < 1) {
    dogAge = ((Math.round(dogAge * 100) / 100) * 12).toFixed(0);
    document.getElementById("result").innerHTML =
      dogAge + " months old in dog years";

    // 1 year and above
  } else {
    dogAge = Math.round(dogAge);
    document.getElementById("result").innerHTML =
      dogAge + " years old in dog years";
  }
}
