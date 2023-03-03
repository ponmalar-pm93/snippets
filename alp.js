let n=5;
let string ="";
count =0;
for(let i = n;i>=0;i--)
{
    for( let j =i;j>=0;j--)

    {
        
        
        string += String.fromCharCode(j +  65);
        }
    // count++;   
    
    string += "\n";
}
console.log(string);
