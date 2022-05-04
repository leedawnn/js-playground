declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe; // 타입 가드

  const aString: string = maybe; // maybe가 true니까 string에 할당될 수 x
}

if (typeof maybe === 'string') {
  // typeof 타입 가드
  const aString: string = maybe;

  const aBoolean: boolean = maybe; // error
}
