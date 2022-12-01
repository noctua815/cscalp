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
  const form = document.getElementById('subscribe-form')
  const btn = form.querySelector('button')
  const input = form.querySelector('input')
  
  input.addEventListener('input', (event) => {
    const email = event.target.value
    const valid = validateEmail(email)
    btn.disabled = !valid
  })
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('event', event)
  
  })
}

const validateEmail = (email) => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

initScroll()
initSubscribe()
