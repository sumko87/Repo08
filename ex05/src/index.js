// Write code below this line
var sum =0;
function addThree() {
    sum+=3;
    console.log("sum from addThree: " + sum);
}
console.log(addThree());
function addFive() {
    sum+=5;
    console.log("sum from addFive: " + sum);
}
console.log(addFive());
// Write code above this line
module.exports = {
    addThree,
    addFive
};