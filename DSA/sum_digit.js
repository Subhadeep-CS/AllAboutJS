// calculate sum of the digit of a number
let num=1221;
let sum=0;
while(num!=0)
{
    //find the reminder
    let reminder=num%10;
    //now add the reminder with sum
    sum=sum+reminder;
    //subtract that reminder from orginal value
    num=num-reminder;
    //divide the number by 10;
    num=num/10;
}
console.log(`The sum of digits is ${sum}`);