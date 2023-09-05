function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

   const img = document.querySelector(".perfil-image img")
  
   if(html.classList.contains("light")){
       img.setAttribute('src', './assets/Theme=Light mode.png')
    }
    else{
        img.setAttribute('src', './assets/Theme=Dark mode.png')
   }
}   