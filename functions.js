function addNumbers(num1, num2) {
    return num1 + num2;
}
function addNumbers2(num1, num2) {
    if (typeof num2 == "undefined") {
        return num1;
    }
    return num1 + num2;
}
function addNumbers3(num1, num2) {
    if (num2 === void 0) { num2 = 100; }
    return num1 + num2;
}
function addNumbers4(num1, num2) {
    console.log("Geri Donus Yok");
}
console.log(addNumbers(5, 88));
console.log(addNumbers2(88));
console.log(addNumbers3(34));
