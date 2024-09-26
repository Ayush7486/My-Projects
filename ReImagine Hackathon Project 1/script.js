document.addEventListener("DOMContentLoaded", function() {
var navbar = document.getElementsByClassName("navbar")
var menuOpen = document.getElementsByClassName("menu-open")
var sliderMain = document.getElementsByClassName("slider")
let introFinish = false
let page1Left = false
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const targets = document.getElementsByClassName("page-section");

const callbackPage1 = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting && introFinish == true) {
           page1Left = true
        } else {
            page1Left = false
        }
    });
};

const observerPage1 = new IntersectionObserver(callbackPage1, {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.3 // Trigger as soon as 70% of page1 has left the viewport
});

observerPage1.observe(page1);

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            pageAnimation(entry.target);        
        }
    });
};

const observer = new IntersectionObserver(callback, {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5 // Trigger as soon as 70% of the page has entered the viewport
});

const pageAnimation = (page) => {
    switch (page.id) {
        case 'page2':
            page2Animation();
            break;
        case 'page3':
            page3Animation();
            break;
        case 'page4':
            page4Animation();
        case 'page5':
            page5Animation();
            break;
        // Add cases for other pages as needed
        default:
            break;
    }
};

Array.from(targets).forEach(target => observer.observe(target))

const normal = () => {
    gsap.timeline()
    
    .to("#myVideo", {
        duration: 8.5,
        // duration: 2,
    })
       
    .to("#black", {
        duration: 0,
        zIndex: 9,
    })
    
    .to("#lan1", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan1", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan2", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan2", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan3", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan3", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan4", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan4", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan5", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan5", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan6", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan6", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan7", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan7", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan8", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan8", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan9", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan9", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan10", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#intropage", {
        height: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
    },'a')

    .to("#loader", {
        height: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
    },'a')
    
    .to("#intropage", {
        height: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
    },'a')

    .to("#loader", {
        height: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
    },'a')

    .to(navbar, {
        height: 100,
        duration: 1,
    },'b')

    .to(menuOpen, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#search", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#heart", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#cart", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#nikelogo", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#jordanlogo", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#line", {
        opacity: 1,
        duration: 1,
        delay: 1,
    },'b')

    .from(sliderMain, {
        top: "30%",
        opacity: 0,
        duration: 1,
        onComplete: () => {
            introFinish = !introFinish
        }
    },'b')
}

const animationMobile = () => {
    gsap.timeline()

    .to("#lan1", {
        opacity: 1,
        duration: 0.07,
        delay: 2,
    })
    
    .to("#lan1", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan2", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan2", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan3", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan3", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan4", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan4", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan5", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan5", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan6", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan6", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan7", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan7", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan8", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan8", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan9", {
        opacity: 1,
        duration: 0.07,
    })
    
    .to("#lan9", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#lan10", {
        opacity: 1,
        duration: 0.07,
    })

    .to("#lan10", {
        opacity: 0,
        duration: 0.07,
    })
    
    .to("#introimg", {
        opacity: 1,
        duration: 0.5,
    })
    
    .to("#intropage", {
        height: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
    },'a')

    .to("#loader", {
        height: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
    },'a')

    .to(navbar, {
        height: 100,
        duration: 1,
    },'b')

    .to(menuOpen, {
        opacity: 1,
        duration: 1,
    },'b')

    .to("#search", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#heart", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')
    
    .to("#cart", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#nikelogo", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#jordanlogo", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    },'b')

    .to("#line", {
        opacity: 1,
        duration: 1,
        delay: 1,
    },'b')

    .from(sliderMain, {
        top: "30%",
        opacity: 0,
        duration: 1,
        onComplete: () => {
            introFinish = !introFinish
            onphone = !onphone
        }
    },'b')
}

// media queries for intro animation
const mdqanim = window.matchMedia("(max-width: 600px)")

const applyanimation = () => {
    if(mdqanim.matches) {
        animationMobile()
    } else {
        normal()
    }
}

applyanimation()

// navbar animation
t1 = new TimelineMax({ paused: true });

t1.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut,
}); 

t1.staggerFrom(
    ".menu > div", 
    0.8, 
{
    y:100,
    opacity: 0,
    ease: Expo.easeInOut,
},
 "0.1", 
"-=0.4"
);
 
t1.staggerFrom(
".socials", 
0.8, 
{
   y:100, 
   opacity: 0, 
   ease: Expo.easeOut,
}, 
"0.4", 
"-=0.6"
);

t1.reverse();
$(document).on("click", ".menu-open", function () {
t1.play()
});
$(document).on("click", ".menu-close", function () {
t1.reverse(!t1.reversed());
});

// slider animation
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

// Clone the first and last items
let firstClone = items[0].cloneNode(true);
let lastClone = items[lengthItems].cloneNode(true);
firstClone.classList.add('clone');
lastClone.classList.add('clone');

slider.appendChild(firstClone);
slider.insertBefore(lastClone, items[0]);

// Update items to include clones
items = document.querySelectorAll('.slider .list .item');
lengthItems = items.length - 1;

next.onclick = function() {
    active = active + 1;
    slider.style.transition = 'left 0.5s ease-in-out';
    reloadSlider();
};

prev.onclick = function() {
    active = active - 1;
    slider.style.transition = 'left 0.5s ease-in-out';
    reloadSlider();
};

let refreshInterval = setInterval(() => { next.click() }, 3000);

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    // Handle looping from last to first and first to last
    if (active === lengthItems) {
        setTimeout(() => {
            slider.style.transition = 'none';
            active = 1;
            slider.style.left = -items[active].offsetLeft + 'px';
        }, 500);
    }
    if (active === 0) {
        setTimeout(() => {
            slider.style.transition = 'none';
            active = lengthItems - 1;
            slider.style.left = -items[active].offsetLeft + 'px';
        }, 500);
    }

    let last_active_dot = document.querySelector('.slider .dots li.active');
    if (last_active_dot) last_active_dot.classList.remove('active');
    if (active === 0) {
        dots[lengthItems - 2].classList.add('active');
    } else if (active === lengthItems) {
        dots[0].classList.add('active');
    } else {
        dots[active - 1].classList.add('active');
    }

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key + 1;
        slider.style.transition = 'left 0.5s ease-in-out';
        reloadSlider();
    });
});

window.onresize = function(event) {
    reloadSlider();
};

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        event.preventDefault(); // Prevent the default action (scrolling)
        next.click();
    } else if (event.key === 'ArrowLeft') {
        event.preventDefault(); // Prevent the default action (scrolling)
        prev.click();
    }
});

// Initialize position
slider.style.transition = 'none';
active = 1;
slider.style.left = -items[active].offsetLeft + 'px';

// navbar hide on scroll
let lastScroll = 0
let navbarmove = false
// let navbarDown = false

function scrollUp() {
    gsap.to(navbar, {
        top: "-30%",
        duration: 0.5,
        onStart: () => {
            navbarmove = !navbarmove
        },

        onComplete: () => {
            navbarmove = !navbarmove
        },
    })
}

function scrollDown() {
    gsap.to(navbar, {
        top: "0%",
        duration: 0.5,
        onStart: () => {
            navbarmove = !navbarmove
        },

        onComplete: () => {
            navbarmove = !navbarmove
        }
    })
}

    window.addEventListener("scroll", function() {
        const currentScroll = window.scrollY

        if (page1Left == true) {

            if (currentScroll > lastScroll && navbarmove == false) {
                console.log(lastScroll)
                scrollUp()
            }
            
            if (currentScroll < lastScroll && navbarmove == false) {
                if(lastScroll) {
                    scrollDown()
                }
                console.log(lastScroll)
            }
        }

        lastScroll = currentScroll
    })

// page2 animation

function page4Animation() {
gsap.timeline().to("#jordan-txt-p4", {
    opacity: 1,
    duration:0.5,
},'a')
.to("#container1-p4", {
    opacity: 1,
    duration:0.5,
})
}
function page2Animation() {
gsap.timeline().to(".nike-header", {
    opacity: 1,
    duration:0.5,
},'a')
.to("#container1-p2", {
    opacity: 1,
    duration:0.5,
})
.to("#container2-p2", {
    opacity: 1,
    duration:0.5,
})
}


function page3Animation() {
    gsap.timeline()
    
    .to("#trending", {
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
    .to("#left" ,{
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
    .to("#right" ,{
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
    .to(".itemp3", {
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
}

function page5Animation() {
    gsap.timeline()
    
    .to("#jordan-txt", {
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
    .to("#left1" ,{
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
    .to("#right1" ,{
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
    .to(".itemp5", {
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
    },'a')
}

// document.addEventListener('scroll', function() {
//     const sliderSection = document.getElementById('slider-section');
//     const slider = document.getElementById('slider');
//     const start = sliderSection.offsetTop;
//     const end = start + sliderSection.offsetHeight - window.innerHeight;
//     const scrollTop = window.scrollY;
  
//     if (scrollTop >= start && scrollTop <= end) {
//       // Calculate the horizontal scroll
//       const progress = (scrollTop - start) / (end - start);
//       const maxHorizontalScroll = slider.scrollWidth - window.innerWidth;
//       slider.style.transform = `translateX(${-progress * maxHorizontalScroll}px)`;
//     } else if (scrollTop < start) {
//       slider.style.transform = 'translateX(0)';
//     } else if (scrollTop > end) {
//       slider.style.transform = `translateX(-${slider.scrollWidth - window.innerWidth}px)`;
//     }
//   });

var searchIcon = document.querySelector("#search>i")
var searchMobile = document.querySelector("#search-mobile")
let searchClick = false
let onphone = false

searchMobile.addEventListener('click', function() {

    gsap.timeline()

    .to("#bar-top", {
        height: "100px",
        duration: 1,
    })
        
    .to("#search-mobile", {
        top: "-100%",
        duration: 1,
    })

    .to("#search-bar", {
        opacity: 0,
        top: "0%",
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
        onComplete: () => {
            searchClick = !searchClick
    }
    })
})


searchIcon.addEventListener('click', function() {
    if(onphone == false) {
        searchAnimationNormal()
    } else {
        searchAnimationPhone()
    }
})

function searchAnimationNormal() {
    if(onphone != true) {
        if(searchClick == true) {
            gsap.timeline().to("#search-bar", {
                opacity: 1,
                top: "0%",
                duration: 0.5,
                delay: 0.2,
                ease: "power2.out",
                onComplete: () => {
                    searchClick = !searchClick
                }
            })
        } else {
            gsap.timeline().to("#search-bar", {
                opacity: 0,
                top: "-20%",
                duration: 0.5,
                delay: 0.2,
                ease: "power2.out",
                onComplete: () => {
                    searchClick = !searchClick
                }
            })
        }
    }
}

function searchAnimationPhone() {
    // if(searchClick == true) {
        gsap.timeline()

        .to("#bar-top", {
            height: "100px",
            duration: 1,
            // delay: 0.5,
        })
        
        .to("#search-mobile", {
            top: "0",
            duration: 1,
            // delay: 0.5,
        })

        .to("#search-bar", {
            opacity: 1,
            top: "0%",
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
            onComplete: () => {
                searchClick = !searchClick
            }
        })
    // }
}

document.querySelectorAll(".itemp3").forEach
((itemp3) => {
    itemp3.addEventListener("mouseenter", 
        function() {
            gsap.set(this.querySelectorAll("span"), {
                opacity: 0});
            gsap.to(this.querySelectorAll("span"), {
                opacity: 1,
                duration: 0.075,
                stagger: {
                    from: "random",
                    each: 0.02,
                },
                ease: "power2.out"
            });
    });
    itemp3.addEventListener("mouseleave", function() {
        gsap.to(this.querySelectorAll("span"), {
            opacity: 0,
            duration: 0.075,
            stagger: {
                from: "random",
                each: 0.02,
            },
            ease: "power2.in"
        });
    });
});
document.querySelectorAll(".itemp5").forEach
((itemp3) => {
    itemp3.addEventListener("mouseenter", 
        function() {
            gsap.set(this.querySelectorAll("span"), {
                opacity: 0});
            gsap.to(this.querySelectorAll("span"), {
                opacity: 1,
                duration: 0.075,
                stagger: {
                    from: "random",
                    each: 0.02,
                },
                ease: "power2.out"
            });
    });
    itemp3.addEventListener("mouseleave", function() {
        gsap.to(this.querySelectorAll("span"), {
            opacity: 0,
            duration: 0.075,
            stagger: {
                from: "random",
                each: 0.02,
            },
            ease: "power2.in"
        });
    });
});

let leftButton = document.querySelector("#scroll #left");
let rightButton = document.querySelector("#scroll #right");
let x = 0;
let maxMove = 1400; // Maximum value x can reach

leftButton.addEventListener('click', function() {
    if (x > 0) {
        x -= 700; // Decrease x by 700
        if (x < 0) x = 0; // Prevent x from going below 0

        gsap.to(".itemsp3", {
            right: x,
            duration: 1
        });
    }
    console.log(x);
});

rightButton.addEventListener('click', function() {
    if (x < maxMove) {
        x += 700; // Increase x by 700
        if (x > maxMove) x = maxMove; // Prevent x from exceeding maxMove

        gsap.to(".itemsp3", {
            right: x,
            duration: 1
        });
    }
    console.log(x);
});

let leftButton1 = document.querySelector("#scroll #left1");
let rightButton1 = document.querySelector("#scroll #right1");
let y = 0;
let maxMove1 = 1400; // Maximum value y can reach

leftButton1.addEventListener('click', function() {
    if (y > 0) {
        y -= 700; // Decrease y by 700
        if (y < 0) y = 0; // Prevent y from going below 0

        gsap.to(".itemsp5", {
            right: y,
            duration: 1
        });
    }
    console.log(y);
});

rightButton1.addEventListener('click', function() {
    if (y < maxMove1) {
        y += 700; // Increase y by 700
        if (y > maxMove1) y = maxMove1; // Prevent y from exceeding maxMove1

        gsap.to(".itemsp5", {
            right: y,
            duration: 1
        });
    }
    console.log(y);
})

// const observer2 = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         const shapeElements = entry.target.querySelectorAll('.shape');

//         if (entry.isIntersecting) {
//             console.log("Element has entered the viewport:", entry.target);

//             shapeElements.forEach(shapeElement => {
//                 gsap.to(shapeElement, {
//                     opacity: 1,
//                     scale: 1,
//                     duration: 0.3
//                 });
//             });
//         } else {
//             console.log("Element has left the viewport:", entry.target);

//             shapeElements.forEach(shapeElement => {
//                 gsap.to(shapeElement, {
//                     opacity: 0,
//                     scale: 0,
//                     duration: 0.2
//                 });
//             });
//         }
//     });
// }, {
//     threshold: 1.0 // Adjust the threshold as needed
// });

// // Observe each .itemp5 element
// document.querySelectorAll('.itemp5').forEach(item => {
//     observer2.observe(item);
// });

// const observer3 = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         const shapeElements = entry.target.querySelectorAll('.shape');

//         if (entry.isIntersecting) {
//             console.log("Element has entered the viewport:", entry.target);

//             shapeElements.forEach(shapeElement => {
//                 gsap.to(shapeElement, {
//                     opacity: 1,
//                     scale: 1,
//                     duration: 0.3
//                 });
//             });
//         } else {
//             console.log("Element has left the viewport:", entry.target);

//             shapeElements.forEach(shapeElement => {
//                 gsap.to(shapeElement, {
//                     opacity: 0,
//                     scale: 0,
//                     duration: 0.2
//                 });
//             });
//         }
//     });
// }, {
//     threshold: 1.0 // Adjust the threshold as needed
// });

// // Observe each .itemp5 element
// document.querySelectorAll('.itemp3').forEach(item => {
//     observer3.observe(item);
// });


})