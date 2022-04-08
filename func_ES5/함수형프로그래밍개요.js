/* 함수형 프로그래밍

  함수형 프로그래밍은 성공적인 프로그래밍을 위해 부수 효과를 미워하고 조합성을 강조하는 프로그래밍 패러다임이다. 
  - 부수효과를 미워한다 => 순수 함수를 만든다. 
  - 조합성을 강조한다 => 모듈화 수준을 높인다.
  - 순수 함수 => 오류를 줄이고 안정성을 높인다.
  - 모듈화 수준이 높다 => 생산성을 높인다. 
  */

/* 순수 함수 
    
  1. 동일한 파라미터를 넣었을 때, 항상 같은 결과를 리턴한다. 
  2. 부수 효과가 없다. (부수효과? 함수가 리턴값으로 결과를 만드는 것 외에 외부 상태에 영향을 미치는 것을 말함.)
  */

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

/*
  아래 코드에서는 var로 선언된 c의 값이 바뀔 수 있기 때문에 순수 함수라고 할 수 없음. 
  그러나, const로 선언한다면 부수 효과가 없기 때문에 순수함수라고 할 수 있다. 
*/
var c = 10;

function add2(a, b) {
  return a + b + c;
}

console.log(add2(1, 2));
console.log(add2(1, 3));
console.log(add2(1, 4));

c = 20;
console.log(add2(1, 2));
console.log(add2(1, 3));
console.log(add2(1, 4));

// 얘도 순수 함수가 아니겠쥬?
var c = 20;

function add3(a, b) {
  c = b;
  return a + b;
}

console.log('c: ', c); // 1
console.log(add3(20, 30));
console.log('c: ', c); // 2

// 1번에서의 c와 2번에서의 c는 결과가 달라지겠죠? 이렇게 부수 효과가 있는 함수는 순수 함수 X

var obj1 = { val: 10 };
function add4(obj1, b) {
  obj1.val += b;
}

console.log(obj1.val);
add4(obj1, 20); // 이렇게 직접 객체의 값을 변경할 수 있는 부수효과를 가진 함수는 순수 함수 X
console.log(obj1.val);

/* 보통 데이터가 객체로 넘어오게 되는데, 위의 함수처럼 직접 값을 변경하는 것을 좋지 못한 방법이다. 
   함수형 프로그래밍에서는 객체의 원본 값은 그대로 두고, 복사하여 새로운 값으로 리턴하는 식으로 한다. */

// 위의 코드를 순수 함수로
var obj1 = { val: 10 };

function add5(obj, b) {
  return { val: obj.val + b }; // 값을 참조할 뿐 변경하지는 않음
}

console.log(obj1.val);
var obj2 = add5(obj1, 20);
console.log(obj1.val);
console.log(obj2.val);

/* 함수형 프로그래밍은 평가 시점이 중요하지 않다 !!!!
   순수 함수가 아니면 평가 시점에 따라서 값이 변경되는 경우가 많기 때문에 평가 시점이 중요하지만, 
   함수형 프로그래밍은 순수 함수를 통해서 조합성을 강조하는 프로그래밍이기 때문에, 평가 시점이 중요하지 않다 ~  
*/

/* 일급 함수 : 자바스크립트에서는 일반적으로 함수가 일급 함수이다. => 함수를 값으로 다룰 수 있다. */
var f1 = function (a) {
  return a * a;
};
console.log(f1);

var f2 = add;
console.log(f2);

function f3(f) {
  return f();
} // function f3(f) {function f() {}}

console.log(
  f3(function () {
    return 10;
  })
);

console.log(
  f3(function () {
    return 20;
  })
);

/* add_maker */
function add_maker(a) {
  // 아래 함수는 클로저이면서 순수함수
  return function (b) {
    return a + b;
  };
}

var add10 = add_maker(10);

console.log(add10(20));

var add5 = add_maker(5);
var add15 = add_maker(15);

console.log(add5(10));
console.log(add15(10));

function f4(f1, f2, f3) {
  return f3(f1() + f2());
}

console.log(
  f4(
    function () {
      return 2;
    },
    function () {
      return 1;
    },
    function (a) {
      return a * a;
    }
  )
);
