function countOfAllNumbersSmallerThanTarget(nums, target) {
  let counter = 0;
  for(var i = 0; i < nums.length; i++){
    if(target > nums[i]){
      counter++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;