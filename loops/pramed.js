let n =5;
let number ="";
for(i=1;i<=n;i++)
{
    for(j=0;j<=i-n;j++)
    {
        for(k=0;k<2*i-1;k++)
        
                number +=j+1;
    }
    number += "\n";
}
console.log(number);
