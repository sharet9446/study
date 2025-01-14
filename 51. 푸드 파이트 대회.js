function solution(food) {
    var answer = '0';
    let foodNum;
    for (let i = food.length - 1; i > 0; i--) {
        foodNum = Math.floor(food[i] / 2);
        if (foodNum != 0) {
            answer = answer.padStart(foodNum + answer.length, i)
            answer = answer.padEnd(foodNum + answer.length, i)
        }
    }
    return answer;
}