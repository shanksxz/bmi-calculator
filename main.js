// demo desc
const bmiDescriptions = {
  underweight: 'Being underweight can lead to nutritional deficiencies, a weakened immune system, and potential health issues such as osteoporosis, anemia, and fertility problems. It is recommended to consult a healthcare professional for guidance on achieving a healthy weight.',
  normal: 'Having a normal BMI is associated with a lower risk of developing various health problems, such as cardiovascular diseases, type 2 diabetes, and certain types of cancer. Maintaining a balanced diet and regular physical activity can help you stay within this healthy range.',
  overweight: 'Being overweight increases the risk of developing chronic conditions like high blood pressure, heart disease, stroke, and type 2 diabetes. It is recommended to adopt a healthier lifestyle by incorporating a balanced diet and regular exercise to achieve a healthy weight.',
  moderateObesity: 'Moderate obesity can significantly increase the risk of developing serious health problems, including cardiovascular diseases, type 2 diabetes, sleep apnea, and certain types of cancer. It is advisable to seek professional guidance from a healthcare provider to develop a comprehensive plan for weight management.',
  severeObesity: 'Severe obesity poses a considerable threat to overall health and well-being. It significantly increases the risk of developing life-threatening conditions such as heart disease, stroke, type 2 diabetes, and certain types of cancer. Seeking professional medical guidance and support is highly recommended for effective weight management and improving overall health.',
  morbidObesity: 'Morbid or massive obesity is a serious health condition that can lead to various life-threatening complications, including heart failure, severe sleep apnea, and an increased risk of premature death. Immediate medical intervention and a comprehensive weight management plan are crucial for improving overall health and quality of life.'
};

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  let value;
  document.querySelectorAll('input').forEach((el) => {
    value = {
      ...value,
      [el.dataset.t]: el.value
    }
  })

  let w = value.weight
  let h = value.height / 100
  let result = (w / (h * h)).toFixed(1)

  
  let desc = document.querySelector('.res-para');
  let resultText = document.querySelector('.res-h');

  switch (true) {
    case (result < 18.5):
      resultText.innerText = `${result}`;
      desc.innerText = bmiDescriptions.underweight;
      break;
    case (result >= 18.5 && result < 25):
      resultText.innerText = `${result}`;
      desc.innerText = bmiDescriptions.normal;
      break;
      case (result >= 25 && result < 30):
      console.log(result)
      resultText.innerText = `${result}`;
      desc.innerText = bmiDescriptions.overweight;
      break;
    case (result >= 30 && result < 35):
      resultText.innerText = `${result}`;
      desc.innerText = bmiDescriptions.moderateObesity;
      break;
    case (result >= 35 && result < 40):
      resultText.innerText = `${result}`;
      desc.innerText = bmiDescriptions.severeObesity;
      break;
    case (result >= 40):
      resultText.innerText = `${result}`;
      desc.innerText = bmiDescriptions.morbidObesity;
      break;
    default:
      resultText = 'Invalid BMI value';
      break;
  }


})

document.querySelector('#submit').addEventListener('click', (e) => {
  console.log("hdfbvh")
  document.querySelector('#res').classList.toggle('active');
})
document.querySelectorAll("input[type='range']").forEach((el, index) => {
  el.addEventListener('input', (e) => {
    if (index === 1) {
      console.log(e.target)
      document.querySelectorAll('.ff')[index].innerText = e.target.value
      return
    }
    document.querySelector('.ff').innerText = e.target.value
  })
})

let currentContentIndex = 0;
const contentDivs = document.querySelectorAll('.content-div');
const maxContent = contentDivs.length;

document.querySelectorAll('.content-btn > button').forEach((el, index) => {
  el.addEventListener('click', (e) => {
    console.log(e.target.dataset.btn)
    console.log(index)
    contentDivs.forEach(div => div.classList.remove('active'));
    if (e.target.dataset.btn === 'next') {
      currentContentIndex = currentContentIndex < maxContent - 1 ? currentContentIndex + 1 : maxContent - 1;
      console.log(currentContentIndex)
    } else {
      currentContentIndex = currentContentIndex > 0 ? currentContentIndex - 1 : 0;
    }
    contentDivs[currentContentIndex].classList.add('active');
  });
});


document.querySelector('#res > button').addEventListener('click', (e) => {
  console.log("hdfbvh")
  document.querySelector('#res').classList.toggle('active');
})


// document.getElementById('get-started').addEventListener('click', (e) => {
//   document.getElementById('intro').style.display = 'none';
// })

// document.querySelector('.switch').addEventListener('click', (e) => {
//   // toggle theme
//   document.documentElement.classList.toggle('t');
// })