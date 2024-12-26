function solution(n, m) {
    let answer = [];
    let high = [];
    for (let j = 1; j <= n; j++) {
        if (n % j === 0) {
            answer.push(j)
        }
    }
    for (let i = 1; i <= m; i++) {
        if (m % i === 0 && answer.includes(i) === true) {
            high.push(i)
        }
    }

    return [Math.max(...high), n * m / Math.max(...high)];
}