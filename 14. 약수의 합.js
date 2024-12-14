function solution(n) {
    let sum = 0
    for (let i = 0; i <= n; i++){
        n % i === 0 ? sum += i : 0
    }
    return sum
}