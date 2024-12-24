function solution(arr1, arr2) {
    let arrSum = []
    for (let i = 0; i < arr1.length; i++) {
        arrSum[i] = []
        for (let j = 0; j < arr1[i].length; j++) {
            arrSum[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return arrSum
}