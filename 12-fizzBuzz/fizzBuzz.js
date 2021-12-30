function fizzBuzz(start, end) {
  let arr = [];
  let multiplesof3 = "Fizz"; 
  let multiplesof5 = "Buzz";
  let multiplesof3and5 = "FizzBuzz";

  for (start; start <= end; start++){
    if(start % 3 == 0 && start % 5 == 0){
      arr.push(multiplesof3and5);
    }
    else if (start % 3 == 0){
      arr.push(multiplesof3);
    }
    else if (start % 5 == 0){
      arr.push(multiplesof5);
    }
    else 
      arr.push(start);
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;