document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const findDealerButton = document.querySelector('.find-dealer-button');
    const video = document.querySelector('#page1 video');

    gsap.timeline().to("video", {    
        duration: 14,
        onStart: () => {
            gsap.timeline().to(".span1",{
                opacity: 1,
                duration: 0,
                delay: 11,
            })

            .to(".span2",{
                opacity: 1,
                duration: 0,
                delay: 1,
            })

            .to(".span3",{
                opacity: 1,
                duration: 0,
                delay: 1,
            })
        }
    })

    .to(".navbar", {
        opacity: 1,
        duration: 0.5,
    })

    .to("#line", {
        opacity: 1,
        duration: 0.5,
    })

    .to("#page1-container h2", {
        opacity: 1,
        duration: 0.5,
    })

    .to("#page1-container button", {
        opacity: 1,
        duration: 0.5,
    })

    menuButton.addEventListener('click', () => {
        alert('Menu button clicked!');
    });

    findDealerButton.addEventListener('click', () => {
        alert('Find a dealer button clicked!');
    });

    // GSAP animation for navbar

    var tl = gsap.timeline({scrollTrigger: {
        trigger: "#page1",
        // markers: true,
        start: "70% 50%",
        end: "100% 50%",
        scrub: true,
        // pin: true,
    }})

    tl.to(".navbar", {
        height: "8vh"
    },'a')

    .to("#line", {
        display: "none",
    },'a')

    .to(".navbar-logo:not(.new-logo)", {
        opacity: 0,
        duration: 2,
    },'a')

    .to(".navbar-logo:not(.new-logo)", {
        display: "none",
    },'a')

    .to(".new-logo", {
        display: "flex",
    })

    .to(".new-logo", {
        opacity: 1,
        duration: 2,
    })

    const mdqanim = window.matchMedia("(max-width: 600px)")

    

    if (mdqanim.matches) {
        var tl1 = gsap.timeline({scrollTrigger: {
            trigger: "#page2",
            // markers: true,
            start: "35% 50%",
            end: "50% 50%",
            scrub: true,
            pin: true,
        }})

        tl1.to("#video-container1", {
            top: "-15%",
            height: "55vh",
            width: "70vw",
        })

        .to("#text-container1-p2", {
            opacity: 1,
            top: "-10%",
        })

        var tl2 = gsap.timeline({scrollTrigger: {
            trigger: "#page2",
            // markers: true,
            start: "35% 50%",
            end: "50% 50%",
            scrub: true,
            pin: true,
        }})

        tl1.to("#video-container2", {
            top: "-15%",
            height: "55vh",
            width: "70vw",
        })

        .to("#text-container2-p2", {
            opacity: 1,
            top: "-10%",
        })

    } else {
        var tl1 = gsap.timeline({scrollTrigger: {
            trigger: "#page2",
            // markers: true,
            start: "30% 50%",
            end: "70% 50%",
            scrub: true,
            // pin: true,
        }})

        tl1.to("#video-container1", {
            top: "-15%",
            height: "55vh",
            width: "70vw",
        })

        .to("#text-container1-p2", {
            opacity: 1,
            top: "-10%",
        })

        // var tl2 = gsap.timeline({scrollTrigger: {
        //     trigger: "#page3",
        //     // markers: true,
        //     start: "0% 50%",
        //     end: "50% 50%",
        //     scrub: true,
        //     pin: true,
        // }})

        tl1.to("#video-container2", {
            top: "-15%",
            height: "55vh",
            width: "70vw",
        })

        .to("#text-container2-p2", {
            opacity: 1,
            top: "-10%",
        })
    }

    // // Assuming the right button has a class 'slider-button-right' and the left button has a class 'slider-button-left'
    
    // let currentIndex = 0; // Initialize the current slide index
    
    // // Get the slider container element
    // const sliderContainer = document.querySelector('.slider');
    
    // // Get the individual slide elements
    // const slides = document.querySelectorAll('.slide');
    
    // // Function to move the slider to the left
    // function moveSliderLeft() {
    //     if (currentIndex > 0) {
    //         currentIndex--;
    //         gsap.to(sliderContainer, { x: -100 * currentIndex + 'vw', duration: 1 });
    //     }
    // }
    
    // // Function to move the slider to the right
    // function moveSliderRight() {
    //     if (currentIndex < slides.length - 1) {
    //         currentIndex++;
    //         gsap.to(sliderContainer, { x: -100 * currentIndex + 'vw', duration: 1 });
    //     }
    // }
    
    // // Event listener for the right button
    // document.querySelector('.slider-button-right').addEventListener('click', moveSliderRight);
    
    // // Event listener for the left button
    // document.querySelector('.slider-button-left').addEventListener('click', moveSliderLeft);

    // var tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".slider-container",
    //         start: "70% 70%",
    //         end: "100% 70%",
    //         scrub: true,
    //         // markers: true,
    //         pin: true,
    //     },
    // })

    // tl2.from(".slider-container", {
    //     scale: 0.5,
    // })

    // .to(".slider-button-left", {
    //     opacity: 1,
    // },'a')

    // .to(".slider-button-right", {
    //     opacity: 1,
    // },'a')

    

    // Page1 Intersection Observer

    var page1Left = false
    const callbackPage1 = (entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
               page1Left = true
               console.log("page1 left")
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
    
    var page1 = document.querySelector("#page1");

    observerPage1.observe(page1);

    // navbar hide on scroll
    let lastScroll = 0
    let navbarmove = false

    function scrollUp() {
        gsap.to(".navbar", {
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
        gsap.to(".navbar", {
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
                scrollUp()
            }
            
            if (currentScroll < lastScroll && navbarmove == false) {
                if(lastScroll) {
                    scrollDown()
                }
            }
        }

        lastScroll = currentScroll
    })

    var box1 = gsap.timeline();
    document.querySelector("#box1").addEventListener("mouseover", () => {
        
        box1.to("#box1", {
            width: "30%",
            // left: "30px",
            duration: 0.5,
            // onStart: () => {
            //     gsap.to("#box1 img", {
            //         left: "-80%",
            //         duration: 0.5,
            //     })                
            // }
        })

        .to(".content1", {
            opacity:1,
            duration: 0.5,
        })        

        document.querySelector("#box2").classList.add('moveright')
        document.querySelector("#box3").classList.add('moveright')
        document.querySelector("#box4").classList.add('moveright')
        document.querySelector("#box5").classList.add('moveright')
        document.querySelector("#box6").classList.add('moveright')

            })

    document.querySelector("#box1").addEventListener("mouseleave", () => {
            box1.to("#box1", {
                width: "15.5%",
                // left: "10px",
                duration: 0.5,
            })

            .to(".content1", {
                opacity:0,
                duration: 0,
            })

            document.querySelector("#box2").classList.remove('moveright')
            document.querySelector("#box3").classList.remove('moveright')
            document.querySelector("#box4").classList.remove('moveright')
            document.querySelector("#box5").classList.remove('moveright')
            document.querySelector("#box6").classList.remove('moveright')
    })
    var box2 = gsap.timeline();
    document.querySelector("#box2").addEventListener("mouseover", () => {
        
        box2.to("#box2", {
            width: "30%",
            // left: "30px",
            duration: 0.5,
        })

        .to(".content2", {
            opacity:1,
            duration: 0.5,
        }) 

        

        document.querySelector("#box1").classList.add('moveright')
        document.querySelector("#box3").classList.add('moveright')
        document.querySelector("#box4").classList.add('moveright')
        document.querySelector("#box5").classList.add('moveright')
        document.querySelector("#box6").classList.add('moveright')

            })

    document.querySelector("#box2").addEventListener("mouseleave", () => {
            box1.to("#box2", {
                width: "15.5%",
                // left: "10px",
                duration: 0.5,
            })

            .to(".content2", {
                opacity:0,
                duration: 0,
            })

            document.querySelector("#box1").classList.remove('moveright')
            document.querySelector("#box3").classList.remove('moveright')
            document.querySelector("#box4").classList.remove('moveright')
            document.querySelector("#box5").classList.remove('moveright')
            document.querySelector("#box6").classList.remove('moveright')
    })

    var box3 = gsap.timeline();
    document.querySelector("#box3").addEventListener("mouseover", () => {
        
        box3.to("#box3", {
            width: "30%",
            // left: "30px",
            duration: 0.5,
        })

        .to(".content3", {
            opacity:1,
            duration: 0.5,
        })

        document.querySelector("#box1").classList.add('moveright')
        document.querySelector("#box2").classList.add('moveright')
        document.querySelector("#box4").classList.add('moveright')
        document.querySelector("#box5").classList.add('moveright')
        document.querySelector("#box6").classList.add('moveright')

            })

    document.querySelector("#box3").addEventListener("mouseleave", () => {
            box3.to("#box3", {
                width: "15.5%",
                // left: "10px",
                duration: 0.5,
            })

            .to(".content3", {
                opacity:0,
                duration: 0,
            })

            document.querySelector("#box1").classList.remove('moveright')
            document.querySelector("#box2").classList.remove('moveright')
            document.querySelector("#box4").classList.remove('moveright')
            document.querySelector("#box5").classList.remove('moveright')
            document.querySelector("#box6").classList.remove('moveright')
    })

    var box4 = gsap.timeline();
    document.querySelector("#box4").addEventListener("mouseover", () => {
        
        box4.to("#box4", {
            width: "30%",
            // left: "30px",
            duration: 0.5,
        })

        .to(".content4", {
            opacity:1,
            duration: 0.5,
        })

        document.querySelector("#box1").classList.add('moveright')
        document.querySelector("#box2").classList.add('moveright')
        document.querySelector("#box3").classList.add('moveright')
        document.querySelector("#box5").classList.add('moveright')
        document.querySelector("#box6").classList.add('moveright')

            })

    document.querySelector("#box4").addEventListener("mouseleave", () => {
            box4.to("#box4", {
                width: "15.5%",
                // left: "10px",
                duration: 0.5,
            })

            .to(".content4", {
                opacity:0,
                duration: 0,
            })

            document.querySelector("#box1").classList.remove('moveright')
            document.querySelector("#box2").classList.remove('moveright')
            document.querySelector("#box3").classList.remove('moveright')
            document.querySelector("#box5").classList.remove('moveright')
            document.querySelector("#box6").classList.remove('moveright')
    })

    var box5 = gsap.timeline();
    document.querySelector("#box5").addEventListener("mouseover", () => {
        
        box5.to("#box5", {
            width: "30%",
            // left: "30px",
            duration: 0.5,
        })

        .to(".content5", {
            opacity:1,
            duration: 0.5,
        })

        document.querySelector("#box1").classList.add('moveright')
        document.querySelector("#box2").classList.add('moveright')
        document.querySelector("#box3").classList.add('moveright')
        document.querySelector("#box4").classList.add('moveright')
        document.querySelector("#box6").classList.add('moveright')

            })

    document.querySelector("#box5").addEventListener("mouseleave", () => {
            box5.to("#box5", {
                width: "15.5%",
                // left: "10px",
                duration: 0.5,
            })

            .to(".content5", {
                opacity:0,
                duration: 0,
            })

            document.querySelector("#box1").classList.remove('moveright')
            document.querySelector("#box2").classList.remove('moveright')
            document.querySelector("#box3").classList.remove('moveright')
            document.querySelector("#box4").classList.remove('moveright')
            document.querySelector("#box6").classList.remove('moveright')
    })

    var box6 = gsap.timeline();
    document.querySelector("#box6").addEventListener("mouseover", () => {
        
        box6.to("#box6", {
            width: "30%",
            // left: "30px",
            duration: 0.5,
        })

        .to(".content6", {
            opacity:1,
            duration: 0.5,
        })

        document.querySelector("#box1").classList.add('moveright')
        document.querySelector("#box2").classList.add('moveright')
        document.querySelector("#box3").classList.add('moveright')
        document.querySelector("#box4").classList.add('moveright')
        document.querySelector("#box5").classList.add('moveright')

            })

    document.querySelector("#box6").addEventListener("mouseleave", () => {
            box6.to("#box6", {
                width: "15.5%",
                // left: "10px",
                duration: 0.5,
            })

            .to(".content6", {
                opacity:0,
                duration: 0,
            })

            document.querySelector("#box1").classList.remove('moveright')
            document.querySelector("#box2").classList.remove('moveright')
            document.querySelector("#box3").classList.remove('moveright')
            document.querySelector("#box4").classList.remove('moveright')
            document.querySelector("#box5").classList.remove('moveright')
    })
})

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            // Apply scale and shadow to the hovered card
            card.style.transform = 'scale(1.15)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';

            // Handle blur effect on the other cards
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.add('blurred');
                }
            });
        });

        card.addEventListener('mouseout', () => {
            // Reset the scale, shadow, and blur of all cards
            cards.forEach(otherCard => {
                otherCard.style.transform = 'scale(1)';
                otherCard.style.boxShadow = 'none';
                otherCard.classList.remove('blurred');
            });
        });
    });