/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  let arr1 = str.slice(-num);
  let arr2 = str.slice(0, -num);
  let result = arr1 + arr2;
  return result;
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  let vowels = ['a', 'i', 'u', 'e', 'o'];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1.match(s2)) {
      s1 = s1.replace(s2, '');
      count += 1;
    }
  }
  return count;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
    if (str === result) {
      return true;
    }
  }
  if (str === '') {
    return true;
  }
  return false;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  // if (num === 2) {
  //   return true;
  // } else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num === 1) {
  //   return false;
  // }
  // return true;
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 4 && array[i + 1] === 4) {
      array.splice(i + 2, 1);
      console.log(`array:${array}`);
    } else if (array[i] !== 4 && array[i + 1] === 4 && array[i + 2] !== 4) {
      array.splice(i + 2, 1);
      console.log(`array:${array}`);
    } else if (array[i] === 4 && array[i + 1] !== 4) {
      array.splice(i + 1, 1);
      console.log(`array:${array}`);
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (array[j] === 4) {
      count++;
      console.log(`count:${count}`);
    }
  }
  count *= 4;

  for (let k = 0; k < array.length; k++) {
    sum += array[k];
  }
  return sum - count;
}
sumWithout4andNext([4, 4, 1, 2]);

//   let sum = 0;
//   let skipNext = false;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 4) {
//       skipNext = true;
//     } else if (!skipNext) {
//       sum += array[i];
//     } else {
//       skipNext = false;
//     }
//   }
//   return sum;
// }

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext,
};
