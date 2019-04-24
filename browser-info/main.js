document.querySelector('.user-agent').textContent = navigator.userAgent

document.querySelector('.get-btn').addEventListener('click', function(){
  const currentProp = document.querySelector('input').value
  const commandStr = `window.${currentProp}`
  const propArr = currentProp.split('.')
  const res = propArr.reduce((prop, index) => {
    return prop[index]
  }, window)
  console.log(res);
  document.querySelector('.result').textContent = res
})
