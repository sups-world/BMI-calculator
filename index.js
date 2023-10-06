const formElement = document.getElementById("myForm");

const resultElement = document.getElementById("result");
const categoryElement = document.getElementById("category");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(formElement);
    console.log(formData);
    const height = formData.get("height");
    const weight = formData.get("weight");

    if (height === "" || weight === "") {
      throw new Error("Fields cannot be empty");
    }

    const bmi = calculateBmi(height, weight);

    resultElement.innerText = `Your BMI is::${bmi}`;

    const cat = calcCat(bmi);
    //   console.log(cat);
    categoryElement.innerText = `You are::: ${cat}`;
    formElement.reset();
  } catch (error) {
    console.log(error);
    alert("Some error occured");
  }
});

function calculateBmi(h, m) {
  const bmi = m / (h * h);
  return bmi.toFixed(1);
}

function calcCat(abc) {
  if (abc < 18.5) {
    return "Underweight";
  } else if (abc >= 18.5 && abc <= 24.9) {
    return "Normal weight";
  } else if (abc >= 25 && abc <= 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}
