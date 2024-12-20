function solution(left, right) {
    let divisors = []
    for (let first = left; first <= right; first++) {
        let divisor = []
        for (let i = 1; i <= first; i++) {
            if (first % i === 0) {
                divisor.push(i);
            }
        }
        divisors.push(divisor)
    }
    return divisors.reduce((acc, div) => div.length % 2 ? acc - div.at(-1) : acc + div.at(-1), 0)
}