document.body.textContent += ' ZOMG!'

const clock = setInterval(ohai, 1000)

function ohai() {
  console.log('OHAI FRIENDS', new Date())
}

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => clearInterval(clock))
}
