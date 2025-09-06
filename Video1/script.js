// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   stagger: -1,
//   repeat: -1,
//   yoyo: true,
// });
// gsap.to("#box1" , {
//     x : 1000,
//     y: 200,
//     duration : 2,
//     delay : 1,
//     rotate : 360,
//     backgroundColor : "red",
//     borderRadius : "50%"
// })

// gsap.from("box" , {
//     opacity : 0,
//     color : "red",
//     duration : 2,
//     y : 70,
//     delay : 1,
//     // stagger : 1
//     stagger : -1,
//     repeat : -1,
//     yoyo : true,
// })


// gsap.to("#box1" , {
//     x : 1200 ,
//     rotate : 360,
//     duration : 1.5,
//     delay : 1
// })
// gsap.to("#box2" , {
//     x : 1200,
//     backgroundColor : "yellow",
//     duration : 1.5,
//     delay : 2.5
// })
// gsap.to("#box3" , {
//     x : 1200,
//     borderRadius : "50%",
//     scale : 0.5,
//     duration : 1.5,
//     delay : 4
// })

var tl = gsap.timeline()

// tl.to("#box1" , {
//     x  : 1200,
//     roatate : 360,
//     duration : 1.5,
//     delay : 1
// })

tl.from("h2" , {
    y : -30,
    opacity : 0,
    duration : 1,
    delay : 0.5
})
tl.from("h4" , {
    y : -30,
    opacity : 0,
    duration : 1,
    stagger : 0.3
})
tl.from("h1" , {
    y : 20,
    opacity : 0,
    duration : 0.5,
    scale : 0.2
})