// ary: number array
function sum(ary) {
  return ary.reduce((a,b)=>a+b)
}

console.log(sum([1, 5, 3, 2]));


//挑戰題 1
//不考慮 foreach，我只想到其他 1 種寫法: recursion

function sum(ary) {
  if(ary.length == 0){
    return 0;
  }
  return ary[0] + sum(ary.slice(1));
}

console.log(sum([1, 5, 3, 2])); 

//挑戰題 2

// input n return 1+2+3+...+n 
function sum(n) {
  return ary.reduce((a,b)=>a+b)
}

console.log(sum(n)); 
