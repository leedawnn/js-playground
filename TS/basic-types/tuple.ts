let x: [string, number];

x = ['hello', 39]; // 순서, 타입, 길이가 다 맞아야함

x = [10, 'leedawn']; // 순서 error

x[1] = 'world'; // 길이 error

const person: [string, number] = ['leedawn', 39];

const [first, second, third] = person;
