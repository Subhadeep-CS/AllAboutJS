// generate a prime number within a range
let upper=1;
let lower=100;
// checking the upper and lower in significant
if(lower>upper)
{
    // swap the item
    let temp=lower;
    lower=upper;
    upper=temp;
}

for(let i=lower;i<=upper;i++)
{
    if(isPrime(i))
    {
        console.log(`${i}`);
    }
}

function isPrime(num)
{
    let flag=0;
    for(i=2;i<=num/2;i++)
    {
        if(num%i===0)
        {
            flag=1;
            break;
        }
    }
    if(flag===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}