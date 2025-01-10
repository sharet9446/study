function solution(numbers) {
    var answer = [];
    let j = 1
    let k = 1
    let set = new Set()
    for (let i = 0; i < numbers.length - 1; i++) {
        while (j < numbers.length) {
            set.add(numbers[i] + numbers[j])
            j++
            if (j === numbers.length) {
                k++
                j = k
                break
            }
        }
    }
    answer = [...set]
    return answer.sort((a, b) => a - b);
}