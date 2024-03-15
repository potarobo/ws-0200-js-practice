/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  let count = 0;
  while (str[count]) {
    count++;
  }
  return count;
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  let count = 0;
  while (str[count]) {
    count++;
  }
  return count % 2 === 0;
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
  if (!str) {
    return '';
  }
  return str[0];
}

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  if (!str) {
    return '';
  }
  let count = 0;
  while (str[count]) {
    count++;
  }
  return str[count - 1];
}
/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  // if (!str) {
  //   return '';
  // }
  // let count = 0;
  // while (str[count]) {
  //   count++;
  // }
  // let text = '';
  // for (let i = a - 1; i < b; i++) {
  //   if (b > count) {
  //     b = count;
  //   }
  //   text += str[i];
  // }
  // return text;
  if (!str) {
    return '';
  }
  let end = b > str.length ? str.length : b;
  let text = '';
  for (let i = a - 1; i < end; i++) {
    text += str[i];
  }
  return text;
}
substring('abcdef', 2, 7);

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

function isInclude(a, b) {
  if (b === '') {
    return true;
  }
  for (let i = 0; i < b.length; i++) {
    if (a[i] === b[i]) {
      return true;
    }
  }

  return false;
}
isInclude('workplace', 'orm');

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

function printByChar(str) {
  let count = 0;
  while (str[count]) {
    count++;
  }
  for (let i = 0; i < count; i++) {
    console.log(str[i]);
  }
}

module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar,
};
