/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const obj = {
    name: 'Bob',
    age: 32,
    gender: 'male',
  };
  return obj;
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  const obj = person;
  person.name = 'Mary';
  person.age = 37;
  person.gender = 'female';
  return obj;
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *        Mary: [Random Number],
 *        Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  const array = persons;
  const obj = {};
  array.forEach((arr) => {
    console.log(arr);
    obj[arr] = Math.floor(Math.random() * 10) + 1;
  });
  return obj;
}
assignNumber(['Bob', 'Mary', 'Ann', 'Mike']);

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

// function isDuplicate(array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     if (!obj[value]) {
//       obj[value] = 1;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }
// isDuplicate([1, 2, 2, 3]);

function isDuplicate(array) {
  const object = {};

  for (const item of array) {
    if (object[item]) {
      return true;
    } else {
      object[item] = true;
    }
  }
  return false;
}

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate,
};
