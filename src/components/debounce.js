export default (f, delay=50) => {
   let timer = 0;
   return () => {
      clearTimeout(timer);
      timer = setTimeout(f, delay);
   }
}