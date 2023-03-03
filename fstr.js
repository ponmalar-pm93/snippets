let n = 5; 
let count =0;
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <=i; j++) {
        string += "*";
        //count--;
      }
      string += "\n";
    }
    console.log(string);