const arr = [1, 2, 3, 3, 4];
console.log(arr.length); // 5 (중복된 값도 포함)

// 희소 배열 (Sparse Array)
const sparseArr = [];
sparseArr[100] = "hello";
console.log(sparseArr.length); // 101 (마지막 인덱스 기준으로 길이 계산)
console.log(sparseArr);



const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet.size); // 4 (중복된 값 제거)

mySet.add(5);
console.log(mySet.size); // 5 (새로운 값 추가)

mySet.add(1);
console.log(mySet.size); // 5 (중복된 값은 무시됨)

mySet
console.log('mySet: ', mySet);