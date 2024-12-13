function solution(num1, num2) {
    var answer = 0;
    answer = Math.floor(num1 / num2) // 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 정수 값 반환
    answer = Math.trunc(num1 / num2) // 주어진 숫자의 소수부분을 제거하고 숫자의 정수부분을 반환

    // Math.trunc vs Math.floor
    // Math.trunc는 단순히 소수부분을 제거하는 것.
    // Math.trunc(-5.95) // -5
    // Math.floor은 내림을 하는 것.
    // Math.floor은(-5.95) // -6

    return answer;
}