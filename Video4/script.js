var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove" , function(dets){
    console.log("event perfoemed")
    gsap.to(cursor , {
        x : dets.x,
        y : dets.y
    }) 
})

image.addEventListener("mouseenter" , () => {
    // cursor.innerHTML = 
    gsap.to(cursor , {
        scale : 2
    })
})
image.addEventListener("mouseleave" , () => {
    gsap.to(cursor , {
        scale : 1
    })
})