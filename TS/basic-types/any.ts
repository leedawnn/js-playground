function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; // 막 써도 에러 안남ㅋ

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1; // b가 any가 됨(전파)
  return b;
}

const c = leakingAny({ num: 0 });
c.indexOf('0');
