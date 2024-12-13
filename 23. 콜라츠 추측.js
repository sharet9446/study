function solution(num) {
    let result = 0
    while (1 < num) {
        if (num % 2 == 0) {
            num = num / 2
            result++
        }
        else {
            num = num * 3 + 1
            result++
        }
        if (500 < result) {
            return -1
        }
    }
    return result
}