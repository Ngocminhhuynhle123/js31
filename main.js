

function baiTap1() {

    var n = 0;
    for (var i = 0; n < 10000; i++) {
        n = n + i;
    }
    var kq1 = "";
    kq1 += ("Bài 1" + "<br>" + "Tổng các số:" + n);
    kq1 += ("<br>" + "Số nguyên dương nhỏ nhất: " + i);
    document.getElementById("kq1").innerHTML = kq1;
};
/**
 * đầu vào số n
 * xử lí tạo 1 vongf lập trong đố cho biến n nhỏ hơn 10000 cho i cộng với n gán lại cho biến n để cộng dồn tới 10000 thì dừng
 * đầu ra kết quả tổng các số và số dương nhỏ nhất
 *  */
baiTap1();





/**
 * đầu vào biến x và n
 * xử lí tạo thêm biến 1 để tính bình phương biến s để tính tổng các số bình phương
 * tạo 1 vòng lập dk phải bé hơn n
 * cho t nhân với x rồi gán lại cho t tính binhg phương
 * lấy t cộng s tổng bình phương
 * Đầu ra tổng bình phương
 * */

// bài 2
document.getElementById("btn_2").onclick = function () {
    var num2_x = document.getElementById("num2_1").value * 1;
    var num2_n = document.getElementById("num2_2").value * 1;
    var t = 1;
    var s = 0;
    for (var i = 0; i < num2_n; i++) {
        t = t * num2_x;
        s = s + t;

    };    var kq2 = "S =  " + s;
    document.getElementById("kq2").innerHTML = kq2;
};


document.getElementById("btn4").onclick = function () {
    var div4 = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            div4 += "<div>div chẵn: " + i + "</div>";
            divs[i].style.background = "red";        }
            else if(i % 2 != 0)  {
            div4 += "<div>div lẽ: " + i + "</div>";
            divs[i].style.background = "blue";
        }
    };
    document.getElementById("kq4").innerHTML = div4;
};