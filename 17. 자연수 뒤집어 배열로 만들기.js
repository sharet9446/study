function solution(n) {
    let x = []
    let m = String(n).split('').reverse()
    for (let i = 0; i < m.length; i++) {
        x.push(+m[i])
    }
    return x
}