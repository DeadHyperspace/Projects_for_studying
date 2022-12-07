var index = 0;
showImg(index);
function showImg(i) {
    index += i;
    var imgs = document.getElementsByClassName("img");
    var dots = document.getElementsByClassName("dot")
    for(i = 0; i < imgs.length; i++){
        imgs[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if(index > imgs.length - 1){
        index = 0;
    }
    if(index < 0){
        index = imgs.length - 1;
    }
    imgs[index].style.display = "block";
    dots[index].className += " active"
}

