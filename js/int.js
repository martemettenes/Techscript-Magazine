$('article').readingTime();


//ARTICLE PICTURE SLIDER

var i = 0;
var path = new Array();

path[0] = "image_runa/2015_0724_GK_RifleHack123.jpg";
path[1] = "image_runa/runa.jpg";


function swapImage() {

    document.slide.src = path[i];

    if (i < path.length - 1) {
        i++
    } else {
        i = 0;
    }
    setInterval("swapImage()", 10000);




}

timer = setInterval("swapImage()", 10000);


var il = 0;
var text = new Array();

text[0] = "In 2015 Runa Sandvik and Michael Auger figured out how to hack into a smart rifle to disable it or control the trajectory of its bullets.";
text[1] = "Runa A. Sandvik believes that most editors offer customs solutions when they promise &#34;full source protection&#34;.";


function swapText() {

    document.querySelector('.img_description').innerHTML = text[i];

    if (il < text.length - 1) {
        il++
    } else {
        il = 0;
    }
    setInterval("swapText()", 10000);
}


timer2 = setInterval("swapText()", 10000);
