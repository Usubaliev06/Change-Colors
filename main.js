const colorBoxArr = Array.from(document.querySelectorAll('.color-box'))
const btn = document.querySelector('.change-colors-btn')

const genColor = () => Math.round(Math.random() * 256)

btn.addEventListener('click', () => {

  colorBoxArr.forEach((item) => item.style.backgroundColor = `rgb(${genColor()},${genColor()},${genColor()})`)

})