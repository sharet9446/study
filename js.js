const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function sayHello(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

// call 사용 (쉼표로 인자 전달)
sayHello.call(person1, 'Hello'); // 출력: Hello, my name is Alice

// apply 사용 (배열로 인자 전달)
sayHello.apply(person2, ['Hi']); // 출력: Hi, my name is Bob