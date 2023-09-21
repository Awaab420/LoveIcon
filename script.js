const container1=document.getElementById("container");
const icon=document.querySelector(".ri-heart-fill");
function time() {
    icon.style.opacity=0;
}

function love () {
    icon.style.transform="translate(-50%,-50%) scale(1.5)";
    setTimeout(time,1000)



}


container1.addEventListener("dblclick",love);

