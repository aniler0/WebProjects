let array = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpeg"]
let i = 1;
function next() {
    if (i == 0) {
        i++;
    }


    document.getElementById('deneme').src = array[i];
    if (i < 3) {
        i++;
    }



}
function prev() {
    if (i == 3) {
        i--;
    }
    document.getElementById('deneme').src = array[i];

    if (i > 0) {
        i--;
    }


}