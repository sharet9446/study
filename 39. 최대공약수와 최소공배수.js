function solution(n, m) {
    let answer = [];
    let high = '';
    for (let j = 1; j <= n; j++) {
        if (n % j === 0) {
            answer.push(j)
        }
    }
    for (let i = 1; i <= m; i++) {
        if (m % i === 0 && answer.includes(i)) {
            high = i
        }
    }
    return [high, n * m / high];
}