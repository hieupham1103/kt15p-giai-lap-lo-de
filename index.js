
var hinh = new Array("1.png", "2.png", "3.png", "4.png", "5.png", "6.png");
var hinhTaiXiu = new Array("tai.png", "xiu.png");
var count_dice = 0;
const limit_dice = 5;

function random(n){
    return Math.floor(Math.random() * n);
}

function dice() {
    count_dice++;
    if (count_dice >= limit_dice){
        document.getElementById('dungnghiennua').style.display = "block";
        alert("bạn đã xóc quá nhiều, nghỉ thôi :(")
        return;
    }
    var b = random(6);
    var a = random(6);
    change_img("dice-1", "images/" + hinh[a]);
    change_img("dice-2", "images/" + hinh[b]);
    var taixiu = Number((a + b) > 6);
    console.log(taixiu)
    change_img("taixiu", "images/" + hinhTaiXiu[taixiu]);
    
}

function change_img(element, src) {
    document.getElementById(element).src = src;
}