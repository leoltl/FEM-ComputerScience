const makeButton = (btnName) => {
  const buttonLabel = `Button: ${btnName}`

  const button = document.createElement('button')
  button.innerText = buttonLabel;
  return button
}

module.exports = makeButton