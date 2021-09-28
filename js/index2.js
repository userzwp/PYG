window.onload = function() {
    var regtel = /^1[3|4|5|6|7]\d{9}$/;
    var tel = document.querySelector("#tes")
    tel.onblur = function() {
        if (regtel.test(this.value)) {
            console.log("正确的")
        } else {
            console.log("不正确 ")
        }
    }
}