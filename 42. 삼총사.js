function solution(number) {
    let fir_idx = 0
    let count = 0
    let sum = 0
    while (fir_idx < number.length) {
        for (let i = 1; fir_idx + i < number.length - 1; i++) {
            for (let j = 1; fir_idx + i + j < number.length; j++) {
                if (sum === number[fir_idx] + number[fir_idx + i] + number[fir_idx + i + j]) {
                    count++
                }
            }
        }
        fir_idx++
    }
    return count
}