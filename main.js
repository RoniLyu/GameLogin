const buttons = document.querySelector('button')
const input = document.querySelector('input')
const errorBox = document.querySelector('.error')
const errorRadio = document.querySelector('.error-radio')
const radios = document.querySelectorAll('input[type="radio"]')
const result = document.querySelector('.result')



input.addEventListener('input', () => {
  errorBox.textContent = ''
})

radios.forEach(radio => {
  radio.addEventListener('input', () => {
    errorRadio.textContent = ''
  })
})

buttons.addEventListener('click', (e) => {
  e.preventDefault()

  let status = 0


  if (input.value.length < 5) {
    errorBox.textContent = 'Имя слишком короткое'
  } else if (!(input.value >= 'a' && input.value <= 'z') && !(input.value >= '0' && input.value <= '9')) {
    errorBox.textContent = 'Имя должно начинаться с маленькой буквы или цифры'
  } else if (input.value.includes(' ')) {
    errorBox.textContent = 'Имя не должно содержать пробелы'
  } else {
    errorBox.textContent = ''
    status +=1
  }




  let selectedRadio = null
  radios.forEach(function (radio) {
    if (radio.checked) {
      selectedRadio = radio
      status +=1
    }

  })

  if (!selectedRadio) {
    errorRadio.textContent = 'Обязательно нужно сделать выбор'
    return
  }
  for (let i = 0; i < status; i++) {
    if (status === 2) result.textContent = 'Авторизация успешна!'
    else result.textContent = ''  
  }
})
