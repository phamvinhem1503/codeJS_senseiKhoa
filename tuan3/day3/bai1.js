let diem = prompt("nhap diem trung binh vao day");
diem = parseInt(diem);
if (diem>=8) {
    console.log("hoc sinh gioi")
}else if(diem>=6.5&& diem<8){
    console.log("hoc sinh kha")
}else if(diem >= 5&& diem < 6.5){
    console.log("hoc sinh trung binh")
} else {
    console.log("khong du diem de len lop")
}