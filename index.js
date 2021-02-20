
var onePorkBuns = 2;
var porkBuns; 
var change;

function payPorkBuns(money) {
    
    porkBuns = calculatePorkBuns(money, onePorkBuns);

    console.log("You get " + porkBuns + " porkbuns.");
    
    change = calculateChange(money, onePorkBuns);

    console.log("Your total change is " + change + ".");

}



function calculatePorkBuns(money, cost) {
    // write code here below this line
    var buns = money/cost  
    return Math.floor(buns);
    // write code here above this line
}

function calculateChange(money, cost) {
    // write code here below this line
    var porkBuns = money%cost
    
    return porkBuns
    
    // write code here above this line
}


payPorkBuns(5)


module.exports = {
    calculatePorkBuns, 
    calculateChange,
}