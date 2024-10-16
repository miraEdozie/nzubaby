//menu bar
const sidenav = () => {
    const menu = document.querySelector('.menu-icon');
    const nav = document.querySelector('.nav');

    menu.addEventListener('click', () => {
        menu.classList.toggle('menu-icon-active');
        nav.classList.toggle('nav-active');
    });
}
sidenav();

// back to top function
let calcScrollValue = () => {
    let scrollProgress = document.getElementById
    ("progress");
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let calcScrollValue = Math.round((pos * 100) / calcHeight)
    ;
    if(pos > 100){
        scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient
    (#632b72 ${scrollValue}%, #000000 ${scrollValue}%)`;
  };
  
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;