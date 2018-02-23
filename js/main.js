(() => {
  console.log('icons');
//variabes at the top
  var iconSet = document.querySelectorAll('#spin');
//functions here
function logThisIcon() {
  console.log('clicked on this icon ', this.id);

  this.style.opacity = 0.5;
}

//event handling
  iconSet.forEach(icon => icon.addEventListener('click',
  logThisIcon));
    
    
    
    var iconPress = document.querySelectorAll('svg');
    function changeIcon(){
        console.log('icon has been pressed', this.id);
        
        this.style.size = 2;
    }
        iconPress.forEach(icon => icon.addEventListener('click', changeIcon));
        
        
        
    
    
    
    
})();