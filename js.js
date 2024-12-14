function solution(n) {
  let sum = 0
  let str = String(n)
  // let mapfn = (arg) => Number(arg)
  let newArr = str.split('').map((a) => Number(a))

  for (let s of newArr) {
    sum += s
  }
  return sum
}
