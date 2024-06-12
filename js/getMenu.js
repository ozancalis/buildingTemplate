// main.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html')
      .then(response => response.text())
      .then(data => {
        for(var i = 0; i< document.getElementsByClassName('navBarMenuFetch').length; i++) {
            document.getElementsByClassName('navBarMenuFetch')[i].innerHTML = data;
        }
      })
      .catch(error => console.error('Error loading menu:', error));
  });