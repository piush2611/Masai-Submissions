var total = 50;
if(total < 300) {
    console.log("Discount is invalid, final price is " + total); 
} else if(total >= 300 && total <= 1000) {
    var discountAmount = total*0.1;
    var finalPrice = total - discountAmount;
    console.log("Final Price : " + finalPrice + ", Discount Price : " + discountAmount);
} else {
    finalPrice = total - 100;
    console.log("Final Price : " + finalPrice + ", Discount Price : 100");
}