function solution(x) {
    return x % [...String(x)].map(Number).reduce((sum, sol) => sum + sol, 0) === 0 ? true : false
}