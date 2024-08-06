// let taskbar=document.getElementsByClassName("taskbar")[0]
// let startmenu=document.getElementsByClassName("startmenu")[0]
let startmenu=document.querySelector('.startmenu')
document.querySelector('#icons').onclick=()=>{
    startmenu.classList.toggle('active');
}
let desktop=document.querySelector('.desktop')
document.querySelector('#icons2').onclick=()=>{
    desktop.classList.toggle('active');
}
// taskbar.addEventListener("click", () => {
//     // console.log("clicked");
//         if (startmenu.style.bottom == "50px") {
//             startmenu.style.bottom = "-700px"
//         }
//         else {
//             startmenu.style.bottom = "50px"
//         }
//     }) 