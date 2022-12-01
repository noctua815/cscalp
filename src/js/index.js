const initScroll = () => {
  const btns = document.querySelectorAll('div.btn')
  const subscribe = document.getElementById('subscribe-form')
  for (btn of btns) {
    btn.addEventListener('click', () => {
      const y = subscribe.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    })
  }
}

const initSubscribe = () => {

}

const calcClamp = (minSize, maxSize) => {
  const width = 1440
  
  const value1 = (maxSize / width * 102).toFixed(1)
  return `clamp(${minSize}px, ${value1}vw, ${maxSize}px)`
}
console.log(calcClamp(16, 32))
initScroll()
initSubscribe()

// console.log()
