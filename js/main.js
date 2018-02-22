(() => {
  console.log('icons');
//variabes at the top
  var iconSet = document.querySelectorAll('#spin');
//functions here
function logThisIcon() {
  console.log('clicked on this icon ', this.id);

  this.style.scale = 0.5;
}

//event handling
  iconSet.forEach(icon => icon.addEventListener('click',
  logThisIcon));
})();