let n=5;
let number ="";
 let count =0;
for(i=1;i <= n;i++)
{
    for(j = 0;j<n-i;j++)
    {
        number +="";
    }
        for(k = 0;k < 2*i-1; k++)
        {
        number += i+count;
    count++;
        }
number += "\n";
    }
    console.log(number);

