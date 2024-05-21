
let full = document.querySelector('.full')
gsap.registerPlugin(ScrollTrigger)

function fadein(){
    gsap.to(full,{
    scrollTrigger: {
        trigger: full,
        start: "top center",
        toggleActions: "restart restart restart restart"
    },
    opacity: 1,
    duration: 1.5
})
}


