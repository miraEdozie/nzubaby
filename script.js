document.addEventListener("DOMContentLoaded", () => {
    function counter (id,start,end,duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end = start,
        increment = end > start ? 1 : 1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval (() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer)
            }
        },step);
    }

    counter("count1",1,5,5);
    counter("count2",0,10+,25);
    counter("count3",10,50,30);
    counter("count4",1,1,1);
});

// When the user scrolls the page, execute the function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const header = document.getElementById("main-header");
  
  // Check if the page has been scrolled more than 50px from the top
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("sticky");  // Add the sticky class to the header
  } else {
    header.classList.remove("sticky"); // Remove the sticky class when at the top
  }
};

