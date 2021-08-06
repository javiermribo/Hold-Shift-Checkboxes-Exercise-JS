const checkboxSelector = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

const handleCheck = e => {
  let inBetween = false;
  if(e.shiftKey && e.target.checked) {
    checkboxSelector.forEach(box => {
      console.log(box)
      if (box === e.target || box === lastChecked) {
        inBetween = !inBetween;
        console.log('Yaaaas!')
      }

      if(inBetween) {
        box.checked = true;
      }
    })
  }

  lastChecked = e.target;
}

checkboxSelector.forEach(box => box.addEventListener('click', handleCheck))