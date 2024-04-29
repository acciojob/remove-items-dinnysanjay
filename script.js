//your JS code here. If required.
let button = document.querySelector('input[type="button"]');
let dropdown = document.getElementById('colorSelect');

button.addEventListener('click', function() {
  let selectedOptionIndex = dropdown.selectedIndex;
  dropdown.remove(selectedOptionIndex);
});