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

const myList= document.getElementById("navbar__list");
let myArray= ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5"];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Build nav
//loops through the array and creates the links with array items
function link(){
    for (let i=0; i< myArray.length;i++){
        const mySec= document.createElement("li");
        mySec.id="list"+i;
        for (let x = 0; x < 1; x++) {
            let list=document.createTextNode(myArray[i]);
            mySec.appendChild(list);    
            mySec.className="menu__link";
            myList.append(mySec);

            
        }
    }   
}    
link();


//it initiats the smooth scroll on click 
(function (){
    for (let i=0; i <myArray.length; i++){
           let scrol=document.getElementById("list"+i);
            scrol.addEventListener("click", function(evt){
                 evt.preventDefault();
                  let section=document.getElementById("section"+i);
                 section.scrollIntoView({behavior: "smooth"});
                 section.style.cssText="padding-top:40px";
               
            })
    }
})();

 //scrolls the page to the top upon reload.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Helper Function
//function checks if the parameter(given element) is in the view port.
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll to section on link click
document.addEventListener('click', function () {
    for (let x=0; x< myArray.length;x++)
    {
        let section=document.getElementById("section"+x);
        let scrol=document.getElementById("list"+x);
       if (isInViewport(section))
        {
           scrol.classList.add('active');
        } else if (!isInViewport(section))
           {
             scrol.classList.remove('active');
           }
    }
});

// Set sections as active when scrolled into viewport
document.addEventListener('scroll', function () 
{
    for (let x=0; x< myArray.length;x++)
    {
        let section=document.getElementById("section"+x);
        let scrol=document.getElementById("list"+x);
       if (isInViewport(section))
       {
           scrol.classList.add('active');
        } else if (!isInViewport(section))
           {
             scrol.classList.remove('active');
            }
    }
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