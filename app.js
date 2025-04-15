
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        const test = document.querySelector("spline-viewer")
    const logo = test.shadowRoot.querySelector("#logo")
    logo.style.display = "none"
    },1000)
})