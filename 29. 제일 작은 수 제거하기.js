function solution(arr) {
    const result = arr.filter(num => num !== Math.min(...arr))
    return result.length === 0 ? [-1] : result
}