const horizontalNavBar = document.querySelector(".navbar-container")
const verticalNavBar = document.querySelector(".navbar-vertical")

let children = Array.from(horizontalNavBar.children);
let childrenVertical = Array.from(verticalNavBar.children);
let circleIndicator = document.getElementById('navbar-circle-indicator')
let lineIndicator = document.getElementById('navbar-line-indicator')
//
// let indicatorPosY
// let indicatorPosX
let chosenItem = children[0]


updateIndicatorPosition(circleIndicator, children[0])
updateIndicatorPosition(lineIndicator, childrenVertical[0])


function updateIndicatorPosition(indicator, element) {
  let indicatorPosY = element.getBoundingClientRect().top
  let indicatorPosX = element.getBoundingClientRect().left
  // let indicatorPosY = element.offsetTop
  // let indicatorPosX = element.offsetLeft
  indicator.style.top = indicatorPosY + "px"
  indicator.style.left = indicatorPosX + "px"

  console.log(indicatorPosX, indicatorPosY)

  if(indicator == lineIndicator) {
    indicator.style.left = (indicatorPosX - 7.5) + "px"
  }
}

function changeCircleColor(themeIndex) {
  let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${themeIndex}`)
  document.querySelector("body").style.backgroundColor = color
  circleIndicator.style.backgroundColor = color
}

function changeLineColor(themeIndex) {
  let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${themeIndex}`)
  document.querySelector("body").style.backgroundColor = color
  lineIndicator.style.borderColor = color
}


children.forEach((child, i) => {

  let target

  child.addEventListener("mouseover", () => {
    if(child.dataset.theme) {
      console.log(child.dataset.theme)
      circleIndicator.classList.remove("animate")
      updateIndicatorPosition(circleIndicator, child)
      circleIndicator.classList.add("animate")
      changeCircleColor(child.dataset.theme)
      target = child
      console.log(target)
    }
  })

  child.addEventListener("mouseout", () => {
    if(child.dataset.theme != target.dataset.theme) {
      console.log(child.dataset.theme)
      circleIndicator.classList.remove("animate")
      updateIndicatorPosition(circleIndicator, chosenItem)
      circleIndicator.classList.add("animate")
      changeCircleColor(chosenItem.dataset.theme)
    }
  })

  // circleIndicator.addEventListener("click", () => {
  //   if(child.dataset.theme) {
  //     console.log(child.dataset.theme)
  //     circleIndicator.classList.remove("animate")
  //     updateIndicatorPosition(circleIndicator, child)
  //     circleIndicator.classList.add("animate")
  //     changeCircleColor(child.dataset.theme)
  //
  //     chosenItem = child
  //     console.log("Theme: " + chosenItem.dataset.theme)
  //   }
  // })

  // child.addEventListener("click", () => {
  //   if(child.dataset.theme) {
  //     console.log(child.dataset.theme)
  //     circleIndicator.classList.remove("animate")
  //     updateIndicatorPosition(circleIndicator, child)
  //     circleIndicator.classList.add("animate")
  //     changeCircleColor(child.dataset.theme)
  //
  //     chosenItem = child
  //     console.log("Theme: " + chosenItem.dataset.theme)
  //   }
  // })

});

childrenVertical.forEach((child, i) => {
  child.addEventListener("click", () => {
    if(child.dataset.theme) {
      console.log(child.dataset.theme)
      updateIndicatorPosition(lineIndicator, child)
      changeLineColor(child.dataset.theme)

    }

  })
});
