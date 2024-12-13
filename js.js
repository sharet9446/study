function sumRange(start, end) {
  if (start > end) [start, end] = [end, start]; {
    const n = end - start + 1;
    return n * (start + end) / 2;
  }
}

// 결과 출력
console.log(sumRange(93, 63)); // 1274 출력




const array = [1, 2, 3, 4, 5];

array.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});


function solution(arr, divisor) {
  var answer = arr.filter(v => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

console.log(solution([4, 3, 50, 12], 1))


const arr = [1, 3, 4,4,4,4,7, 10, 15];

const index = arr.findIndex(x => x > 5);
console.log(index);

let arr4 = new Array(5); // 길이가 5인 빈 배열 생성
arr4.push('banana','오렌지')
console.log(arr4[6])

// 배열 생성
let numbers = [1, 2, 3];

// 요소 추가
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// 요소 제거
let lastElement = numbers.pop();
console.log(numbers); // [1, 2, 3]
console.log(lastElement); // 4

// 배열 순회
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
}); // Index 0: 1, Index 1: 2, Index 2: 3

// 배열 변환
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]

// 조건에 맞는 요소 추출
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2]

// 배열 값 축소
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6

const number = [1, 2, 3, 4, 5];

const removed = number.splice(2, 2); // 인덱스 2부터 2개 제거
console.log(number); // [1, 2, 5]
console.log(removed); // [3, 4]

number.splice(2, 0, 99); // 인덱스 2에 99 추가
console.log(number); // [1, 2, 99, 5]

number.splice(2, 1, 3, 4); // 인덱스 2에 1개 제거 후 3 추가
console.log(number); // [1, 2, 3, 4 ,5]