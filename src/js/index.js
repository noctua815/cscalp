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

initScroll()
initSubscribe()
