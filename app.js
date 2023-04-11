let closebtn = document.querySelector(".close i");
let sidebar = document.querySelector(".sidebar");
let hamburger = document.querySelector(".menulines i")

hamburger.addEventListener("click", ()=>{
    sidebar.classList.toggle("notShow")
    sidebar.classList.toggle("show")
})
closebtn.addEventListener("click", ()=>{
    sidebar.classList.add("notShow")
});
