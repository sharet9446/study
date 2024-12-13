function solution(n) {
    let answer = 0;
    let x = n % 2 == 0 ? n : n - 1;
    while (x > 0) {
        answer += x
        x -= 2
    }
    return answer
}