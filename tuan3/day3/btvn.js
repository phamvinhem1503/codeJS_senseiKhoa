function simpleCalcul() {
    // console.log("nhập vào lần lượt gía trị a.b vào bên dưới")

    let inputA = prompt("nhập số thứ nhất : a")
    inputA = parseFloat(inputA);

    let inputB = prompt("nhập số thứ 2: b")
    inputB = parseFloat(inputB);
    // kiểm tra giá trị đầu vào
    if (isNaN(inputA) || isNaN(inputB)) {
        alert("bạn phải nhập 2 số hợp lệ ")
        return;
    }
    // chon phep tFln voi a,b 
    let calcul = prompt("vui lòng chọn phép tính cần thực hiện: + - * /")
    let ketQua;
    switch (calcul) {
        case "+":
            ketQua = inputA + inputB
            break;
        case "-":
            ketQua = inputA - inputB
            break;
        case "*":

            ketQua = inputA * inputB
            break;
        case "/":
            if (inputB === 0) {
                alert("giá trị B phải lớn hơn 0")
                return
            } else {
                ketQua = inputA / inputB
            }
            break;
        default:
            alert("phép toán không hợp lệ")
            return;
    }
    // alert(`Kết quả: ${inputA} ${calcul} ${inputB} = ${ketQua}`);
    alert("Kết quả:" + inputA + calcul + inputB + "=" + ketQua);
}