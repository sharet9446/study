function solution(a, b) {
    var answer = '';
    const week = {
        2: 'SUN',
        3: 'MON',
        4: 'TUE',
        5: 'WED',
        6: 'THU',
        0: 'FRI',
        1: 'SAT'
    }
    const day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sumDay = 0;
    for (let i = 0; i < a - 1; i++) {
        sumDay += day[i]
    }
    sumDay += b - 1
    let weekNumber = ((sumDay) % 7).toString()
    return week[weekNumber]
}