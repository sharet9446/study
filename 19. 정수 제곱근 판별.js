function solution(n) {
    let x = Math.sqrt(n) // 숫자의 제급근을 반환
    if (1 == Number.isInteger(x) /** 숫자가 정수인지 판단, 정수면 true, 1, 정수가 아니면 false, -1을 반환  */) {
        return (x + 1) ** 2
    }
    else {
        return -1
    }
}