document.addEventListener("DOMContentLoaded", () => {
     const themebutton = document.getElementById('themetoggle');
     const body = document.getElementById('body');

     themebutton.addEventListener("click" ,  () => {
         const link = document.getElementById("themeidk");
         const current = link.getAttribute("href");
         const span = document.getElementById("debug")
         loadtheme()

      //Load/Save theme preference
      function savetheme() {
          localStorage.setItem('theme', current);    
        }
        if ( theme == "" ) {
            savetheme()
        }
      function loadtheme() {
        const themepref = localStorage.getItem('theme')
        const theme = themepref;
        span.textContent = theme;
      }
      // Switch between light and dark
      
      //check if the localstorage is empty
      //span.textContent = curren;
      console.log(current)
      if (current === "res/light.css") {
        link.setAttribute("href", "res/dark.css");
      } else {
        link.setAttribute("href", "res/light.css");
      }
    });
});