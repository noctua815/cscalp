const initScroll = () => {
  const btns = document.querySelectorAll('div.btn')
  const subscribe = document.getElementById('subscribe-form')
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const y = subscribe.getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: y,
        behavior: 'smooth'
      })
    })
  })
  
  const links = document.querySelectorAll('.scroll-link')
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      const id = link.dataset.section
      const y = document.getElementById(id).getBoundingClientRect().top + window.scrollY
      window.scroll({
        top: y,
        behavior: 'smooth'
      })
    })
  })
}

const initSubscribe = () => {
  const form = document.querySelector('form.sp-element-container')
  const btn = form.querySelector('button')
  const input = form.querySelector('input')
  const checkboxes = form.querySelectorAll('input[type="checkbox"]')
  let checkedCheckboxes = false
  
  const checkBtn = (checkedCount) => {
    const emailValid = validateEmail(input.value)
    const allChecked = checkedCount === 2
    if (emailValid && allChecked) {
      btn.classList.remove('is-disabled')
    } else {
      btn.classList.add('is-disabled')
    }
  }
  
  for (let box of checkboxes) {
    box.addEventListener('change', event => {
      if (event.target.checked) {
        checkedCheckboxes += 1
      } else {
        checkedCheckboxes -= 1
      }
      checkBtn(checkedCheckboxes)
    })
  }
  
  input.addEventListener('input', (event) => {
    checkBtn(checkedCheckboxes)
  })
  btn.addEventListener('click', (event) => {
    sendMetric()
  })
}


const sendMetric = async () => {
  const email = document.querySelector('input.sp-form-control').value
  fbq('track', 'Subscribe', {email})
}

const validateEmail = (email) => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}


window.addEventListener('DOMContentLoaded', (event) => {
  initScroll()
  initSubscribe()
})
