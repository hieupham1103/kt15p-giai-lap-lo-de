
var hinh = new Array("1.png", "2.png", "3.png", "4.png", "5.png", "6.png");
var hinhTaiXiu = new Array("tai.png", "xiu.png");
var count_dice = 0;
const limit_dice = 5;
var cash = 10;

function random(n){
    return Math.floor(Math.random() * n);
}

function dice() {
    if (value_check == "none"){
        alert("bạn chưa chọn");
        return;
    }
    if (cash <= 0){
        alert("hết tiền rồi");
        return;
    }
    count_dice++;
    // if (count_dice >= limit_dice){
    //     document.getElementById('dungnghiennua').style.display = "block";
    //     alert("bạn đã chơi quá nhiều, nghỉ thôi :(")
    // }
    var b = random(6);
    var a = random(6);
    change_img("dice-1", "images/" + hinh[a]);
    change_img("dice-2", "images/" + hinh[b]);
    if (value_check == "tai"){
        if ((a + b) % 2 == 0){
            cash++;
            // alert("bạn đã thắng");
        }
        else{
            cash--;
            // alert("bạn đã thua");
        }
    }
    else{
        if ((a + b) % 2 == 1){
            cash++;
            // alert("bạn đã thắng");
        }
        else{
            cash--;
            // alert("bạn đã thua");
        }
    }
    
    console.log(cash)
    change_img("taixiu", "images/" + hinhTaiXiu[(a + b) % 2]);
    document.getElementById("cash").innerHTML = "$" + cash
}

function change_img(element, src) {
    document.getElementById(element).src = src;
}
function change_bg(){
    alert("đổi background");
    var options = document.getElementById("bg-option").options;
    if (options[0].selected == true) {
        document.body.style.backgroundImage = "url('images/bg-1.png')";
    }
    else{
        document.body.style.backgroundImage = "url('images/bg-2.png')";
    }
}

var value_check = "none";

function tai_change(){
    if (document.getElementById("tai").checked == true){
        document.getElementById("xiu").checked = false;
        value_check = "tai";
    }
    else{
        value_check = "none";
    }
}

function xiu_change(){
    if (document.getElementById("xiu").checked == true){
        document.getElementById("tai").checked = false;
        value_check = "xiu";
    }
    else{
        value_check = "none";
    }
}
    