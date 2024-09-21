function fib(n){
  if(n < 0){
    return false;
  }
  if(n == 0){
    return 0;
  }
  if(n == 1){
    return 1;
  }
  return fib(n-1) + fib(n-2)
}
fib(0);
fib(1);
fib(5);
fib(10);
