function solution(a, b) {
    return a.reduce((acc, num, i) => acc + num * b[i], 0)
}