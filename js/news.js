$('article').readingTime();



//ARTICLE PICTURE SLIDER

var i = 0;
var path = new Array();

path[0] = "image_mind/4.jpg";
path[1] = "image_mind/Kaifosh.jpg";
path[2] = "image_mind/Berenzwig2.jpg";


function swapImage() {

    document.slide.src = path[i];

    if (i < path.length - 1) {
        i++
    } else {
        i = 0;
    }
    setTimeout("swapImage()", 10000);
}

timer = setTimeout("swapImage()", 10000);
