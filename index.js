const mobile = document.querySelector("i");
const nav = document.querySelector("nav");

function toggle(){
    if(nav.classList.contains("active")){
        mobile.classList.replace('fa-times',"fa-bars");
        document.body.style.overflowY = "initial";
    }else{
        mobile.classList.replace("fa-bars","fa-times")
        document.body.style.overflowY = "hidden"
    }
    nav.classList.toggle("active")
}

function windowResize() {
    if(window.screen.width > 1500){
        nav.classList.remove("active");
        mobile.classList.replace("fa-times","fa-bars")
        document.body.style.overflowY = "initial"
    }
}

window.addEventListener('resize',windowResize);
mobile.addEventListener("click",toggle);

const carousel_img = document.querySelector(".current-img-container img")
const carousel_num = document.querySelector(".current-img-container div")

const change_pic_fw = () => {
    carousel_img.classList.add("opacity");
    carousel_img.onanimationed = () =>{
        carousel_img.classList.remove("opacity");
    };
    if(carousel_img.src.match("./carousel/flowers1.jpg")){
        carousel_img.src = "./carousel/flowers2.jpg";
        carousel_num.innerHTML = "02"
    }
    else if(carousel_img.src.match("./carousel/flowers2.jpg")){
        carousel_img.src = "./carousel/flowers3.jpg";
        carousel_num.innerHTML = "03"
    }
    else {
        carousel_img.src = "./carousel/flowers1.jpg";
        carousel_num.innerHTML = "01"
    }
}

const change_pic_bk = () => {
    carousel_img.classList.add("opacity");
    carousel_img.onanimationed = () =>{
        carousel_img.classList.remove("opacity");
    };
    if(carousel_img.src.match("./carousel/flowers3.jpg")){
        carousel_img.src = "./carousel/flowers2.jpg";
        carousel_num.innerHTML = "02"
    }
    else if(carousel_img.src.match("./carousel/flowers2.jpg")){
        carousel_img.src = "./carousel/flowers1.jpg";
        carousel_num.innerHTML = "01"
    }
    else {
        carousel_img.src = "./carousel/flowers3.jpg";
        carousel_num.innerHTML = "03"
    }
}

setInterval(change_pic_fw,6000);
