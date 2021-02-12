// Get input
const input = document.getElementById('text')
// Get button
const button = document.getElementById('submit')

// Take value out of text box and alert it
function onclick () {
  // Show alert message
  alert(input.value)
  // Clear value of input
  input.value = ''
}

// Run 'onclick' when button is clicked
button.addEventListener('click', onclick)
