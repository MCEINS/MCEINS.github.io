let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/two-boy.png') {
      myImage.setAttribute ('src','images/two-girl.png');
    } else {
      myImage.setAttribute ('src','images/two-boy.png');
    }
}