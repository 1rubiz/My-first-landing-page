/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const numberOfSections = document.querySelectorAll('section');
const myList= document.getElementById("navbar__list");
const mob = window.matchMedia('(max-width: 600px)');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Build nav
//it counts the number of sections and creates a link in accordance.

numberOfSections.forEach(function (num, index){
    const mySec= document.createElement("li");
    mySec.id= "list"+ index;
    mySec.classList.add("menu__link");
    mySec.innerHTML= 'Section'+(index+1);
    myList.append(mySec);    
}); 
  
    
//it initiats the smooth scroll on click 
(function (){
    for (let i=0; i <numberOfSections.length; i++){
           let scrol=document.getElementById("list"+i);
            scrol.addEventListener("click", function(evt){
                 evt.preventDefault();
                  let section=document.getElementById("section"+i);
                 section.scrollIntoView({behavior: "smooth"});
                 section.style.cssText="padding-top:50px";
               
            })
    }
})();

 //scrolls the page to the top upon reload.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Helper Function
//function checks if the parameter(given element) is in a viewport larger than 600px max-width.
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    let clientheight = document.documentElement.clientHeight;
    let clientwidth = document.documentElement.clientWidth;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || clientheight) &&
        rect.right <= (window.innerWidth || clientwidth)
    );
}
// viewport function for smaller devices
function isInTheViewport(el) 
{
    let rect = el.getBoundingClientRect();
    return ((rect.bottom >=623) && (rect.top <= 220))
}

// Set sections as active when scrolled into viewport
document.addEventListener('scroll', () => 
{
    for (let x=0; x<numberOfSections.length;x++)
    {
        let section=document.getElementById("section"+x);
        let scrol=document.getElementById("list"+x);
        if (mob.matches){ //if the device has a max-width 0f 600px e.g android phones
            if (isInTheViewport(section))
            {
                scrol.classList.add('active');
             } else if (!isInTheViewport(section))
                {
                  scrol.classList.remove('active');
                 }
        }
        else {//if the device max-width is larger e.g tablets 
       if (isInViewport(section))
       {
           scrol.classList.add('active');
        } else if (!isInViewport(section))
           {
             scrol.classList.remove('active');
            }
    }}
});

// add my insta-name to the footer
let hello = document.getElementById("para").innerHTML="@crimson-gem";

//Button scrolls the page to the top on click
(function (){
     let boten= document.getElementById("boten");
      boten.addEventListener("click", function () {
            let section= document.getElementById("top-page");
            section.scrollIntoView({behavior: "smooth"});
            section.style.cssText="padding-top:90px";
        })
    }
)();