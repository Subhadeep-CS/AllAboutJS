// find out the prime factor of a number

let num=121;
for(let i=2;i<=num;i++)
{
    if(num%i===0)
    {
        if(isPrime(i))
        {
            console.log(`${i}`);
        }
    }
}
function isPrime(num)
{
    let flag=0;
    for(let i=2;i<=num/2;i++)
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