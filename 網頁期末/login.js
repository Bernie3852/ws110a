/**
* Created by Kay on 2016/3/8.  Edit by Bernie at 2022/01/08.
*/
function login() {
    var username = document.getElementById("username");                     //從網頁中獲取username
    var pass = document.getElementById("password");                         //從網頁中獲取password

    if (username.value == "") {                                             //如果使用者沒有輸入帳密
        alert("請輸入使用者名稱");
    } else if (pass.value == "") {
        alert("請輸入密碼");

    } else if (username.value == "neko" && pass.value == "meowmeow") {      //如果使用者輸入正確的帳號密碼
        window.location.href = "welcome_page.html";                         //將畫面導向至歡迎頁面
    } else {
        alert("錯誤的使用者名稱或密碼")                                     //如果使用者沒有輸入正確的帳號密碼
    }
}