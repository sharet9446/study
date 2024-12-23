let a = [1];
let num = 14;

for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
        a.push(i)
    }
}

a.push(num)



let b = [1, 2, 7, 14]

let c = []

c.push(1, 2, 7, 14)


console.log(a);
console.log(b);
console.log(c);

console.log(a == b);
console.log(a == c);
console.log(b == c);


console.log(a[3]);
console.log(b[3]);
console.log(c[3]);

console.log(a[3] == b[3]);
console.log(a[3] == c[3]);
console.log(b[3] == c[3]);