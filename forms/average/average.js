let myNumbers = [ 34, 56, 117, 324, 183, 231, 72, 111, -10, 207]

let result = prompt("Do you want to sum or average the numbers?")
/*finding sum*/
var sum = 0;
for(var i = 0; i < myNumbers.length; i++){
  sum += myNumbers[i]
}
/*finding average*/
let avg = sum / myNumbers.length;

/*if statement depending on what you chose*/
if (result == 'sum')
{alert(`The sum of the numbers is ${sum}.`)}

else if (result == 'average')
 {alert(`The average of the numbers is ${avg}.`)} 
 
else {alert('You did not enter average or sum')}

let extraNumber1 = Number(prompt("Enter another number: "))
let extraNumber2 = Number(prompt("Enter another number: "))
let extraNumber3 = Number(prompt("Enter another number: "))
myNumbers.push(extraNumber1, extraNumber2, extraNumber3)

/* final alert */
alert(`The last number in the array with adding 10 is ${extraNumber3 + 10}.`)