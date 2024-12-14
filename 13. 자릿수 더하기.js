function solution(n) {
    let sum = 0
    let str = String(n)
    let newn = str.split('').map((a) => Number(a))
    for (let s of newn) {
        sum += s
    }
    return sum
}