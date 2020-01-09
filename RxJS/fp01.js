// 커링

import _ from 'lodash';

const add = (a, b, c) => a + b + c; // 다항 함수
// const curriedAdd = a => b => c => a + b + c; // add라는 함수를 커링시킨 함수
const curriedAdd = _.curry(add);

add(1, 2, 3);
// curriedAdd(1)(2)(3);
console.log(add(1, 2, 3));
console.log(curriedAdd(1)(2)(3));

///////////////////////////////////////////////////////////////

const addVAT = (rate, amount) => amount * (1 + rate / 100);
const addVATCurried = _.curry(addVAT);
const addNationVAT = addVATCurried(5);
const addStateVAT = addVATCurried(10);

console.log(addNationVAT(1000));
console.log(addNationVAT(2000));
console.log(addStateVAT(1000));
console.log(addStateVAT(2000));
