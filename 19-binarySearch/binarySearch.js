class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {

    let mid = Math.floor(nums.length/2);
    if(nums.length <= 1){
      if (nums[0] == target){
        return true;
      }
      else {
        return false;
      }
    }
    if(nums[mid] == target){
      return true;
    }
    else if (nums[mid] < target){
      return this.binarySearch(nums.slice(mid+1,nums.length), target);
    }
    else if(nums[mid] > target){
      return this.binarySearch(nums.slice(0,mid),target);
    }
    
    
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;