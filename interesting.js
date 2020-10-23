/*
 * @Author: F
 * @Date: 2020-10-23
 * @Description: counter
 */

const smallHtml = document.getElementById("smallValue")
smallHtml.oninput = (e) => {
  document.getElementById('largeValue').innerHTML = smallHtml.value*2
}

const counter = () => {
  const smallValue = document.getElementById("smallValue").value

  const smallV = (4/3)*3.14*smallValue*smallValue*smallValue
  const largeV = smallV*8
  if (2*smallV < largeV) {
    alert (`一个半径为${2*smallValue}的馒头更大`)
  } else if (2*smallV > largeV) {
    alert (`两个个半径为${smallValue}的馒头更大`)
  } else {
    alert (`二者一样大`)
  }
}