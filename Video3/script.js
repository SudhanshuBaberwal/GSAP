var path = `M 10 300 Q 500 100 990 100`

var finalPath = `M 300 100 Q 500 100 990 100`

var string = document.querySelector("body")

string.addEventListener("mousemove" , (dets) => {
    path = `M 300 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path" , {
        attr : {    // attribute change using attr
            d : path,
            duration : 0.3,
            ease : "power3.out"
        }
    })
})

string.addEventListener("mouseleave" , () => {
    gsap.to("svg path" , {
        attr : {
            d : finalPath,
            duration : 0.8,
            ease : "elastic.out(1,0.2"
        }
    })
})
// string.addEventListener("mouseenter" , () => {
//     console.log("entered")
// })
// string.addEventListener("mouseleave" , () => {
//     console.log("leaved")
// })