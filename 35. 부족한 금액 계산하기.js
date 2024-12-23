function solution(price, money, count) {
    let total = 0;
    for (let c = 1; c <= count; c++) {
        total += price * c
    }
    return money - total < 0 ? total - money : 0
}