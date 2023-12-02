// Count the number of digit
let a=1221;
let count=0;
while(a!=0)
{
    count++;
    let rem=a%10; //calculating reminder
    let min=a-rem; //subtract the reminder valur from the orginal value
    a=min/10; //reduce the one digit place
}
console.log(`The total digit is ${count}`);