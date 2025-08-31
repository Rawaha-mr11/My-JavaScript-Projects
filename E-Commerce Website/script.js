// Slider of the page
let sliderBar = document.getElementById('slider_link');
let links = [
    "Ready to show some shin &nbsp; <a href='#'  style ='text-decoration: underline; color: white'>Shop - Shorts & Skorts</a>",
    "Free Shoipping on orders over $100",
     "Hi, we're new &nbsp; <a href='#' style ='text-decoration: underline; color: white'> Ship New Arrival <a>",
     "More daylight, means more Doing Things.  &nbsp; <a href='#' style ='text-decoration: underline; color: white'> Shop - OV summer <a>"
       ];

let i = 0;



function prev() {
    if (i <= 0) i = links.length;
    i--;
   sliderBar.innerHTML = links[i];
}

function next() {
    if (i >= links.length - 1) i = -1;
    i++;
    sliderBar.innerHTML = links[i]
}


// DROPDOWNLIST1 of the page
const womenDropdown = document.getElementById('women_dropdown');
const dropdownList = document.getElementById('dropDownList1');

function showDropdown() {
    dropdownList.style.display = 'flex'; 
    document.body.classList.add('scrollBodyColor'); 
}

function hideDropdown() {
    dropdownList.style.display = 'none';
    document.body.classList.remove('scrollBodyColor');    
}

// Show dropdown on hover over the anchor
womenDropdown.addEventListener('mouseenter', showDropdown);

// Hide dropdown when mouse leaves both anchor and dropdown
womenDropdown.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownList.matches(':hover')) {
            hideDropdown();
        }
    }, 100); // slight delay to allow user to move to dropdown
});

dropdownList.addEventListener('mouseleave', hideDropdown);

// Optional: keep showing while hovering over dropdown
dropdownList.addEventListener('mouseenter', showDropdown);




// DROPWOWN 2 (for men) of the page
const menDropDown = document.getElementById('men_dropdown');
const dropDownList1 = document.getElementById('dropDownList2');

function showDropdown1() {
    dropDownList1.style.display = 'flex';   
}

function hideDropdown1() {
    dropDownList1.style.display = 'none';
}

menDropDown.addEventListener('mouseenter', showDropdown1);


menDropDown.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropDownList1.matches(':hover')) {
            hideDropdown1();
        }
    }, 100);
});
dropDownList1.addEventListener('mouseenter', showDropdown1);
dropDownList1.addEventListener('mouseleave', hideDropdown1);



// DROPDOWN 3 (for OV Extra) of the page
const ovDropDown = document.getElementById('ov_dropdown');
const dropDownList2 = document.getElementById('dropDownList3');

function showDropdown2() {
    dropDownList2.style.display = 'flex';   
}

function hideDropdown2() {
    dropDownList2.style.display = 'none';
}

ovDropDown.addEventListener('mouseenter', showDropdown2);


ovDropDown.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropDownList2.matches(':hover')) {
            hideDropdown2();
        }
    }, 100);
});

dropDownList2.addEventListener('mouseleave', hideDropdown2);
dropDownList2.addEventListener('mouseenter', showDropdown2);




// Mobile Dropdown 
const menuToggle = document.getElementById('menuToggle');
const menuIcon = document.getElementById('menuIcon');
const mobileDropdown = document.querySelector('.mobile_dropdown');

menuToggle.addEventListener('click', () => {
    mobileDropdown.classList.toggle('show');

    // Toggle between bars and X
    if (mobileDropdown.classList.contains('show')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        menuIcon.style.color = '#000F9F'; // blue color
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        menuIcon.style.color = 'black'; // default color
    }
});




// MAIN CHILD 2 SLIDER OF THE PAGE
let sliderImage = document.querySelector(".slider_images")
let PrevBtn = document.querySelector('.prev_btn');
let nextBtn = document.querySelector('.next_btn');

// ImageSliderMainChild2.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     ImageSliderMainChild2.scrollLeft += e.deltaY;
// })

PrevBtn.addEventListener("click", () => {
    sliderImage.style.scrollBehavior = "smooth";
    sliderImage.scrollLeft -= 302;
});

nextBtn.addEventListener("click", () => {
    sliderImage.style.scrollBehavior = "smooth";
    sliderImage.scrollLeft += 302;
});












