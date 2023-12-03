//find out the number is perfect number or not
// a special number whose sum of the factorial of digits is equal to the original number

let num=145;
const sm=num;
let sum=0;
while(num!=0)
{
    let rem=num%10; //find out the rum;
    sum=sum+factorial(rem);
    num=(num-rem)/10;
}
if(sum===sm)
{
    console.log(`The ${sm} is a perfect number`);
}
else
{
    console.log(`The number is not perfect number`);
}

function factorial(num)
{
    let fact=1;
    if(num===0)
    {
        return 1;
    }
    else
    {
        for(let i=1;i<=num;i++)
        {
            fact=fact*i;
        }
        return fact;
    }
}