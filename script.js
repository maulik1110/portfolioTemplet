const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var t= gsap.timeline();

t.from(".nav",{
    y: "-100%",
    delay: 0.2,
    duration: 0.8,
    // scrollTrigger:  {
    //     trigger: ".hero .nav",
    //     scroller: ".main",
    //     scrub: 2,
    // }
})

t.from(".heading h1, .align-r h1, .align-r h5",{
    y: "100",
    opacity: 0,
    stagger: 0.3,
 
})

t.from(".tinyheading",{
    y: "100",
    opacity: 0,
    stagger: 0.3,
 
})

t.from(".hero-footer",{
    y: "100",
    opacity: 0,
    stagger: 0.3,
})

// document.querySelector(".circle")

var display = document.querySelector("body");
var mouse = document.querySelector(".circle");

display.addEventListener("mousemove",function(dets){
    mouse.style.left= dets.x+"px"
    mouse.style.top= dets.y+"px"
})


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;

    elem.addEventListener("mousemove",function(dets){
        var diff=dets.clientY - elem.getBoundingClientRect().top;
        diffrot= dets.clientX - rotate;
        rotate=dets.clientX;
        // gsap.utils.clamp(-20,20,diff);
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            elae: power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot)
        })
    })
})


