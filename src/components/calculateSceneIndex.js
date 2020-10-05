export default () => {
   if (window.scrollY < window.innerHeight * 0.1) {
      return 0;
   } else if (document.getElementsByClassName('grass-container').length > 0 
              && window.scrollY > document.getElementsByClassName('grass-container')[0].offsetTop - window.innerHeight * 0.3) {
      return 2;
   } else {
      return 1;
   }
}
