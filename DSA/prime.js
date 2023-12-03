// check whether a number is prime or not
let num=17;
let flag=0;
for(let i=2;i<=num/2;i++)
{
    if(num%i===0)
    {
        flag=1;
        break;
    }
}
if(flag===1)
{
    console.log(`The number ${num} is not prime`);
}
else
{
    console.log(`The number ${num} is prime`);
}