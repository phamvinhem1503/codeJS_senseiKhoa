function demoFunction() {
    let inputData = document.getElementById("inputData").value;
    console.log(inputData);
     
    let itemCon = document.createElement("li");

    itemCon.textContent = inputData;

    let danhSach = document.getElementById("danhSach");
    
    danhSach.appendChild(itemCon);
}
let EnterButton = document.getElementById("Enterbutton")