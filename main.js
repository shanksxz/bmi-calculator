// const buttonContainer = document.querySelector('.ref');
// let activeG = 'Male'

// buttonContainer.addEventListener('click', (e) => {
//   if (e.target.matches('button.g-btn')) {
//     buttonContainer.querySelectorAll('.g-btn').forEach(btn => btn.classList.remove('active'));
//     e.target.classList.add('active');
//     activeG = e.target.dataset.g;
//   }
// });

document.querySelector('#submit').addEventListener('click', (e) => {

  e.preventDefault();
  let value;
  document.querySelectorAll('input').forEach((el) => {
    value = {
      ...value,
      [el.dataset.t]: el.value
    }
  })

  const bmiInfo = document.querySelector('.res-info')

  console.log(value)

  let w = value.weight
  let h = value.height/100
  let result = (w / (h * h)).toFixed(1)

switch(true) {
  case (result < 18.5):
    bmiInfo.innerText = `${result} - Underweight (thinness)`;
    break;
  case (result >= 18.5 && result < 25):
    bmiInfo.innerText = `${result} - Normal weight`;
    break;
  case (result >= 25 && result < 30):
    bmiInfo.innerText = `${result} - Overweight`;
    break;
  case (result >= 30 && result < 35):
    bmiInfo.innerText = `${result} - Moderate obesity`;
    break;
  case (result >= 35 && result < 40):
    bmiInfo.innerText = `${result} - Severe obesity`;
    break;
  case (result >= 40):
    bmiInfo.innerText = `${result} - Morbid or massive obesity`;
    break;
  default:
    bmiInfo.innerText = "Invalid BMI value";
    break;
}

})


document.querySelector('#submit').addEventListener('click', (e) => {
  console.log("hdfbvh")
  document.querySelector('#res').classList.toggle('active');
})

document.querySelectorAll("input[type='range']").forEach((el,index) => {
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
    contentDivs.forEach(div => div.classList.remove('active'));
    if (index === 0){
      currentContentIndex = currentContentIndex > 0 ? currentContentIndex - 1 : 0;
    } else {
      currentContentIndex = currentContentIndex < maxContent - 1 ? currentContentIndex + 1 : maxContent - 1;
    }

    contentDivs[currentContentIndex].classList.add('active');
  });
});


document.querySelector('img').addEventListener('click', (e) => {
  document.querySelector('#res').classList.toggle('active');
})
