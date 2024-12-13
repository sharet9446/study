// for 문을 이용
function solution(absolutes, signs) {
    let sum = 0
    for (let i = 0; i < absolutes.length; i++){
         signs[i] ? sum += absolutes[i] : sum += absolutes[i] * -1
    }
    return sum
}

// reduce 메서드를 활용
function solution(absolutes, signs) {
    return absolutes.reduce((sum, value, index) => sum + (signs[index] ? value : -value), 0);
}

// 위 코드들을 화살표 함수로 최적화
let solution = (absolutes, signs) => absolutes.reduce((sum, val, i) => sum + (signs[i] ? val : -val), 0)