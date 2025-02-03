function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let count = 0;
  const numsLength = nums.length;

  for (let i = 0; i < numsLength - 2; i++) {
    for (let j = i + 1; j < numsLength - 1; j++) {
      for (let k = j + 1; k < numsLength; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }

  return count;
}
