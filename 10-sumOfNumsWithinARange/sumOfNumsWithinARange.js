function sumOfNumsWithinARange(nums, start, end) {
  let counter = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] <= end && nums[i] >= start){
      counter++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;