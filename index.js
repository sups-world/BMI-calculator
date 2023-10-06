const formElement = document.getElementById("myForm");

const resultElement = document.getElementById("result");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formElement);
  //   console.log(formData);
  const height = formData.get("height");
  const weight = formData.get("weight");
  const bmi = calculateBmi(height, weight);

  resultElement.innerText = `Your BMI is::${bmi}`;
  formElement.reset();
});

function calculateBmi(h, m) {
  const bmi = m / (h * h);
  return bmi.toFixed(1);
}
