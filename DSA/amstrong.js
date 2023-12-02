// Check whether a number is amstrong number or not. 
let num=153;
const copy=num;
let amstrong=0;
while(num!=0)
{
    //find out the reminder
    let rem=num%10;
    //add the rem^3
    amstrong=amstrong+rem**3;
    //cutting of the number by one digit.
    num=(num-rem)/10;
}
if(amstrong===copy)
{
    console.log(`${amstrong} is amstrong number`);
}
else
{
    console.log(`${amstrong} is not amstrong number`);
}